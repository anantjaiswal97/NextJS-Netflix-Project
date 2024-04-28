const accordians= document.querySelectorAll(".accordian");
// console.log(accordians);

// accordians.forEach((accordian,i)=>{
//     console.log("this is accordina ",i);
// })

accordians.forEach((accordian,i)=>{
    console.log("accordina number ::",i);
    const icon= document.querySelector(".icon");
    const answer=document.querySelector(".answer");

    

    accordian.addEventListener("click",()=>{
        console.log("clicking");
        if(icon.classList.contains("active")){
            icon.classList.remove("active");
            answer.style.maxHeight=null;
        }
        else{
    
            icon.classList.add("active");
            answer.style.maxHeight=answer.scrollHeight+"px";
        }
    })
})