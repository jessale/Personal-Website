function Deskicon(id, name, iconurl){
  this.id = id;
  this.name = name;
  this.iconurl = iconurl;
  name = document.createElement('DIV');
  name.setAttribute("class", "icons");
  name.setAttribute("draggable", "true");
  name.setAttribute("id", `${this.id}`);
  name.innerHTML = `<p class="text"><span>${this.name}</span></p>`;
  name.style.background =`url(${this.iconurl}) center top no-repeat`;
  desktopicons = document.getElementById("desktop-icons");
  desktopicons.append(name);
}

const documents = new Deskicon('documents', 'MyProjects','img/folder.png');
// const mail2 = new Deskicon('mail', 'Email', 'img/mail.png')
const fire = new Deskicon('firefox', 'API docs', 'img/firefox.png');
const test = new Deskicon('resume', 'Resume.pdf', 'img/pdf.png');
const legal = new Deskicon('legal', 'Legal.docx', 'img/word.png');
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



$('#quick-term').click(function(){
    let i = findHighestZIndex('window');
    term(i++);
});

$('#firefox').click(function() {

    let i = findHighestZIndex('window');
    firefox(i++);
});

$('#quick-firefox').click(function(){
    let i = findHighestZIndex('window');
    firefox(i++);
});

$("#resume").click(function() {
    checkifexists('#cv', cv);
});

$('#cv').click(function(){
    toFront('#cv'); 
});

$("#legal").click(function() {
    let i = findHighestZIndex('window');
  word(i++);

});

$("#documents").click(function() {
  let i = findHighestZIndex('window');
  explorer(i++);

});

$('.window').click(function (e) {
    var inst = $(this).data('draggable');
    inst._mouseStart(e);
    inst._trigger('click', e);
    inst._clear();
});
