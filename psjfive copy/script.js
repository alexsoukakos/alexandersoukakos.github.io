const imageArray = [
  src="assets/Artboard 1.png",
  src="assets/Artboard 1b.png",
  src="assets/Artboard 13.png",
  src="assets/Artboard 14.png",
  src="assets/Artboard 15.png",
];

let wrapper = document.querySelector(".wrapper");
let myCursor = document.querySelector(".customCursor");
let clearDrawing = document.querySelector(".clearDrawing");


window.addEventListener("mousemove", function(event){
  console.log(event);
  console.log(myCursor);
  let newImg = document.createElement("img");
  newImg.classList.add("flower");
  var random = Math.floor(Math.random() * imageArray.length);
  newImg.src = imageArray[random];
  newImg.style.top = event.pageY - 60 + "px";
  newImg.style.left = event.pageX - 60 + "px";
  var randomWidth = Math.floor(Math.random() * 10) + "vw";
  newImg.style.width = randomWidth;
  wrapper.appendChild(newImg);

});

// function clear(){
//   let clear = document.getElementsByClassName("wrapper");
  
// }
