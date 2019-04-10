$( function() {
  $( "#draggable" ).draggable({cursor: "move", handle : ".title", iframeFix: true}).resizable();
} );

let program = document.createElement("DIV");
//program.setAttribute("class", "ui-widget-content");
//program.setAttribute("id", "draggable");
program.innerHTML = '<div class="widget" id="draggable" class="ui-widget-content"><div class="title">Connect Four \
    <div class="wbutton">\
      <a href="#" id="h"><i class="fa fa-minus"></i></a>\
      <a href=""><i class="fa fa-square-o"></i></a>\
      <a href="#" class="close"><i class="fa fa-times"></i></a>\
    </div>\
  </div>\
    <div class="panel-right"><iframe id="window" src="programs/connectfour/index.html" width="100%" height="100%" no-border</iframe>  <div id="result"></div>\
    </div>\
</div>';
desktop = document.getElementById("desktop");
desktop.append(program);
