Blackjack Rules
-------------------
The aim of the game is to have a better hand than the dealer without exceding 21.

Card system:
    ~ Ace = 1 or 11
    ~ Jack = 10
    ~ Queen = 10
    ~ King = 10
    
Both the player and dealer are dealt 2 cards each.

Then the player has the option hit as many times as they wish until they stand, however if they.

Once the player stands the dealer will deal themself random cards untill his hand is greater than the players hand.

If a players hand goes over 21 then the other player wins automatically.

If no player is over 21 then the highest hand under 21 wins the hand.

The game can then restart.


Simplistic Terminal Guide
---------------------------------------
Run the code with: node Table.js

When prompted select either 'h' or 's' then press 'Enter'

Once your hand is dealt the dealer will deal his hand

And a winner will be announced

Replay with: node Table.js

More In Depth Terminal Guide
----------------------------------------

To initially run the blackjack program, you need to run the table with:

node Table.js

The program will deal two cards to Sams hand and two cards to the dealers hand.

Next you are offered a choice of hit or stand (Select 'h' or 's' then press 'Enter')

Hit: Pulls a random card from the deck and adds it to the players hand.

Stand: Stops pulling cards from the deck and proceeds with the dealers hand.

The dealer will deal himself random cards untill his hand is greater than the players hand.

Once both the player and dealer are finished dealing the hand totals will be compared and the player/dealer with the highest score below or equal to 21 wins the hand.

The program will then terminate and you can restart with:

node Table.js

to play again.
