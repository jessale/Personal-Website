$( function() {
  $( ".window" ).draggable({cursor: "move", handle : ".title", iframeFix: true}).resizable();
} );

let program = document.createElement("DIV");
//program.setAttribute("class", "ui-widget-content");
//program.setAttribute("id", "draggable");
/*program.innerHTML = '<div class="widget" id="connectfour" class="ui-widget-content"><div class="title">Connect Four \
    <div class="wbutton">\
      <a href="#" id="h"><i class="fa fa-minus"></i></a>\
      <a href=""><i class="fa fa-square-o"></i></a>\
      <a href="#" class="close"><i class="fa fa-times"></i></a>\
    </div>\
  </div>\
    <div class="panel-right"><iframe id="window" src="programs/connectfour/index.html" width="100%" height="100%" no-border</iframe>  <div id="result"></div>\
    </div>\
</div>'; */
program.innerHTML = ' <div class="window" id="connectfour">\
            <div class="title"><div class="windowbar"><span>Hallo<span></div>\
                <div class="chrome-close">\
                    <a href="#"><i class="fas fa-minus"></i></a>\
                    <a href="#"><i class="far fa-window-restore"></i></a>\
                    <a href="#"><i class="fas fa-times"></i></a>\
                </div>\
            </div>\
            <iframe src="programs/connectfour/index.html" frameborder="0" width="100%" height="100%"></iframe>\
        </div> ';
desktop = document.getElementById("desktop");
desktop.append(program);

let explorer = document.createElement("DIV");
explorer.innerHTML = '<div class="window" id="explorer">\
<div class="title"><div class="windowbar"><span>File Explorer</span></div> \
<div class="chrome-close">\
    <a href="#"><i class="fas fa-minus"></i></a>\
    <a href="#"><i class="far fa-window-restore"></i></a>\
    <a href="#"><i class="fas fa-times"></i></a>\
</div>\
</div> \
<div class="blur"></div> \
<div class="panel-left"> \
<div class="title-panel-left"> \
    My Projects \
</div> \
<ul> \
       <li><a href="#"><i class="fa fa-star"></i> Favorites</a> \
         <ul>\
           <li><a href="#"><i class="fa fa-desktop"></i> Desktop</a></li>\
           <li><a href="#"><i class="fa fa-download"></i> Downloads</a></li>\
           <li><a href="#"><i class="fa fa-refresh"></i> Recent Places</a></li>\
         </ul>\
       </li>\
     </ul>  </div> \
       \
<div class ="panel-right"> <hr />\
     <iframe src="programs/connectfour/index.html" frameborder="0" width="100%" height="100%"></iframe>\
</div> '
desktop.append(explorer);
