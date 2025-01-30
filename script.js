const currentTime = document.querySelector("span")
const showMoreBtn = document.querySelector("button")
const details = document.querySelector(".details")
let showDetail = false


currentTime.innerHTML = new Date().toISOString()
setInterval(() =>{
    currentTime.innerHTML = new Date().toISOString()
}, 1000)

showMoreBtn.addEventListener("click", ()=>{
    if(showDetail){
        details.style.display = "none"
        showMoreBtn.innerHTML = "Show more"
    }else{
        details.style.display = "block"
        showMoreBtn.innerHTML = "Show less"
    }
    showDetail = !showDetail
})