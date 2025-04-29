let newbtn = document.createElement("button");
newbtn.innerText = "click me"
console.log(newbtn);

newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";

document.querySelector("body").prepend(newbtn);


