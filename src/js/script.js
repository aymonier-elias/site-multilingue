const menuBtn = document.querySelector('.menu__btn');
const headerMenu = document.querySelector('.menu');

menuBtn.addEventListener("click", () =>{
    toggle(menuBtn, headerMenu)
});

function toggle (btn, menu)  {
    console.log("Je fonctionne !")

    const isOpen = btn.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    
    menu.ariaHidden = isOpen;
    btn.ariaExpanded = isClosed;
}