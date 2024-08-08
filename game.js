let userscore = 0;
let compscore = 0;

const choices =document.querySelectorAll (".choice"); 
const msg = document.querySelector("#msg")

const gencompChoice = () => {
    const options =["rock" , "paper" , "scissors"]
  const ranidx = Math.floor( Math.random() *3 );
  return options[ranidx];

}
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score");



const drawgame = () => {
    msg.innerText = ("Game was Draw! Play again.");
    msg.style.backgroundColor ="#081b31";
}
const showwiner = (userwin) => {
    if(userwin){
    
        msg.innerText = ("You Win!");
        msg.style.backgroundColor ="green";
        userscore++;
        userscorepara.innerText = userscore;
    }
    else{
        compscore++;
        compscorepara.innerText =compscore;
        msg.innerText =("You Lose");
        msg.style.backgroundColor ="red";
    }

}

const playgame = (userchoice) => {

    // generate computer choice;
    const compchoice = gencompChoice();
    if(userchoice === compchoice){
        drawgame();

    }
    else{
        let userwin =true;
        if(userchoice === "rock"){
            //scissors , paper
           userwin = compchoice === "paper" ? false : true; 
        }
        else if(userchoice === "paper"){
            //scissors , rock
            userwin = compchoice === "scissors" ? false :true;
        }
        else{
            //rock , paper;
            userwin = compchoice === "rock" ? false : true;
        }
        showwiner(userwin);
        
    }
};

choices.forEach ((choice) => {
    
    choice.addEventListener("click" ,  () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    })
} );
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }



