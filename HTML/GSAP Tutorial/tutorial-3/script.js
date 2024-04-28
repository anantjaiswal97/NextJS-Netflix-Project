

var tl=gsap.timeline();


tl.from("#nav img,#nav-part2 h3,#nav-part3 h4, #nav-part3 button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    // gives animation effect one by one after 0.3s interval amoung each element
    stagger:0.2
})

tl.from("#main h1",{
    y:100,
    opacity:0,
    stagger:0.3
})

tl.from("#main>img",{
    scale:0,
    opacity:0,
    duration:1
})

tl.from("#main h5",{
    scale:0,
    opacity:0

})

tl.to("#main h5",{
    y:30,
    repeat:-1,
    duration:0.5,
    yoyo:true
})