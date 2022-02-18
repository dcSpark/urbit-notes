

document.addEventListener("keydown", (e: KeyboardEvent)=> {
  if (e.altKey && e.code === "Comma")
  toggleFrame();
  if (e.code === "Escape")
  removeFrame();
});

function createFrame(){
  const el = document.createElement("iframe");
  el.id = "urbit-visor-notes-everywhere-popup"
  const url = chrome.runtime.getURL('iframe.html')
  el.src = url
  el.style.cssText = "height:100vh;width:100vw;position:fixed;top:0;left:0;"
  return el
}
function toggleFrame(){
  const popup = createFrame();
  const existingPopup = document.getElementById("urbit-visor-notes-everywhere-popup");
  if (!existingPopup) document.body.appendChild(popup);
  else document.body.removeChild(existingPopup)
}
function removeFrame(){
  const existingPopup = document.getElementById("urbit-visor-notes-everywhere-popup");
  if (existingPopup) document.body.removeChild(existingPopup)
}

window.addEventListener("message", (m)=>{
  if (m.data === "close_iframe")
  toggleFrame()
  else if (m.data === "remove_iframe")
  removeFrame()
})