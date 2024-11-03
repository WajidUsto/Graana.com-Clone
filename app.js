
// Nav Bar
// Nav Bar

let resMenu = document.querySelector("#nav-2-menu-bar")
let navSvg = document.querySelector("#nav-items svg")
let cross = document.querySelector(".ri-close-line")
let navBuyBtn = document.querySelector("#nav-buy-btn")
let navBuyDiv = document.querySelector("#nav-buy")

navSvg.addEventListener("click",()=>{
        resMenu.style.left = "0%"
})
cross.addEventListener("click",()=>{
    resMenu.style.left = "-100%"
})
navBuyBtn.addEventListener("mouseover",()=>{
    navBuyDiv.style.display = "block"
})
navBuyDiv.addEventListener("mouseleave",()=>{
    navBuyDiv.style.display = "none"

})


// Nav Bar
// Nav Bar