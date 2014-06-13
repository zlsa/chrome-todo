
function get_todo_list(id) {
  if(!id) id=null; // use default list
}

function get_todo_percent(list) {
  if(!list) list=get_todo_list();
}

function update_browser_action_icon() {
  var canvas=document.getElementById("canvas-19");
  var cc=canvas.getContext("2d");

  var imageData=cc.getImageData(0,0,19,19);
  chrome.browserAction.setIcon({
    imageData:{
      "19":imageData
    }
  });
}

function add_canvases() {
  var canvas=document.createElement("canvas");
  canvas.width=19;
  canvas.height=19;
  canvas.id="canvas-19";
  document.getElementsByTagName("body")[0].appendChild(canvas);
}

add_canvases();
update_browser_action_icon();
