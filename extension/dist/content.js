document.addEventListener("keydown", (e) => {
  if (e.altKey && e.code === "Comma")
    toggleFrame();
});
function createFrame() {
  const el = document.createElement("iframe");
  el.id = "urbit-visor-notes-everywhere-popup";
  const url = chrome.runtime.getURL("iframe.html");
  el.src = url;
  el.style.cssText = "height:100vh;width:100vw;position:fixed;top:0;left:0;";
  return el;
}
function toggleFrame() {
  const popup = createFrame();
  const existingPopup = document.getElementById("urbit-visor-notes-everywhere-popup");
  if (!existingPopup)
    document.body.appendChild(popup);
  else
    document.body.removeChild(existingPopup);
}
window.addEventListener("message", (m) => {
  if (m.data === "close_iframe")
    toggleFrame();
});
