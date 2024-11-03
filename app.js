
// Nav Bar
// Nav Bar

let resMenu = document.querySelector("#nav-2-menu-bar")
let navSvg = document.querySelector("#nav-items svg")
let cross = document.querySelector(".ri-close-line")
// nav Buy
let navBuyBtn = document.querySelector("#nav-buy-btn")
let navBuyDiv = document.querySelector("#nav-buy")
// nav Buy
// nav Sell
let navSellBtn = document.querySelector("#nav-sell-btn")
let navSellDiv = document.querySelector("#nav-sell")
// nav Sell
// nav rent
let navRentBtn = document.querySelector("#nav-rent-btn")
let navRentDiv = document.querySelector("#nav-rent")
// nav rent

navSvg.addEventListener("click",()=>{
        resMenu.style.left = "0%"
})
cross.addEventListener("click",()=>{
    resMenu.style.left = "-100%"
})
// Buy Btn
// Buy Btn
navBuyBtn.addEventListener("mouseover",()=>{
    navBuyDiv.style.display = "block"
})
navBuyDiv.addEventListener("mouseleave",()=>{
    navBuyDiv.style.display = "none"
})
// Buy Btn
// Buy Btn

// Buy Btn
// Buy Btn
navSellBtn.addEventListener("mouseover",()=>{
    navSellDiv.style.display = "block"
})
navSellDiv.addEventListener("mouseleave",()=>{
    navSellDiv.style.display = "none"
})
// Buy Btn
// Buy Btn

// rent Btn
// rent Btn
navRentBtn.addEventListener("mouseover",()=>{
    navRentDiv.style.display = "block"
})
navRentDiv.addEventListener("mouseleave",()=>{
    navRentDiv.style.display = "none"
})
// rent Btn
// rent Btn


// Nav Bar
// Nav Bar