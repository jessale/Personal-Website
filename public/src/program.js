function closeWindow(elem, task) {
    $(elem).parent().parent().parent().remove();
    $(task).remove();
};

function minimizeWindow(elem) {
    $(elem).parent().parent().parent().hide();
}

function toFront(elem){
    let i = findHighestZIndex('window');
    console.log(i);
    $(elem).css("z-index", i+2);
    $(elem).show();
}

function checkifexists(elem, runProgram){
    if($(elem).length){
        toFront(elem);
    }else{
        let i;
        if($(".window-term".length)){
            i = 1;
        }
        else{
        i = findHighestZIndex('window');
        }
        runProgram(i++);
    }
}

(function createStartupTerm (){
    let startup = true;
    term(1, startup);

}());

function findHighestZIndex(elem)
{
    var elems = document.getElementsByClassName(elem);
    var highest = 0;
    for (var i = 0; i < elems.length; i++)
    {
        var zindex=document.defaultView.getComputedStyle(elems[i],null).getPropertyValue("z-index");
        if ((zindex > highest) && (zindex != 'auto'))
        {
            highest = zindex;
        }
    }
    return highest;
}

function cv(zindex){
  $( function drag() {
      $( ".window" ).draggable({cursor: "move", handle : ".title", iframeFix: true, stack: '.window', distance: 0 }).resizable();
  } );

let explorer = document.createElement("DIV");
    explorer.innerHTML = `<div class="window window-cv" id="cv" style="z-index : ${zindex}">\
<div class="title"><div class="title-left-chrome"></div>\
<div class=title-middle>Resume.pdf - Adobe Acrobat</div> \
<div class="chrome-close title-right" id="closew">\
    <a onclick='minimizeWindow(this)'><i class="fas fa-minus"></i></a>\
    <a href="#"><i class="far fa-window-restore"></i></a>\
    <a id="close" onclick="closeWindow(this, '.cv_task')" ><i class="fas fa-times"></i></a>\
</div>\
</div> \
       \
<div class ="panel-right"> <hr />\
     <iframe src="../cv/index.html" frameborder="0" width="100%" height="100%"></iframe>\
</div> `;

    $("#desktop").append(explorer);
    $(".tasks").append(`<div id='task' onclick='toFront(".window-cv")' class='cv_task'><p class='task_text'><span>Resume.pdf</span></p></div>`);

};


function firefox(zindex){
  $( function drag() {
      $( ".window" ).draggable({cursor: "move", handle : ".title", iframeFix: true, stack: '.window', distance: 0}).resizable();
  } );

let explorer = document.createElement("DIV");
explorer.innerHTML = `<div class="window window-firefox" id="firefoxw" style="z-index: ${zindex}">\
<div class="title"><div class="title-left-chrome"></div>\
<div class=title-middle>Legal.docs - Word</div> \
<div class="chrome-close title-right" id="closew">\
    <a onclick='minimizeWindow(this)'><i class="fas fa-minus"></i></a>\
    <a href="#"><i class="far fa-window-restore"></i></a>\
    <a id="close" onclick="closeWindow(this, '.firefox_task')" ><i class="fas fa-times"></i></a>\
</div>\
</div> \
       \
<div class ="panel-right"> <hr />\
     <iframe src="programs/firefox/index.html" frameborder="0" width="100%" height="100%"></iframe>\
</div> `;

    $("#desktop").append(explorer);
$(".tasks").append(`<div id='task' onclick='toFront(".window-firefox")' class="firefox_task"><p class='task_text'><span>Firefox</span></p></div>`);

};


function explorer(zindex){
  $( function drag() {
      $( ".window" ).draggable({cursor: "move", handle : ".title", iframeFix: true, stack: '.window', distance: 0}).resizable();
  } );

let explorer = document.createElement("DIV");
explorer.innerHTML = `<div class="window window-explorer" id="explorer" style="z-index: ${zindex}">\
<div class="title"><div class="title-left"></div>\
<div class=title-middle>Legal.docs - Word</div> \
<div class="chrome-close title-right" id="closew">\
    <a onclick='minimizeWindow(this)'><i class="fas fa-minus"></i></a>\
    <a href="#"><i class="far fa-window-restore"></i></a>\
    <a id="close" onclick="closeWindow(this, '.explorer_task')"><i class="fas fa-times"></i></a>\
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
           <li><a href="#"><i class="fas fa-code"></i> Code</a></li>\
<ul style="padding-left: 5px">  \
<li><a href="#"><i class="fab fa-js"></i> Javascript</a></li>  \
<li><a href="#"><i class="fab fa-python"></i> Python</a></li>  \
</ul> \
           \
         </ul>\
       </li>\
     </ul></div> \
       \
<div class ="panel-right"> <hr />\
     <iframe src="programs/projects/" frameborder="0" width="100%" height="100%"></iframe>\
</div> `

    $("#desktop").append(explorer);
$(".tasks").append(`<div id='task' onclick='toFront(".window-explorer")' class='explorer_task'><p class='task_text'><span>Explorer</span></p></div>`);
};

function word(){
  $( function drag() {word
                      $( ".window" ).draggable({cursor: "move", handle : ".title-word", iframeFix: true, stack: '.window', distance: 0}).resizable();
  } );

let word = document.createElement("DIV");
word.innerHTML = '<div class="window" id="word">\
<div class="title-word"><div class="title-left"></div>\
<div class=title-middle>Legal.docs - Word</div> \
<div class="chrome-close title-right" id="closew">\
    <a href="#"><i class="fas fa-minus"></i></a>\
    <a href="#"><i class="far fa-window-restore"></i></a>\
    <a id="close" onclick="closeWindow(this)" ><i class="fas fa-times"></i></a>\
</div>\
</div> \
<div class="menu-bar"><div class="menu-bar">\
<div><span>File</span></div>\
<div><span>Home</span></div>\
<div><span>Insert</span></div>\
<div><span>Page Layout</span></div>\
<div><span>Formulas</span></div>\
<div><span>Data</span></div>\
<div><span>Review</span></div>\
<div><span>View</span></div>\
<div><span>Help</span></div>\
</div></div> \
<div class="icon-bar">\
</div> \
<div class ="panel-right">\
     <iframe src="programs/legal/index.html" frameborder="0" width="100%" height="100%"></iframe>\
</div> ';

    $("#desktop").append(word);
$(".tasks").append("<div id='task'><p class='task_text'><span>Word</span></p></div>");


};
