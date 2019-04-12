let documents = document.createElement("DIV");
documents.setAttribute("class", "icons");
documents.setAttribute("draggable", "true");
documents.setAttribute("id", "documents");
documents.innerHTML = '<p class="text"><span>MyProjects</span></p>';
documents.style.background ="url(img/folder.png) center top no-repeat";
desktopicons = document.getElementById("desktop-icons");
desktopicons.append(documents);

let mail = document.createElement("DIV");
mail.setAttribute("class", "icons");
mail.setAttribute("draggable", "true", "onclick", "calender()");
mail.innerHTML = '<p class="text"><span>Email me</span></p>';
mail.style.background ="url(img/mail.png) center top no-repeat";
desktopicons = document.getElementById("desktop-icons");
desktopicons.append(mail);

let legal = document.createElement("DIV");
legal.setAttribute("class", "icons");
legal.setAttribute("draggable", "true");
legal.setAttribute("id", "legal")
legal.innerHTML = '<p class="text"><span>Legal.docx</span></p>';
legal.style.background ="url(img/word.png) center top no-repeat";
desktopicons = document.getElementById("desktop-icons");
desktopicons.append(legal);

$("#legal").click(function() {
  word();

});

$("#documents").click(function() {
  explorer();

});
