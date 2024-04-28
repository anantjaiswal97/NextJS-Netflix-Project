// this animation will give side scrolling effect and font weight also reduces while scrolling

gsap.to("#page-1 h1",{
    transform: "translateX(-100%)",
    duration: 2,
    fontWeight:200,

    scrollTrigger: {    
        // note trigger is page-1 outer box of h1. On the basis of trigger, we get start and end markers in scrolling
        trigger: "#page-1",
        scroller: "body",
        // markers:true,
        start: "top 0%",
        scrub:2,
       
        // pinning true holds the trigger(i.e #page-1 here) in place till scrolling range or animation duration
        pin:true

    }
})