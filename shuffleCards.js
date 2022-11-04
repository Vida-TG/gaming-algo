export function shuffleSet(allCards){
    const listLength = allCards.length
    let cards = allCards;

    let i = 20;
    while(i){
        cards = shuffleOne(cards, listLength);
        cards = shuffleTwo(cards, listLength);
        cards = shuffleThree(cards, listLength);
        cards = shufflePop(cards, listLength);
        i-=1;
    }


    return cards
}

function shuffleOne(cards, listLength){
    let rand = Math.floor(Math.random()*getRandomDigitBelowLength(listLength))
    let rand2 = Math.floor(Math.random()*getRandomDigitBelowLenM5(listLength))
    let ra = cards.splice(rand2, 5)
    cards.splice(rand, 0, ra[0], ra[4], ra[1], ra[3], ra[2])
    return cards
}
function shuffleTwo(cards, listLength){
    let rand = Math.floor(Math.random()*getRandomDigitBelowHalf(listLength))
    let rand2 = Math.floor(Math.random()*getRandomDigitBelowHalf(listLength))
    let ra = cards.splice(rand2, 2)
    cards.splice(rand, 0, ra[1], ra[0])
    return cards
}
function shuffleThree(cards, listLength){
    let rand = Math.floor(getRandomDigitAboveHalf(listLength))
    let rand2 = Math.floor(getRandomDigitAboveHalf(listLength))
    let ra = cards.splice(rand2-2, 2)
    cards.splice(rand, 0, ra[1], ra[0])
    return cards
}
function shufflePop(cards, listLength){
    let rand = Math.floor(Math.random()*getRandomDigitBelowLength(listLength))
    let rand2 = (listLength-2) - Math.floor(Math.random()*4)
    let ra = cards.splice(rand2, 2)
    cards.splice(rand, 0, ra[0], ra[1])
    return cards
}

function getRandomDigitBelowLength(listLength){
    return (Math.floor(Math.random() * listLength));
}
function getRandomDigitBelowLenM5(listLength){
    return (Math.floor(Math.random() * (listLength-5)));
}
function getRandomDigitBelowHalf(listLength){
    return (Math.floor(Math.random() * Math.floor(listLength/2)));
}
function getRandomDigitAboveHalf(listLength){
    return ((Math.floor(Math.random() * Math.floor(listLength/2)))+ Math.floor(listLength/2));
}



