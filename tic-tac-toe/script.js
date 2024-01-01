let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#reset")
let newBtn =document.querySelector("#new-Btn")
let msg=document.querySelector("#msg")
let msgContainer=document.querySelector(".msg")

let turnO=true
let arr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,6],[2,4,6],[3,4,5],[6,7,8]]

resetGame=() =>{
    turnO=true;
    enable()
    msgContainer.classList.add("hide")
}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText="X"
            turnO=false
        }else{
            box.innerText="O"
            turnO=true
        }
        box.disabled=true;
        checkWinner()
    })
})
let enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

let disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner =(winner) =>{
    msg.innerText=`Congratulations ${winner} is Winner`
    msgContainer.classList.remove("hide")
    disable();

}

let checkWinner=()=>{
    for (let pattern of arr){
        let pos1Val=boxes[pattern[0]].innerText
        let pos2Val=boxes[pattern[1]].innerText
        let pos3Val=boxes[pattern[2]].innerText

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if (pos1Val == pos2Val && pos2Val== pos3Val){
                showWinner(pos1Val)

            }
        }
    }
}

newBtn.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)