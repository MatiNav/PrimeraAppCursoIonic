import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class Buyout {

    public name;
    

  constructor(public navCtrl: NavController, private navParams: NavParams) {

    this.name = this.navParams.data;

  }

  goToRoot(){

     let options = {
          direction: 'back',
          duration: 1075,
          easing: 'ease-out',
          animate: true,
      }

      this.navCtrl.popToRoot(options);
  }
}
