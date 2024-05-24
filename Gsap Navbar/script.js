var tl = gsap.timeline()
var menu = document.querySelector(".container i")
var close = document.querySelector(".nav i")

tl.to(".nav",{
    right:0,
    duration:.4
})
tl.from(".nav h1",{
    opacity:0,
    x:100,
    duration:.6,
    stagger:.15,
})
tl.from(".nav i",{
    opacity:0,
    
})
tl.pause()
menu.addEventListener("click",function(){
    tl.play()
    // document.querySelector(".nav").style.right = "0"
})
close.addEventListener("click",function(){
    tl.reverse()

})