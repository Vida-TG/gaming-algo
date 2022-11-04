import * as specs from './specs.js'

export class Card {
    constructor(shape, number){
        this.shape = shape;
        this.number = number;
    }
}

export function getCards(){
    let cardList = [];

    for (let i=1; i<15; i++) {
        if (i != 6 && i != 9){
            let card = new Card(specs.circle, i);
            cardList.push(card);
        }
    }
    for (let i=1; i<15; i++) {
        if (i != 6 && i != 9){
            let card = new Card(specs.triangle, i);
            cardList.push(card);
        }
    }
    for (let i=1; i<15; i++) {
        if (i != 6 && i != 9 && i%4!=0){
            let card = new Card(specs.cross, i);
            cardList.push(card);
        }
    }
    for (let i=1; i<15; i++) {
        if (i != 6 && i != 9 && i%4!=0){
            let card = new Card(specs.square, i);
            cardList.push(card);
        }
    }
    for (let i=1; i<9; i++) {
        if (i != 6){
            let card = new Card(specs.star, i);
            cardList.push(card);
        }
    }
    for (let i=1; i<6; i++) {
        let card = new Card(specs.nil, 20);
        cardList.push(card);
    }
    return cardList;
}