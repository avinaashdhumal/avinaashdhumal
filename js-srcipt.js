dark()
function light(){
    document.body.style.transitionDuration="backgroundColor 3s linear";
    document.body.style.backgroundColor="white";
    document.getElementById("light").style.display="none";
    document.getElementById("dark").style.display="inherit";
    // document.getElementById("welcome").style.display="none";
}
function dark(){
    document.body.style.transitionDuration="backgroundColor 3s linear";
    document.body.style.backgroundColor="black";
    document.getElementById("light").style.display="inherit";
    document.getElementById("dark").style.display="none";
    document.getElementsByTagName("li").backgroundColor="rgb(133, 84, 255)";
    // document.getElementById("welcome").style.display="inherit";
    var arr=document.querySelectorAll("h2");
    arr.forEach(item=>{
        item.style.color = "white";
    })
    console.log(arr);
}