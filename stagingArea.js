import { Player } from './player.js'
import { Card, getCards } from './cardList.js'
import { shuffleSet } from './shuffleCards.js'

export default function play(){
    let player1 = new Player("Sodiq")
    let player2 = new Player("Musk")

    let cards = shuffleSet(getCards());

    distribute(player1, player2, cards);
}

function distribute(player1, player2, cards){
    for (let i=0; i<7; i++){
        player1.cards.push(cards.pop());
        player2.cards.push(cards.pop());
    }
}