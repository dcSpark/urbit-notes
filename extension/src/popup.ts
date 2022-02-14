import { urbitVisor } from "@dcspark/uv-core";

let myShip = "";

document.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.altKey && e.code === "Comma")
    window.parent.postMessage("close_iframe", "*");
  if (e.code === "Escape") window.parent.postMessage("remove_iframe", "*");
});

const iframe = document.getElementById("background");
const popup = document.getElementById("popup");
const textarea = <HTMLTextAreaElement>document.getElementById("textarea");
const button = <HTMLButtonElement>document.getElementById("button");
const createButton = <HTMLButtonElement>(
  document.getElementById("create-button")
);
button.addEventListener("click", saveNote);
createButton.addEventListener("click", createChannel);
function initiateVisor() {
  urbitVisor.registerName("Urbit Notes Everywhere");
  urbitVisor.require(["shipName", "scry", "poke", "thread"], setData);
}
function setData() {
  urbitVisor.getShip().then((res) => {
    console.log(res.response, "r");
    myShip = res.response;
    if (iframe) iframe.style.display = "block";
    checkChannelExists(res.response);
  });
}
initiateVisor();
interface Key {
  name: string; // the name of the channel, in kebab-case.
  ship: string; // the ship that hosts the channel
}
function checkChannelExists(ship: string) {
  urbitVisor.scry({ app: "graph-store", path: "/keys" }).then((res) => {
    if (res.status === "ok") {
      const keys: Key[] = res.response["graph-update"].keys;
      const haveKey = !!keys.find(
        (key: Key) => key.ship === ship && key.name === "my-urbit-notes"
      );
      if (haveKey) allow();
      else disallow();
    } else error();
  });
}

function allow() {}
function disallow() {
  textarea.value = `
  Welcome to Urbit Notes Everywhere
  It appears you don't have an Urbit Notes Notebook yet
  Click the button below to create it
  `;
  button.style.display = "none";
  createButton.style.display = "block";
}
function error() {
  button.innerText = "Error";
  button.disabled = true;
}
async function createChannel() {
  console.log("creating channel")
  const body = {
    create: {
      resource: {
        ship: `~${myShip}`,
        name: "my-urbit-notes",
      },
      title: "My Urbit Notes",
      description: "My Awesome Private Urbit Notebook",
      associated: {
        policy: {
          invite: { pending: [] },
        },
      },
      module: "publish",
      mark: "graph-validator-publish",
    },
  };
  urbitVisor
    .thread({
      threadName: "graph-create",
      inputMark: "landscape/graph-view-action",
      outputMark: "json",
      body: body,
    })
    .then((res) => {
      if (res.status === "ok") checkChannelExists(myShip);
    });
}
function makeIndex() {
  const DA_UNIX_EPOCH = BigInt("170141184475152167957503069145530368000");
  const DA_SECOND = BigInt("18446744073709551616");
  const timeSinceEpoch = (BigInt(Date.now()) * DA_SECOND) / BigInt(1000);
  return "/" + (DA_UNIX_EPOCH + timeSinceEpoch).toString();
}
function buildPost(index: string, contents = []) {
  return {
    author: "~" + myShip,
    contents: contents,
    hash: null,
    index: index,
    signatures: [],
    "time-sent": Date.now(),
  };
}
function buildNotebookPost(title: string, text: string) {
  const index = makeIndex();
  const contents = [{ text: title }, { text: text }];
  const children = {
    "1": {
      post: buildPost(`${index}/1`),
      children: {
        "1": {
          children: null,
          post: buildPost(`${index}/1/1`, contents),
        },
      },
    },
    "2": {
      post: buildPost(`${index}/2`),
      children: null,
    },
  };
  const nodes = {};
  nodes[index] = {
    children: children,
    post: buildPost(index),
  };
  const body = {
    "add-nodes": {
      resource: { name: "my-urbit-notes", ship: `~${myShip}` },
      nodes: nodes,
    },
  };
  return body;
}

function extractText(): [string, string] {
  const text = document.querySelector("textarea").value;
  const title = text.split("\n")[0].substring(0, 50);
  const rest = text.replace(title, " ");
  return [title, rest];
}
function saveNote() {
  const [title, text] = extractText();
  const body = buildNotebookPost(title, text);
  console.log("saving note, in theory")
  urbitVisor
    .poke({ app: "graph-store", mark: "graph-update-3", json: body })
    .then((res) => {
      console.log(res,  "poked")
      button.disabled = true;
      if (res.status === "ok") (button.innerText = "OK"), close();
      else button.innerText = "Error";
    });
}
function close() {
  setTimeout(() => {
    window.parent.postMessage("close_iframe", "*");
    window.close();
  }, 2000);
}
