import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css'],
})
export class ContactPage {
  height: number;
  weight: number;
  age: number;
  gender: string;
  activity: number;
  dci: number;
  fdci: number;
   

  constructor(public navCtrl: NavController) {}

  calculatedci () {
    if (this.gender == "m"){
      this.dci = Math.round (((10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5 )) * this.activity;
    } else if (this.gender == "f") {
      this.dci = Math.round ((10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161) * this.activity;
    }
  }
}
