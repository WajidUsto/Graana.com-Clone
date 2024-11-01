let resMenu = document.querySelector("#nav-2-menu-bar")
let navSvg = document.querySelector("#nav-items svg")
let cross = document.querySelector(".ri-close-line")
let body = document.querySelector("body")

navSvg.addEventListener("click",()=>{
        resMenu.style.left = "0%"
})
cross.addEventListener("click",()=>{
    resMenu.style.left = "100%"
    console.log("hello");
    
})


