var p1 = 0;
var p2 = 0;
var flag = 0;
var temp = 0;
function RollDice() {
    if(temp==1){
        location.reload();
    }
    
    var rand = Math.floor(Math.random() * 6) + 1;
    document.getElementById("out").value = rand;
    if(flag%2==0){
        p1 += rand; 
    }
    else{
        p2 += rand;
    }
    flag++;
    document.getElementById("s1").value = p1;
    document.getElementById("s2").value = p2;
    
    if(p1>=30){
        document.getElementById("heading").innerHTML = "Player 1 is the winner!";
        document.getElementById("heading").style.color = "Beige";
        temp = 1;
        document.getElementById("btn").innerHTML = "Restart"
    }
    else if(p2>=30){
        document.getElementById("heading").innerHTML = "Player 2 is the winner!";
        document.getElementById("heading").style.color = "Beige";
        temp = 1;
        document.getElementById("btn").innerHTML = "Restart Game"
    }
}