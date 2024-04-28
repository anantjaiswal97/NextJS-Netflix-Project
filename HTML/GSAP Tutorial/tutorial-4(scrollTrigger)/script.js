// gsap scroll trigger animates element on the basis of scrolling


gsap.from("#page1 .box",{
    scale:0,
    // opacity:0,
    duration:1.5,
    rotate:360
})  


gsap.from("#page2 .box",{
    scale:0,
    // opacity:0,
    duration:1.5,
    rotate:360,
    scrollTrigger:{
        trigger: "#page2 .box",
        scroller:"body",

        // margers give me idea of scroll-start and scroll-end. Scrolling is considered start marker when start meets with scroll-start marker
        // scrolling ends when end meets with scroll-end
        markers:true,

        // by default scroll-start marker is 100% from top, we shift it 60% from top. This reduces the range of srcolling
        start:"top 60%",

        // shifting scroll-end position 30% from top
        end: "top 30%",

        // here the problem is, when scroll-start meets start marker, animation start and finished. We want animation duration for full
        // scroll range. Scrub will do that. It will make animation duration for scroll range and when we scroll back, it will reverse the
        // animation
        scrub: true,

        // scrub value can be boolean or 1-5 . As scrub value increases, smoothness increases
        scrub:3


    }
})  

gsap.from("#page3 .box",{
    scale:0,
    // opacity:0,
    duration:1.5,
    rotate:360
})  