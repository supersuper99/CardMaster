import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentCard: any = { name: 'Ace of Spades', value: 1 };
  score: number = 0;
  cardHistory: any[] = [];
  deck: any[] = [
    { name: '2 of Spades', value: 2 },
{ name: '3 of Spades', value: 3 },
{ name: '4 of Spades', value: 4 },
{ name: '5 of Spades', value: 5 },
{ name: '6 of Spades', value: 6 },
{ name: '7 of Spades', value: 7 },
{ name: '8 of Spades', value: 8 },
{ name: '9 of Spades', value: 9 },
{ name: '10 of Spades', value: 10 },
{ name: 'Jack of Spades', value: 10 },
{ name: 'Queen of Spades', value: 10 },
{ name: 'King of Spades', value: 10 },
{ name: 'Ace of Spades', value: 1 },

{ name: '2 of Hearts', value: 2 },
{ name: '3 of Hearts', value: 3 },
{ name: '4 of Hearts', value: 4 },
{ name: '5 of Hearts', value: 5 },
{ name: '6 of Hearts', value: 6 },
{ name: '7 of Hearts', value: 7 },
{ name: '8 of Hearts', value: 8 },
{ name: '9 of Hearts', value: 9 },
{ name: '10 of Hearts', value: 10 },
{ name: 'Jack of Hearts', value: 10 },
{ name: 'Queen of Hearts', value: 10 },
{ name: 'King of Hearts', value: 10 },
{ name: 'Ace of Hearts', value: 1 },

{ name: '2 of Clubs', value: 2 },
{ name: '3 of Clubs', value: 3 },
{ name: '4 of Clubs', value: 4 },
{ name: '5 of Clubs', value: 5 },
{ name: '6 of Clubs', value: 6 },
{ name: '7 of Clubs', value: 7 },
{ name: '8 of Clubs', value: 8 },
{ name: '9 of Clubs', value: 9 },
{ name: '10 of Clubs', value: 10 },
{ name: 'Jack of Clubs', value: 10 },
{ name: 'Queen of Clubs', value: 10 },
{ name: 'King of Clubs', value: 10 },
{ name: 'Ace of Clubs', value: 1 },

{ name: '2 of Diamonds', value: 2 },
{ name: '3 of Diamonds', value: 3 },
{ name: '4 of Diamonds', value: 4 },
{ name: '5 of Diamonds', value: 5 },
{ name: '6 of Diamonds', value: 6 },
{ name: '7 of Diamonds', value: 7 },
{ name: '8 of Diamonds', value: 8 },
{ name: '9 of Diamonds', value: 9 },
{ name: '10 of Diamonds', value: 10 },
{ name: 'Jack of Diamonds', value: 10 },
{ name: 'Queen of Diamonds', value: 10 },
{ name: 'King of Diamonds', value: 10 },
{ name: 'Ace of Diamonds', value: 1 }
  ];

  constructor() {}

  addOne() {
    // Implement logic to add one to the current card count and update the score
    this.score++;
    this.cardHistory.push({
      name: this.currentCard.name,
      result: '+1',
    });
    this.nextCard();
  }

  subtractOne() {
    // Implement logic to subtract one from the current card count and update the score
    this.score--;
    this.cardHistory.push({
      name: this.currentCard.name,
      result: '-1',
    });
    this.nextCard();
  }

  nextCard() {
    // Implement logic to get the next card from the deck and set it as the current card
    if (this.deck.length > 0) {
      this.currentCard = this.deck.shift();
    } else {
      this.resetDeck();
    }
  }

  resetDeck() {
    // Implement logic to reset the deck and current card
    this.deck = [
      { name: '2 of Spades', value: 2 },
{ name: '3 of Spades', value: 3 },
{ name: '4 of Spades', value: 4 },
{ name: '5 of Spades', value: 5 },
{ name: '6 of Spades', value: 6 },
{ name: '7 of Spades', value: 7 },
{ name: '8 of Spades', value: 8 },
{ name: '9 of Spades', value: 9 },
{ name: '10 of Spades', value: 10 },
{ name: 'Jack of Spades', value: 10 },
{ name: 'Queen of Spades', value: 10 },
{ name: 'King of Spades', value: 10 },
{ name: 'Ace of Spades', value: 1 },

{ name: '2 of Hearts', value: 2 },
{ name: '3 of Hearts', value: 3 },
{ name: '4 of Hearts', value: 4 },
{ name: '5 of Hearts', value: 5 },
{ name: '6 of Hearts', value: 6 },
{ name: '7 of Hearts', value: 7 },
{ name: '8 of Hearts', value: 8 },
{ name: '9 of Hearts', value: 9 },
{ name: '10 of Hearts', value: 10 },
{ name: 'Jack of Hearts', value: 10 },
{ name: 'Queen of Hearts', value: 10 },
{ name: 'King of Hearts', value: 10 },
{ name: 'Ace of Hearts', value: 1 },

{ name: '2 of Clubs', value: 2 },
{ name: '3 of Clubs', value: 3 },
{ name: '4 of Clubs', value: 4 },
{ name: '5 of Clubs', value: 5 },
{ name: '6 of Clubs', value: 6 },
{ name: '7 of Clubs', value: 7 },
{ name: '8 of Clubs', value: 8 },
{ name: '9 of Clubs', value: 9 },
{ name: '10 of Clubs', value: 10 },
{ name: 'Jack of Clubs', value: 10 },
{ name: 'Queen of Clubs', value: 10 },
{ name: 'King of Clubs', value: 10 },
{ name: 'Ace of Clubs', value: 1 },

{ name: '2 of Diamonds', value: 2 },
{ name: '3 of Diamonds', value: 3 },
{ name: '4 of Diamonds', value: 4 },
{ name: '5 of Diamonds', value: 5 },
{ name: '6 of Diamonds', value: 6 },
{ name: '7 of Diamonds', value: 7 },
{ name: '8 of Diamonds', value: 8 },
{ name: '9 of Diamonds', value: 9 },
{ name: '10 of Diamonds', value: 10 },
{ name: 'Jack of Diamonds', value: 10 },
{ name: 'Queen of Diamonds', value: 10 },
{ name: 'King of Diamonds', value: 10 },
{ name: 'Ace of Diamonds', value: 1 }
    ];
    this.currentCard = this.deck.shift();
    this.score = 0;
    this.cardHistory = [];
  }
}