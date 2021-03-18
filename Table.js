//#region SetUp

//Creating the players hands and a temp card
var samHand = 0
var dealerHand = 0
var newCard

//Creating the deck of cards.
var deck = [11,2,3,4,5,6,7,8,9,10,10,10,10,
    1,2,3,4,5,6,7,8,9,10,10,10,10,
    11,2,3,4,5,6,7,8,9,10,10,10,10,
    1,2,3,4,5,6,7,8,9,10,10,10,10]

//Instead of shuffling the deck, a random card is picked out.
function drawCard(){
    const cardnum = Math.floor(deck.length * Math.random())
    return deck[cardnum]
}
//#endregion



//Drawing the inital cards (creating a total)
samHand = drawCard()
dealerHand = drawCard()
samHand += drawCard()
dealerHand += drawCard()

//Printing the initial scores (Open hand game)
console.log("\nSams hand is" , samHand)
console.log("\nDealers hand is" , dealerHand , "\n")


instaWin()
bust()

function instaWin(){
    if (samHand === 21){
        console.log("Sam wins with Blackjack.")
        process.exit()
    }
}
function bust(){
    if (samHand > 21){
        console.log("Sam loses, he is over 21 with:", samHand)
        process.exit()
    }
}

//#region interaction

//Hit or stand

//const answer = ""
const { table } = require("console")
const e = require("express")
const readline = require("readline");
const { REPLServer } = require("repl")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = () => {
    rl.question("Again?(y/n)", function(answer){
        if (answer === "y" && samHand <= 21){
            //this is your new card
            //this is your new total
            newCard = drawCard()
            console.log("\nYour new card is:" , newCard)
            samHand += newCard
            console.log("\nYour new hand total is:" , samHand , "\n")
            instaWin()
            bust()
            askQuestion()
        }
        else{
            rl.close
            dealer()
        }
    })
}
//Initial question for hit or stand
rl.question("Would you like to hit(h) or stand(s)?", function(answer){
    if(answer === "h" && samHand <= 21) {
        const newCard = drawCard()
        console.log("\nYour new card is:" , newCard)
        samHand += newCard
        console.log("\nYour new hand total is:" , samHand , "\n")
        instaWin()
        bust()
        askQuestion()
    }
    else{
        rl.close
        dealer()
    }
})

rl.on("close", function(){
    process.exit(0)
})

//#endregion

//#region Hit 
//Hit


// function hit(){
//     if (answer == "h"){
//         samHand += drawCard()
//         //check(samHand)
//     }
//     else if(answer == "s"){
//         return
//     }
// }
//#endregion

//Dealer playing hand
function dealer(){
   while (dealerHand<21 && dealerHand <= samHand){
        console.log("\n\nThis is the dealers hand" , dealerHand , "\n")
        const newCard = drawCard()
        dealerHand += newCard
        console.log("The new card is" , newCard , "\n")
        console.log("This is the dealers new hand" , dealerHand , "\n")
        //check(dealerHand)
    }
    winner()
}

//Determine when someone has won
function winner(){

    if (dealerHand == samHand){
        console.log("\nNeither have won, its a draw with" , samHand , "\n")
        process.exit()
    }
    else if(samHand > 21){
        console.log("\nDealer won with" , dealerHand , "\n")
        process.exit()
    }
    else if(dealerHand > 21){
        console.log("\nSam won with" , samHand , "\n")
        process.exit()
    }
    else if(dealerHand < samHand){
        console.log("\nSam won with" , samHand , "\n")
        process.exit()
    }
    else if(samHand < dealerHand){
        console.log("\nDealer won with" , dealerHand , "\n")
        process.exit()
    }
    else{
        console.log("\nError\n")
        process.exit()
    }
}
