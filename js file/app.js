let from1=document.querySelector(".from1")
let from2=document.querySelector(".from2")
let from3=document.querySelector(".from3")
let next1=document.querySelector(".next-1")
let next2=document.querySelector(".next-2")
let prev2=document.querySelector(".prev-2")

let prev3=document.querySelector(".prev-3")

next1.addEventListener("click",()=>{
    from2.classList.add("show")
    from1.classList.add("hidden")

})
prev2.addEventListener("click",()=>{
    
   
    from2.classList.remove("show")
   
    from1.classList.remove("hidden")

    
})

next2.addEventListener("click",()=>{
    from2.classList.add("hidden")
    from3.classList.add("show")
    from3.classList.remove("hidden")

})
prev3.addEventListener("click",()=>{

    from3.classList.remove("show")

    from3.classList.add("hidden")
    from2.classList.add("show")
    from2.classList.remove("hidden")


})
