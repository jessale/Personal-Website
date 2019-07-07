function Deskicon(id, name, iconurl, loc){
  this.id = id;
  this.name = name;
  this.iconurl = iconurl;
  this.loc = loc;
  name = document.createElement('DIV');
  name.setAttribute("class", "icons");
  name.setAttribute("draggable", "true");
  name.setAttribute("id", `${this.id}`);
  name.innerHTML = `<p class="text"><span>${this.name}</span></p>`;
  name.style.background =`url(${this.iconurl}) center top no-repeat`;
    if (loc == 1){
  desktopicons = document.getElementById("desktop-icons");
  desktopicons.append(name);
    }else{
        desktopicons = document.getElementById('desktop-icons-bottom');
        desktopicons.append(name);
    }
}

const documents = new Deskicon('documents', 'MyProjects','img/folder.png', '1');
const fire = new Deskicon('firefox', 'API docs', 'img/firefox.png', '1');
const test = new Deskicon('resume', 'Resume.pdf', 'img/pdf.png', '1');
const legal = new Deskicon('legal', 'Legal.docx', 'img/word.png', '1');
const github = new Deskicon('github', 'GitHub', 'img/github.png', '0');
const mail2 = new Deskicon('mail', 'Email', 'img/mail.png', '0')
//const cv = new Deskicon('cv', 'CV.pdf' 'img/pdf.png')

/*
let documents = document.createElement("DIV");
documents.setAttribute("class", "icons");
documents.setAttribute("draggable", "true");
documents.setAttribute("id", "documents");
documents.innerHTML = '<p class="text"><span>MyProjects</span></p>';
documents.style.background ="url(img/folder.png) center top no-repeat";
desktopicons = document.getElementById("desktop-icons");
desktopicons.append(documents); */

$('#github').click(function(){
    window.open("https://github.com/floshodan", "_blank");
});

$('#mail').click(function(){
    window.location.href="mailto:code@floshodan.io";
});

$('#quick-term').click(function(){
    let i = findHighestZIndex('window');
    term(i++);
});

$('#firefox').click(function() {
    checkifexists('#firefoxw', firefox);
});

$('#quick-firefox').click(function(){
    checkifexists('#firefoxw', firefox);
});

$("#resume").click(function() {
    checkifexists('#cv', cv);
});


$("#legal").click(function() {
    let i = findHighestZIndex('window');
  word(i++);

});

$("#documents").click(function() {
    checkifexists('#explorer', explorer());

});

$('.window').click(function (e) {
    var inst = $(this).data('draggable');
    inst._mouseStart(e);
    inst._trigger('click', e);
    inst._clear();
});
