//Treasure hunt game
//creating variables
let playerName="Sharma Pallavi"
//initial coins
let coins=15
//initial health
let health=5
//initial score
let score=0
//key status
let hasKey=false
//current room
let room=1
//maximum rooms
let maxRooms=6
//game over status
let gameOver=false
//game introduction
console.log("welcome to Treasure Hunt game:"+ playerName +"!")
//loop 
while(room<=maxRooms && gameOver===false){
    console.log("you entered room"+ room)
    //room 1 event
    if (room===1){
        console.log("you found a treasure box")
        coins+=5
        score+=10
    }
    //room 2 event
    else if(room===2){
        console.log("A hidden dart hits you!")
        score-=2
        health-=1
    }
    //room 3 event
    else if(room===3){
        console.log("you can buy a key for 8 coins")
        if(coins>=8){
            coins-=8
            hasKey=true
            score+=5
        }
        else{
            console.log("you don't have enough coins to buy the key")
            score-=1
        }
    }
    
    //room 4 event
    else if(room===4){
        console.log("A wild lion attacks you!")
        health-=2
        score-=5
    }
    //room 5 event
    else if(room===5){
        console.log("you found a health potion")
        health+=2
        score+=2
    }
    //room 6 event
    else if(room===6){
        if(hasKey){
            console.log("you unlocked the treasure room and won the game!")
            score+=20
            gameOver=true   
        }
        else{
            console.log("you need a key to unlock the treasure room")
            score-=5
        }
    }
    //check health
    if(health<=0){
        console.log("your health reached zero.Game over!")
        gameOver=true
    }
    //move to next room
    room+=1
}
console.log("Treasure Hunt — Game Summary");
// Player name
console.log("Player Name: " + playerName);
// Final coins
console.log("Final Coins: " + coins);
// Final health
console.log("Final Health: " + health);
// Final score
console.log("Final Score: " + score);
// Key status
console.log("Has Key: " + hasKey);
// Determine status
let finalStatus = "LOSE";
//
if(health > 0 && score >= 20){
finalStatus = "WIN";
}
// Print status
console.log("Status: " + finalStatus);



