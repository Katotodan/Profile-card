const currentTime = document.querySelector("span")
// const showMoreBtn = document.querySelector("button")
// const details = document.querySelector(".details")
// let showDetail = false



currentTime.innerHTML = Date.now()
setInterval(() =>{
    currentTime.innerHTML = Date.now()
}, 1000)

// showMoreBtn.addEventListener("click", ()=>{
//     if(showDetail){
//         details.style.visibility = "hidden"
//         details.style.height = "1px"
//         details.style.overflow = "hidden"
//         showMoreBtn.innerHTML = "More"
//     }else{
//         details.style.visibility = "visible"
//         details.style.height = "auto"
//         details.style.overflow = "visible"
//         showMoreBtn.innerHTML = "Hide"
//     }
//     showDetail = !showDetail
// })