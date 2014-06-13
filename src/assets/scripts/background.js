
function get_todo_lists() {
  var lists=Storage.get("lists",null);
  if(lists == null) {
    lists=[];
    Storage.set("lists",lists.save());
  }
  return lists;
}

function get_todo_list(id) {
  if(!id) id=null; // use current list
  var lists=get_todo_lists();
  var current_list=Storage.get("current-lists",0);
  if(lists.length == 0) return null;
  if(!id) return lists[current_list];
  for(var i=0;i<lists.length;i++) {
    if(lists[i].id == id) return lists[i];
  }
  return null;
}

function get_todo_percent(list) {
  if(!list) list=get_todo_list();
  if(!list) return(-1)
}

function update_browser_action_icon() {
  var percentage=-1;

  var s=19;
  var s2=19/2;
  
  for(var scale=1;scale<=2;scale++) {
    if(scale == 2) {
      var canvas=document.getElementById("canvas-38");
      var cc=canvas.getContext("2d");
    } else {
      var canvas=document.getElementById("canvas-19");
      var cc=canvas.getContext("2d");
    }
    cc.clearRect(0,0,s,s);

    cc.beginPath();
    cc.arc(s2,s2+1,7.5*scale,0,Math.PI*2);
    cc.fillStyle="rgba(255,255,255,0.5)";
    cc.fill()

    cc.beginPath();
    cc.arc(s2,s2,7.5*scale,0,Math.PI*2);
    cc.fillStyle="#808080";
    cc.fill()

    cc.beginPath();
    cc.arc(s2,s2,6.5*scale,0,Math.PI*2);
    cc.fillStyle="#e0e0e0";
    cc.fill()

    if(percentage == -1) {
      cc.beginPath();
      cc.arc(s2,s2,4*scale,0,Math.PI*2);
      cc.fillStyle="#38f";
      cc.fill()
    } else {
      cc.beginPath();
      cc.moveTo(s2,s2);
      cc.arc(s2,s2,5.5*scale,-Math.PI/2,(Math.PI*2)*percentage-Math.PI/2);
      cc.fillStyle="#38f";
      cc.strokeStyle="#38f";
      cc.lineWidth=1*scale;
      cc.fill()
      cc.stroke();
    }
  }

  var canvas,cc;

  var imageData={};

  canvas=document.getElementById("canvas-19");
  cc=canvas.getContext("2d");
  imageData["19"]=cc.getImageData(0,0,19,19);

  canvas=document.getElementById("canvas-38");
  cc=canvas.getContext("2d");
  imageData["38"]=cc.getImageData(0,0,38,38);

  chrome.browserAction.setIcon({
    imageData:imageData
  });
}

function add_canvases() {
  var canvas=document.createElement("canvas");
  canvas.width=19;
  canvas.height=19;
  canvas.id="canvas-19";
  document.getElementsByTagName("body")[0].appendChild(canvas);

  var canvas=document.createElement("canvas");
  canvas.width=38;
  canvas.height=38;
  canvas.id="canvas-38";
  document.getElementsByTagName("body")[0].appendChild(canvas);
}

add_canvases();
update_browser_action_icon();
