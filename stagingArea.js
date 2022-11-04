import { Card, getCards } from './cardList.js'
import { shuffleSet } from './shuffleCards.js'

export default function stagingArea(player1, player2){
    let cards = shuffleSet(getCards());

    distribute(player1, player2, cards);
    return (cards);
}

function distribute(player1, player2, cards){
    for (let i=0; i<7; i++){
        player1.cards.push(cards.pop());
        player2.cards.push(cards.pop());
    }
}