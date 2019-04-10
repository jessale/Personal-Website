let documents = document.createElement("DIV");
documents.setAttribute("class", "icon");
documents.setAttribute("draggable", "true");
documents.innerHTML = '<p class="text"><span>MyProjects</span></p>';
documents.style.background ="url(img/folder.png) center top no-repeat";
desktopicons = document.getElementById("desktop-icons");
desktopicons.append(documents);

let mail = document.createElement("DIV");
mail.setAttribute("class", "icon");
mail.setAttribute("draggable", "true", "onclick", "calender()");
mail.innerHTML = '<p class="text"><span>Email me</span></p>';
mail.style.background ="url(img/mail.png) center top no-repeat";
desktopicons = document.getElementById("desktop-icons");
desktopicons.append(mail);

let legal = document.createElement("DIV");
legal.setAttribute("class", "icon");
legal.setAttribute("draggable", "true");
legal.innerHTML = '<p class="text"><span>Legal.docx</span></p>';
legal.style.background ="url(img/word.png) center top no-repeat";
desktopicons = document.getElementById("desktop-icons");
desktopicons.append(legal);
