let user=0;
let comp=0;

const imgs=document.querySelectorAll(".image");
const msg=document.querySelector(".msg1");
const userScore=document.querySelector("#user");
const compScore=document.querySelector("#comp");


const comPlay=()=>{
    const options=["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const gameWinner=(userWin)=>{
     if(userWin){
        user++;
        userScore.innerText=user;
        
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
     }else{
        comp++;
        compScore.innerText=comp;
        
        msg.innerText="You Lost, Play Again!";
        msg.style.backgroundColor="red";

     }
}


const draw=()=>{

    msg.innerText="Game was draw, Play Again!";
    msg.style.backgroundColor="#081b31";

};

const play=(user)=>{
    console.log("user= ",user);

   const compChoice=comPlay(); 
   console.log("Computer= ",compChoice);


   if(user===compChoice){
    draw();
   }else{
    let userWin=true;
    if(user==="rock"){
        userWin=compChoice==="paper"?false:true;
    }else if(user==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }else if(user==="scissors"){
        userWin=compChoice==="rock"?false:true;
    }
    gameWinner(userWin);
   }
}

imgs.forEach((image)=>{
    image.addEventListener("click",()=>{
        
        const user=image.getAttribute("id");
        play(user);
    })
})