

document.addEventListener("keydown", (e: KeyboardEvent)=> {
  if (e.altKey && e.code === "Comma")
  togglePopup();
});

function createPopup(){
  const el = document.createElement("iframe");
  el.id = "urbit-visor-notes-everywhere-popup"
  el.src = "chrome-extension://bjjppeimfgcdpcfffhkkfaigcjkihpdb/popup.html";
  el.style.cssText = "height:100vh;width:100vw;position:fixed;top:0;left:0;"
  return el
}
function togglePopup(){
  const popup = createPopup();
  const existingPopup = document.getElementById("urbit-visor-notes-everywhere-popup");
  if (!existingPopup) document.body.appendChild(popup);
  else document.body.removeChild(existingPopup)
}

window.addEventListener("message", (m)=>{
  if (m.data === "close_iframe")
  togglePopup()
})