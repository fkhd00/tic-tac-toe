function display_players(){
    const button1=document.getElementById("player1-button");
    button1.addEventListener("click",()=>{
        const player1=document.getElementById("player1Input").value;
        document.getElementById("player1Form").style.cssText="visibility:hidden;";
        document.getElementById("player1").innerHTML=""+player1;
        document.getElementById("player1").style.cssText="font-size:40px; text-align:center;"
    });
    const button2=document.getElementById("player2-button");
    button2.addEventListener("click",()=>{
        document.getElementById("cpu-button").style.cssText="visibility:hidden";
        button2.style.cssText="visibility:hidden";
        let player2Input=document.createElement("input");
        player2Input.id="player2Input";
        player2Input.placeholder="player2";
        player2Input.style.cssText="text-align:center;"
        document.getElementById("player2").appendChild(player2Input);
    });
}

display_players();