// document.querySelector("#bulb");
var bulb = document.querySelector("#bulb");
// # for id
var btn  = document.querySelector("button");
// nothing for tag
var flag =0;
btn.addEventListener("click",function(){
    // btn.style.backgroundColor="yellow";
    // the above line will fill yellow color inside button
    if(flag == 0){
        bulb.style.backgroundColor="yellow";
        console.log("clicked");
        flag =1;
    }else{
        bulb.style.backgroundColor="transparent";
        console.log("Again clicked");
        flag =0; 
    }
    
})