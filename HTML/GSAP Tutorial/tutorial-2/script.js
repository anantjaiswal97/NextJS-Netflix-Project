// this tutorial is an example of textillate library of js

// gsap.from(".box-2",{
//     onStart: function () {
//         $(".box-2").textillate({
//             in: {
//                 effect: 'fadeInRight',
//                 callback: function() {
//                     $(".box-2").textillate('out');
//                 }
//             },
//             out: {
//                 effect: "fadeOutRight"
//             }

//         })
//     }
// })



var tl=gsap.timeline();


tl.
from(".box-1",{
    opacity: 0,
    duration:0.8,
    // onStart executes the function on the start of animation
    onStart: function () {
        $(".box-1").textillate({
            in: {
                effect: 'fadeInRight',
                callback: function() {
                    $(".box-1").textillate('out');
                }
            },
            out: {
                effect: "fadeOutRight"
            }

        })
    }
})
.to(".box-1",{
    borderRadius: "50%",
    width:200,
    height:200,
    backgroundColor:"blue",
    delay:2
})  
.from(".box-2",{
    delay:0.8,
    duration:0.8,
    opacity:0,
    onStart: function () {
        $(".box-2").textillate({
            in: {
                effect: 'fadeInRight',
                callback: function() {
                    $(".box-2").textillate('out');
                }
            },
            out: {
                effect: "fadeOutRight"
            }

        })
    }
})
.to(".box-2",{
    borderRadius: "50%",
    width:200,
    height:200,
    backgroundColor:"blue",
    delay:2
}) 
.from(".box-3",{
    delay:0.8,
    duration: 0.8,
    opacity:0,
    onStart: function () {
        $(".box-3").textillate({
            in: {
                effect: 'fadeInRight',
                callback: function() {
                    $(".box-3").textillate('out');
                }
            },
            out: {
                effect: "fadeOutRight"
            }

        })
    }
})
.to(".box-3",{
    borderRadius: "50%",
    width:200,
    height:200,
    backgroundColor:"blue",
    delay:2
}) 
// .to(".container",{
//     x:1200,
//     duration:1,
//     delay:0.5
// })



