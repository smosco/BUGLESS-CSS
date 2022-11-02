const box=document.querySelector(".box");
console.log(box);
function handleClick(event){
    console.log(event);
    box.classList.toggle("clicked");
}
box.addEventListener("click", handleClick);