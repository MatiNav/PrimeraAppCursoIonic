import { Buyout } from './../buyout/buyout';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class Shop {

     public name1;
     public name2;
     public name3;


  constructor(public navCtrl: NavController) {

    this.name1 = 'Milk';
    this.name2 = 'Bread';
    this.name3 = 'Apples';

  }

  goToBuyout(name: string){

    this.navCtrl.push(Buyout,name);

  }

}
