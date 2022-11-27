import {Player} from './player.js'
import stagingArea from './stagingArea.js'

let player1 = new Player("Sodiq")
let player2 = new Player("Musk")
let cards = stagingArea(player1, player2);
let cardPile = []

cardPile.unshift(cards.pop());


function play(player, card, cardPile){
    if ( card.shape.name == cardPile[0].shape.name || card.number == cardPile[0].number ){
        let index = player.cards.indexOf(card);
        if (index > -1){
            player.cards.splice(index, 1);
        }
        cardPile.unshift(card);
        if (!player.cards){
            console.log("Player won game ended");
        }
    }
}