import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// Services
// Firebase database
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @Component({
 	selector: 'page-chat',
 	templateUrl: 'chat.html',
 })
 export class ChatPage {

 	username:string = '';
 	message:string = '';
 	subscription;
 	messages: object[] = [];

 	constructor(
 		public navCtrl: NavController, 
 		public navParams: NavParams,
 		public db: AngularFireDatabase
 	) { 

 		this.username = this.navParams.get('username');
 		this.subscription = this.db.list('/chat').subscribe(data => {
 			
 			// Real-time data retrieve
 			this.messages = data;
 		});
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ChatPage');

 		this.db.list('/chat').push({
 			specialMessage: true,
 			message: `${this.username} has joined the room`
 		}).then(() => {

 		}).catch((error) => {
 			console.log(error);
 		});
 	}

 	ionViewWillLeave() {
 		console.log('User is about to go');

 		this.subscription.unsubscribe();

 		this.db.list('/chat').push({
 			specialMessage: true,
 			message: `${this.username} has left the room`
 		}).then(() => {

 		}).catch((error) => {
 			console.log(error);
 		});
 	}

 	sendMessage(){
 		this.db.list('/chat').push({
 			username: this.username,
 			message: this.message
 		}).then(() => {

 		}).catch((error) => {
 			console.log(error);
 		});
		this.message = '';
 	}

 }
