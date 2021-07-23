const p1button=document.querySelector(".p1button");
const p2button=document.querySelector(".p2button");
const resetbtn=document.querySelector(".reset");
let p1score=0;
let p2score=0;
let limit=5;
let isgameover=false;
let play_to=document.querySelector("#options");
p1button.addEventListener("click",function(){
    if(!isgameover){
        if(p1score!==limit){
    p1score=p1score+1;
    document.querySelector(".P1score").textContent=p1score;
        }
        else{
            isgameover=true;
            document.querySelector(".P1score").style.color="green";
            document.querySelector(".P2score").style.color="red";
    }

}
});
p2button.addEventListener("click",function(){
    if(!isgameover){
        if(p2score!==limit){
    p2score=p2score+1;
    document.querySelector(".P2score").textContent=p2score;
        }
        else{
           
            isgameover=true;
            document.querySelector(".P2score").style.color="green";
            document.querySelector(".P1score").style.color="red";
        }
    }

});
resetbtn.addEventListener("click",function(){
    isgameover=false;
    p1score=0;
    p2score=0;
   document.querySelector(".P1score").textContent=p1score;
   document.querySelector(".P2score").textContent=p2score;
   document.querySelector(".P2score").style.color="black";
   document.querySelector(".P1score").style.color="black";
});

play_to.addEventListener("change",function(){
   limit=parseInt(this.value);
});
