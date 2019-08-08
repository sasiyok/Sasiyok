import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
* Generated class for the PhoneBookPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
 selector: 'page-phone-book',
 templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

contactArray = [{name: 'Lay', telephone: '0980469609', imageUrl: 'assets/imgs/251906526003202.jpg'},
               {name: 'Sehun', telephone: '0955106748', imageUrl: 'assets/imgs/nlXXl3HC.jpg'},
               
               ];

 constructor(public navCtrl: NavController, public navParams: NavParams) {
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad PhoneBookPage');
 }
 viewDetail(item){
   this.navCtrl.push("PhoneBookDetailPage", item);
 }

}//end class


