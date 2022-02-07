import "./content.css";
import { urbitVisor } from "@dcspark/uv-core";

let myShip = "";

function initiateVisor(){
  urbitVisor.registerName("Urbit Notes Everywhere");
  urbitVisor.require(["shipName", "poke"], setData);
}
function setData(){
  urbitVisor.getShip().then(res => myShip = res.response);
}
initiateVisor();

function createPopup() {
  const div = document.createElement("div");
  div.id = "urbit-visor-notes-everywhere-popup";
  const textarea = document.createElement("textarea");
  const button = document.createElement("button");
  button.innerText = "Save in Mars";
  button.onclick = saveNote;
  div.append(textarea);
  div.append(button);
  return div;
}

document.addEventListener("keydown", (e: KeyboardEvent)=> {
  if (e.altKey && e.code === "Comma")
  togglePopup();
});
function makeIndex() {
  const DA_UNIX_EPOCH = BigInt("170141184475152167957503069145530368000");
  const DA_SECOND = BigInt("18446744073709551616");
  const timeSinceEpoch = (BigInt(Date.now()) * DA_SECOND) / BigInt(1000);
  return "/" + (DA_UNIX_EPOCH + timeSinceEpoch).toString();
}
// function buildPost(index: string, contents: Content[] = []) {
function buildPost(index: string, contents: any = []) {
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
  return body
};
function togglePopup(){
  const popup = createPopup();
  const existingPopup = document.getElementById("urbit-visor-notes-everywhere-popup");
  if (!existingPopup) document.body.appendChild(popup);
  else document.body.removeChild(existingPopup)
}
function extractText(): [string, string]{
  const text = (<HTMLInputElement>document.querySelector(
    "#urbit-visor-notes-everywhere-popup textarea"
  )).value;
  const title = text.split("\n")[0].substring(0, 50);
  const rest = text.replace(title, " ");
  return [title, rest]
}
function saveNote() {
  const [title, text] = extractText();
  const body = buildNotebookPost(title, text);
   urbitVisor
    .poke({ app: "graph-store", mark: "graph-update-3", json: body })
    .then(res => {
      const button: HTMLButtonElement = document.querySelector("#urbit-visor-notes-everywhere-popup button");
      button.disabled = true;
      if (res.status === "ok") button.innerText = "OK", close();
      else button.innerText = "Error";
    });
}
function close(){
  setTimeout(() => togglePopup(), 2000)
}