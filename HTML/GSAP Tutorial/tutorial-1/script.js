// GSAP is a javascript library for building high quality animations


// gsap.from() tells from what state the element should come from
// gsap.from("#center h1",{
//     opacity:0,
//     duration:2
// })

// // gsap.to() tells what state element will go from current state
// gsap.to("#center h1",{
//     color:"red",
//     duration:2
// })


// gsap.timeline let us define series of to and from states for different elements. It will follow the sequence as
// defined
var t1=gsap.timeline();

t1.
    from("#center h1",{
        // animation-1 in timeline, where will appear from 0 opacity in 1.5 sec
        opacity:0,
        duration:1.5
    })
    // animation-2 will trigger after animation-1, where h1 will become red and scaled 1.5 times in 1 sec 
    .to("#center h1",{
        color:"red",
        duration:1,
        scale:1.5
    })
    .from(".para-test",{
        // element will come from postion -20 y axis, where current postion is origin
        y:-20,
        duration:1
    })
    .to(".test-img",{
        width:900
    })
    // we can pass array of elements animate multiple elements at same time
    .to(["#center h1"],
    {
        x:480,

        // left:0,
        // here we have given delay of -2 sec...so this animation has shift backward in timeline
        delay: -0.5
    })
    .to(".circle",{
        y:180,
        duration:0.3,
        // repeat = -1 will repeat this animation infinite times, otherwise animation will repeat defined number of time
        repeat: -1,
        // this gives yoyo smooth effect while repeating animations
        yoyo:"true"
    })
