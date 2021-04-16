let player1Value=0;
let player2Value=0;
let cpuValue=0;
let player1Name="";
let player2Name="";
let wincount=0;
function displayPlayers(){
    const button1=document.getElementById("player1-button");
    button1.addEventListener("click",()=>{
        let player1=document.getElementById("player1Input").value;
        if(player1==""){
            player1=player1+"player 1";
        }
        player1Name=player1;
        document.getElementById("player1Form").style.cssText="visibility:hidden;";
        document.getElementById("player1").innerHTML=""+player1;
        document.getElementById("player1").style.cssText="font-size:40px; text-align:center;";
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
            if (player2Input.value==""){
                player2Input.value="player 2";
                toss();
            }
            player2div.innerHTML=player2Input.value+"";
            player2Name=player2Input.value;
            player2div.style.cssText="font-size:40px;";
            cpuValue=2;
            toss();
        });
    });
    const button3=document.getElementById("cpu-button");
    button3.addEventListener("click",()=>{
        button2.style.cssText="visibility:hidden";
        button3.style.cssText="visibility:hidden";
        player2div.innerHTML="CPU";
        player2Name="CPU"
        player2div.style.cssText="font-size:40px;";
        player2Value=2;
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
            if((toss==0&&cpuValue==2)||(toss==0&&player2Value==2)){
                player1Value=1;
                tossButton.style.cssText="visibility:hidden;";
                document.getElementById("message").innerHTML="<b>"+player1Name+"</b><br> goes first";
                console.log("p1 wins");
            }
            else if(toss==1&&cpuValue==2){
                player2Value=1;
                tossButton.style.cssText="visibility:hidden;";
                document.getElementById("message").innerHTML="<b>"+player2Name+"</b><br> goes first";
            }
            else{
                cpuValue==1;
                tossButton.style.cssText="visibility:hidden;";
                document.getElementById("message").innerHTML="<b>CPU</b><br> goes first";
            }
        });
    }
    
}

displayPlayers();

const game=()=>{

    let gridbox={};
    let turncount=0;
    let _ip=["","","","","","","","",""];
    let creategrid=function(){
        for(let k=0;k<9;k++){
            gridbox[k]=document.createElement("div");
            gridbox[k].id=""+k;
            gridbox[k].classList.add("boxes");
            gridbox[k].count=0;
            document.getElementById("grid").appendChild(gridbox[k]);
        }
        for(let i=0;i<9;i++){
            gridbox[i].addEventListener("click",()=>{ 
                    if((turncount%2==0&&gridbox[i].count==0)&&(cpuValue==2||player2Value==2)){ 
                        gridbox[i].innerHTML="O";
                        _ip[gridbox[i].id]=_ip[gridbox[i].id]+"O";
                        turncount=turncount+1;
                        gridbox[i].count=1;
                        
                        if((_ip[0]+_ip[1]+_ip[2]=="OOO")||(_ip[3]+_ip[4]+_ip[5]=="OOO")||(_ip[6]+_ip[7]+_ip[8]=="OOO")){
                            if(wincount==0){win(player1Name);}
                        }
                        else if((_ip[0]+_ip[3]+_ip[6]=="OOO")||(_ip[1]+_ip[4]+_ip[7]=="OOO")||(_ip[2]+_ip[5]+_ip[8]=="OOO")){
                            if(wincount==0){win(player1Name);}
                            
                        }
                        else if((_ip[0]+_ip[4]+_ip[8]=="OOO")||(_ip[2]+_ip[4]+_ip[6]=="OOO")){
                            if(wincount==0){win(player1Name);}
                            
                        }
                    }
                    
                    else if((gridbox[i].count==0&&turncount%2!=0)&&(cpuValue==2||player2Value==2)){
                        gridbox[i].innerHTML="X";
                        _ip[gridbox[i].id]=_ip[parseInt(gridbox[i].id)]+"X";
                        turncount=turncount+1;
                        gridbox[i].count=1;
                        
                        if((_ip[0]+_ip[1]+_ip[2]=="XXX")||(_ip[3]+_ip[4]+_ip[5]=="XXX")||(_ip[6]+_ip[7]+_ip[8]=="XXX")){
                            if(wincount==0){win(player1Name);}
                        }
                        else if((_ip[0]+_ip[3]+_ip[6]=="XXX")||(_ip[1]+_ip[4]+_ip[7]=="XXX")||(_ip[2]+_ip[5]+_ip[8]=="XXX")){
                            if(wincount==0){win(player1Name);}
                        }
                        else if((_ip[0]+_ip[4]+_ip[8]=="XXX")||(_ip[2]+_ip[4]+_ip[6]=="XXX")){
                            if(wincount==0){win(player1Name);}
                        }
                    }
               
            });
    
            }
        
    }
    function win(winner){
        document.getElementById("message").innerHTML="Congratulations !!<br> <span style='font-size:40px;'>"+winner+"</span>"+"<br>wins the match";
        wincount=1;
    }
    creategrid();
}
game();