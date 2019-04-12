

function program() {

  $( function drag() {
    $( ".window" ).draggable({cursor: "move", handle : ".title", iframeFix: true}).resizable();
  } );

let program = document.createElement("DIV");

program.innerHTML = ' <div class="window" id="connectfour">\
            <div class="title"><div class="windowbar"><span>Hallo<span></div>\
                <div class="chrome-close">\
                    <a href="#"><i class="fas fa-minus"></i></a>\
                    <a href="#"><i class="far fa-window-restore"></i></a>\
                    <a href="#"><i class="fas fa-times"></i></a>\
                </div>\
            </div>\
            <div class="panel-right"><hr />\<iframe src="programs/firefox/index.html" frameborder="0" width="100%" height="100%"></iframe>\
        </div> ';
desktop = document.getElementById("desktop");
desktop.append(program);

$(".tasks").append("<div id='task'><p class='task_text'><span>Game</span></p></div>");
}
var z = 0;

function explorer(){
  $( function drag() {
    $( ".window" ).draggable({cursor: "move", handle : ".title", iframeFix: true}).resizable();
  } );

let explorer = document.createElement("DIV");
explorer.innerHTML = '<div class="window" id="explorer">\
<div class="title"><div class="windowbar"><span>File Explorer</span></div> \
<div class="chrome-close">\
    <a href="#"><i class="fas fa-minus"></i></a>\
    <a href="#"><i class="far fa-window-restore"></i></a>\
    <a id="close" ><i class="fas fa-times"></i></a>\
</div>\
</div> \
<div class="panel-left blurred-bg"> \
<p class="text1">LIBRARY</p>\
<ul> \
       <li><a href="#"><i class="fas fa-book-open"></i> All</a></li> \
       <li><a href="#"><i class="fas fa-fire"></i></i> Popular</a></li> \
       <li><a href="#"><i class="fas fa-clock"></i> Recent</a></li>\
       </ul>\
         <ul>\
           <li><a href="#"><i class="fa fa-desktop"></i> Desktop</a></li>\
           <li><a href="#"><i class="fa fa-download"></i> Downloads</a>\
           <ul>Test</ul></li>\
           \
         </ul>\
       </li>\
     </ul></div> \
       \
<div class ="panel-right"> <hr />\
     <iframe src="programs/projects/index.html" frameborder="0" width="100%" height="100%"></iframe>\
</div> '

$("#desktop").append(explorer)
$(".tasks").append("<div id='task'><p class='task_text'><span>Explorer</span></p></div>");
$( "#connectfour" ).remove();

$("#close").click(function() {
  $("#explorer").remove();
  $("#task").remove();
});

//desktop = document.getElementById("desktop");
//desktop.append(explorer);
};

function word(){
  $( function drag() {word
    $( ".window" ).draggable({cursor: "move", handle : ".title-word", iframeFix: true}).resizable();
  } );

let word = document.createElement("DIV");
word.innerHTML = '<div class="window" id="explorer">\
<div class="title-word"><div class="title-left"></div>\
<div class=title-middle>Legal.docs - Word</div> \
<div class="chrome-close title-right" id="closew">\
    <a href="#"><i class="fas fa-minus"></i></a>\
    <a href="#"><i class="far fa-window-restore"></i></a>\
    <a id="close" ><i class="fas fa-times"></i></a>\
</div>\
</div> \
<div class ="panel-right">\
     <iframe src="programs/projects/index.html" frameborder="0" width="100%" height="100%"></iframe>\
</div> '

$("#desktop").append(word)
$(".tasks").append("<div id='task'><p class='task_text'><span>Word</span></p></div>");
$( "#connectfour" ).remove();

$("#close").click(function() {
  $("#word").remove();
  $("#task").remove();
});

//desktop = document.getElementById("desktop");
//desktop.append(explorer);
};
