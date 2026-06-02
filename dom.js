let newheading = document.getElementById("heading");
newheading.textContent="DOM Manipulation in javascript";
newheading.style.color="blue";
newheading.style.fontSize="30px";

let paragraph =document.getElementsByClassName("paragraph");
paragraph[0].innerHTML="<strong>This paragraph has been updated using javascript";
paragraph[0].style.color="green";
paragraph[0].style.fontSize="20px";

let newDiv=document.createElement("div");
newDiv.textContent="This is a new div element created using javascript";
document.body.appendChild(newDiv);


