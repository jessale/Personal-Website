function Projekt(id, url, name, description, i) {
    this.id =id;
    this.url =url;
    this.name = name;
    this.description = description;
    this.i = i;
    let projectbox = document.createElement('DIV');
    projectbox.setAttribute("class", "projectbox");
    projectbox.setAttribute("data-categorie", `${this.id}`);
    projectbox.innerHTML =
   `<div class="preview-image" style="">
        <a href="project${this.i}"><img src="${this.url}" alt="${this.name}" style="width:100%">
    <div class="middle">
       <div class="text">
<i class="fas fa-eye"></i>
        </div>
      </div>
        </a>
    </div>
    <div class="descriptbox">
        <h3>${this.name}</h3>
        <p class="description">${this.description}</p>
    </div>`
    projectlist = document.getElementById("projectrow").append(projectbox);

};

// Make GET Request 
const userAction = (async () => {
    const response = await fetch('http://localhost:3000/api/projects');
    const myJson = await response.json(); 

    let length = myJson.length;
    console.log(length);
    console.log(myJson);
    myJson.forEach((project, i) => {
        new Projekt(project.categorie, project.previewimg, project.projectname, project.describtion, i+1);
    });
})();


filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
window.onload = function() {
var lis = document.getElementById("sort-ul").querySelectorAll("li");
    lis.forEach(li => {
        li.addEventListener('click', function(){
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    });
}

// for (var i = 0; i < lis.length; i++) {
//   lis[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
// }

array = [20, 10, 25];
array.forEach(function (i) {
    console.log(i); 
});

