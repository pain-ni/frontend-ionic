import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  private: string[];
  health: string[];
  community: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.private = ['Lisburn Chiro','North Down Physio','Ulster Sports Clinic']
    this.health = ['Chronic Pain Service - Musgrave Park'];

    this.items = [];
    for (let i = 1; i < this.private.length; i++) {
      this.items.push({
        title: 'Private Care Provider ' + this.private[i],
        note: 'Private Care Provider #' + this.private[i],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    for (let i = 1; i < this.health.length; i++) {
      this.items.push({
        title: 'Health Service Care Provider ' + this.health[i],
        note: 'Health Service Care Provider #' + this.health[i],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
