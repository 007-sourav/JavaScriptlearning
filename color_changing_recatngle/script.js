var rect = document.querySelector("#center");
rect.addEventListener("mousemove",function(details){
    // console.log("hey mouse move ho raha hai");
    // console.log(rect.getBoundingClientRect());
    var reactangleLocation=rect.getBoundingClientRect();
    // console.log(details.clientX);
    // console.log(details.clientX -reactangleLocation.left);
    var insiderectangle=details.clientX - reactangleLocation.left;
    // if(insiderectangle<reactangleLocation.width/2){
    //     console.log("left");
    // }else{
    //     console.log("right");
    // }

    if(insiderectangle <reactangleLocation.width/2){
        var redcolor =gsap.utils.mapRange(0,reactangleLocation.width/2,255,0,insiderectangle); 
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4,
        });
    }else{
        var bluecolor =gsap.utils.mapRange(reactangleLocation.width/2,reactangleLocation.width,0,255,insiderectangle); 
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:Power4,
        });
    }
    console.log(gsap.utils.mapRange(0,250,255,0,23));

    rect.addEventListener("mouseleave",function(){
        gsap.to(react,{
            backgroundColor:"white",
        })
    
})
})