let projects = document.querySelector(".projects")
let plus = document.querySelector(".plus")
let detail = document.querySelector(".project-detail-div")

projects.addEventListener("click" , function(){
    plus.style.transform = "rotate(45deg)"
    

    detail.classList.remove("hidden")

})

plus.addEventListener("click" , function(e){
    e.stopPropagation()
    plus.style.transform = "rotate(0deg)"
    detail.classList.add("hidden")
})