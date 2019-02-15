class Card {
    constructor(suit,value,name) {
        this.suit = suit;
        this.value = value;
        this.name = name;
    }
    cardInfo() {
        console.log(`Suit: ${this.suit}\nName: ${this.name}\nValue: ${this.value}`)
    }
}
// The Deck should contain the 52 standard Cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random Card
// Deal should return the Card that was dealt and remove it from the Deck
class Deck {
    constructor() {
        this.deck = [];
    }
    showDeck() {
        console.log(this.deck.length);
        return this;
    }
    shuffle() {
        let m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }
    deal() {
        return this.deck.pop();
    }
    reset() {
        this.deck = []
        var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
        var values = [[1,"Ace"],[2,"Two"],[3,"Three"],[4,"Four"],[5,"Five"],[6,"Six"],[7,"Seven"],[8,"Eight"],[9,"Nine"],[10,"Ten"],[11,"Jack"],[12,"Queen"],[13,"King"]]

        for(var i = 0; i < suits.length; i++) {
            for(var j = 0; j < values.length; j++) {
                this.deck.push(new Card(suits[i], values[j][0], values[j][1]))
            }
        }
        return this
    }
}

class Player{
    constructor(name) {
        this.name = name;
        this.hand = []
    }
    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }
    discard() {
        this.hand.pop();
        return this;
    }
}

const deck2 = new Deck();
deck2.reset().shuffle();
console.log(deck2);

const player2 = new Player("Ronnel");
player2.draw(deck2).draw(deck2);
console.log(player2);
console.log(deck2);