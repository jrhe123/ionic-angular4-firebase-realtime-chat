import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


// Services
import { AlertController } from 'ionic-angular';

// Components
import { ChatPage } from '../chat/chat';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	username: string = '';

	constructor(
		public navCtrl: NavController,
		public alertCtrl: AlertController
	) { }

	showAlert(title: string, message: string){
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: message,
			buttons: ['OK']
		});
		alert.present();
	}

	loginUser(){

		if(/^[a-zA-Z0-9]+$/.test(this.username)){
			// OK
			this.navCtrl.push(ChatPage, {
				username: this.username
			});
		}else{
			this.showAlert('Error','Invalid user name');
		}
	}

}
