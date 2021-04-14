let player1Value=0;
let player2Value=0;
function displayPlayers(){
    const button1=document.getElementById("player1-button");
    button1.addEventListener("click",()=>{
        const player1=document.getElementById("player1Input").value;
        document.getElementById("player1Form").style.cssText="visibility:hidden;";
        document.getElementById("player1").innerHTML=""+player1;
        document.getElementById("player1").style.cssText="font-size:40px; text-align:center;"
    });
    const button2=document.getElementById("player2-button");
    let player2div=document.getElementById("player2");
    button2.addEventListener("click",()=>{
        document.getElementById("cpu-button").style.cssText="visibility:hidden";
        button2.style.cssText="visibility:hidden";
        
        let player2Input=document.createElement("input");
        player2Input.id="player2Input";
        player2Input.placeholder="player2";
        player2Input.style.cssText="text-align:center;";
        player2div.appendChild(player2Input);
        
        let confirmbutton2=document.createElement("button");
        confirmbutton2.style.cssText="margin-top:10px";
        confirmbutton2.innerHTML="Confirm";
        player2div.appendChild(confirmbutton2);
        
        confirmbutton2.addEventListener("click",()=>{
            confirmbutton2.style.cssText="visibility:hidden;";
            player2Input.style.cssText="visibility:hidden;";
            player2div.innerHTML=player2Input.value+"";
            player2div.style.cssText="font-size:40px;";
            toss();
        });
    });
    const button3=document.getElementById("cpu-button");
    button3.addEventListener("click",()=>{
        button2.style.cssText="visibility:hidden";
        button3.style.cssText="visibility:hidden";
        player2div.innerHTML="CPU";
        player2div.style.cssText="font-size:40px;";
        toss();
    });
    
    function toss(){
        
        let breakelement=document.createElement("br");
        player2div.appendChild(breakelement);
        let tossButton=document.createElement("button");
        player2div.appendChild(tossButton);
        tossButton.innerHTML="Toss";
        tossButton.style.cssText="text-align:center; margin-top:30px;";
        tossButton.addEventListener("click",()=>{
            const toss=Math.floor(Math.random()*2);
            if(toss==0){
                player1Value=1;
            }
            else{
                player2Value=1;
            }
        });
    }
    
}

displayPlayers();
let gridbox=[];
let creategrid=function(){
    for(i=0;i<9;i++){
        gridbox[i]=document.createElement("div");
        gridbox[i].id="id"+i;
        gridbox[i].classList.add("boxes");
        document.getElementById("grid").appendChild(gridbox[i]);
        

        }
}
creategrid();