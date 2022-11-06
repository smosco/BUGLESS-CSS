const sideMenu=document.querySelector("#sideMenu");
const main=document.querySelector("#main");
const body=document.body;
const arrow=document.querySelector(".arrow");
const close=document.querySelector(".close");


function openMenu(evnet){

    sideMenu.style.marginRight='0';
    main.style.marginRight="25%";
    arrow.style.marginRight="25%";
    body.style.backgroundColor="rgba(0,0,0,0.3)";

}

function closeMenu(){
    sideMenu.style.marginRight='-25%';
    main.style.marginRight="0";
    arrow.style.marginRight="0";
    body.style.backgroundColor="#ffff";
    
}

arrow.addEventListener("click", openMenu);

close.addEventListener("click", closeMenu)

