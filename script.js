let gameseq=[];
let userseq=[];
let level=0;
let started=false;
let h2=document.querySelector("h2");
let btns = ["yellow","red","purple","green"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
});

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    console.log(gameseq);

    gameFlash(randomBtn);

}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}
function checkAns(idx){
    // console.log("Current Level: "+level);
    // let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
       if(userseq.length===gameseq.length){
           setTimeout(levelUp,1000);
       }
    }
else{
    h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br> press any key to start again`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
},150)
    reset();
}
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);
    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameseq=[];
    userseq=[];
    level=0;
    started=false;
}  