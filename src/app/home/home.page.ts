import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentCard: string = 'Ace of Spades';
  score: number = 0;
  cardHistory: any[] = [];

  constructor(private navCtrl: NavController) {}

  addOne() {
    // Implement logic to add one to the current card count and update the score
    this.score++;
    this.cardHistory.push({
      name: this.currentCard,
      result: '+1',
    });
  }

  subtractOne() {
    // Implement logic to subtract one from the current card count and update the score
    this.score--;
    this.cardHistory.push({
      name: this.currentCard,
      result: '-1',
    });
  }

  openTutorial() {
    // Navigate to the tutorial page
    this.navCtrl.navigateForward('/tutorial');
  }

  openSettings() {
    // Navigate to the settings page
    this.navCtrl.navigateForward('/settings');
  }
}
