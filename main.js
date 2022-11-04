import {Player} from './player.js'
import stagingArea from './stagingArea.js'

let player1 = new Player("Sodiq")
let player2 = new Player("Musk")
let cards = stagingArea(player1, player2);
let cardPile = []

cardPile.unshift(cards.pop());


function play(card){
    if ( card.shape.name == cardPile[0].shape.name || card.number == cardPile[0].number ){
        cardPile.unshift(card);
        if (!player1.cards || !player2.cards){
            console.log("Finished");
        }
    }
}