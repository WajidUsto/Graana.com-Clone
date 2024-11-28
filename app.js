
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
// Sign In
let signInDiv = document.querySelector("#sign-in-div")
let signInBtn = document.querySelector("#nav-end-a")
let signInCross = document.querySelector("#sign-in-cross")
let SignInLink = document.querySelector("#register-link h4 a")

    signInBtn.addEventListener("click",()=>{
        signInDiv.style.display = "block"
    })
    signInCross.addEventListener("click",()=>{
        signInDiv.style.display = "none"
    })
    SignInLink.addEventListener("click",()=>{
        signInDiv.style.display = "none"
    })
    SignInLink.addEventListener("click",()=>{
        SignupDiv.style.display = "block"
    })

// Sign In

// Sign Up
let SignupLink = document.querySelector("#sign-up-register-link h4 a")
let SignupDiv = document.querySelector("#sign-up-div")
let crossSignUp = document.querySelector("#sign-up-cross")

    SignupLink.addEventListener("click",()=>{
        SignupDiv.style.display = "block"
    })
    crossSignUp.addEventListener("click",()=>{
        SignupDiv.style.display = "none"
    })
    SignupLink.addEventListener("click",()=>{
        SignupDiv.style.display = "none"
    })
    SignupLink.addEventListener("click",()=>{
        SignupDiv.style.display = "block"
    })

// Sign Up
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


// Nav Bar Ended
// Nav Bar Ended


// Banner Section
// Banner Section

// Banner Btns
const bannBuyBtn = document.querySelector("#banner-buy-btn")
const bannRentBtn = document.querySelector("#banner-rent-btn")

bannRentBtn.addEventListener("click" ,()=>{
    bannRentBtn.style.backgroundColor = "#FFFFFF"
    bannBuyBtn.style.backgroundColor = "#C5C9C4"
})
bannBuyBtn.addEventListener("click" ,()=>{
    bannBuyBtn.style.backgroundColor = "#FFFFFF"
    bannRentBtn.style.backgroundColor = "#C5C9C4"
})
// Banner Btns