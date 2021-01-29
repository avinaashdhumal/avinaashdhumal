dark()

function light(){
    document.body.style.transitionDuration="backgroundColor 3s linear";
    document.body.style.backgroundColor="white";
    document.getElementById("light").style.display="none";
    document.getElementById("dark").style.display="inherit";
    var arr=document.querySelectorAll("h2");
    arr.forEach(item=>{
        item.style.color = "black";
    })

}
function dark(){
    document.body.style.transitionDuration="backgroundColor 3s linear";
    document.body.style.backgroundColor="#0b090a";
    document.getElementById("light").style.display="inherit";
    document.getElementById("dark").style.display="none";
    document.getElementsByTagName("li").backgroundColor="rgb(133, 84, 255)";
    // document.getElementById("welcome").style.display="inherit";
    var arr=document.querySelectorAll("h2");
    arr.forEach(item=>{
        item.style.color = "white";
    })
    // console.log(arr);
    var liArr=document.querySelectorAll("li");
    for(let i=0; i<liArr.length-4;i++){
        liArr[i].style.backgroundColor="#edf6f9";
        liArr[i].style.padding="0.3rem 0.3rem";
        liArr[i].style.borderRadius="0.2rem";
        liArr[i].style.textShadow="2px 2px 2px grey"
        liArr[i].style.boxShadow="2px 2px 2px grey"
    }
}