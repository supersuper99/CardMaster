import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('alertController')
  alertController: AlertController = new AlertController;

  currentCard: any;
  score: number = 0;
  cardHistory: any[] = [];
  deck: any[] = [];

  constructor() {
    this.generateDeck();
    this.currentCard = this.getNextCard();
  }

  generateDeck() {
    const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
    const values = [
      { name: '2', value: 1 },
      { name: '3', value: 1 },
      { name: '4', value: 1 },
      { name: '5', value: 1 },
      { name: '6', value: 1 },
      { name: '7', value: 0 },
      { name: '8', value: 0 },
      { name: '9', value: 0 },
      { name: '10', value: -1 },
      { name: 'Jack', value: -1 },
      { name: 'Queen', value: -1 },
      { name: 'King', value: -1 },
      { name: 'Ace', value: -1 },
    ];

    for (const suit of suits) {
      for (const value of values) {
        this.deck.push({
          name: `${value.name} of ${suit}`,
          value: value.value,
        });
      }
    }
  }

  getNextCard() {
    const index = Math.floor(Math.random() * this.deck.length);
    return this.deck.splice(index, 1)[0];
  }

  async checkAnswer(selectedValue: number) {
    let message = '';
    if (selectedValue === this.currentCard.value) {
      message = 'Correct!';
      this.score++;
    } else {
      message = 'Incorrect.';
    }
    const alert = await this.alertController.create({
      header: message,
      message: `The value of the ${this.currentCard.name} is ${this.currentCard.value}.`,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.currentCard = this.getNextCard();
          },
        },
      ],
    });
    alert.present();
  }
}