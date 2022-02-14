import { urbitVisor } from "@dcspark/uv-core";

let myShip = "";

document.addEventListener("keydown", (e: KeyboardEvent)=> {
  console.log(e, "listener")
  if (e.altKey && e.code === "Comma")
  window.parent.postMessage("close_iframe", "*");
  if (e.code === "Escape")
  window.parent.postMessage("remove_iframe", "*");
});

const iframe = document.getElementById("background");
const button = <HTMLButtonElement>document.getElementById("button")
button.addEventListener("click", saveNote);

function initiateVisor() {
  urbitVisor.registerName("Urbit Notes Everywhere");
  urbitVisor.require(["shipName", "poke"], setData);
}
function setData() {
  urbitVisor.getShip().then((res) => {
    myShip = res.response;
    if (iframe) iframe.style.display = "block";
  });
}
initiateVisor();

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
  urbitVisor
    .poke({ app: "graph-store", mark: "graph-update-3", json: body })
    .then((res) => {
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
