function Projekt(id, url, name, description) {
    this.id =id;
    this.url =url;
    this.name = name;
    this.description = description;
    let projectbox = document.createElement('DIV');
    projectbox.setAttribute("class", "projectbox");
    projectbox.setAttribute("id", `${this.id}`);
    projectbox.innerHTML =
   `<div class="preview-image" style="">
        <a href="#"><img src="${this.url}" alt="${this.name}" style="width:100%"></a>
    </div>
    <div class="descriptbox">
        <h3>${this.name}</h3>
        <p class="description">${this.description}</p>
    </div>`
    projectlist = document.getElementById("projectrow").append(projectbox);

};


