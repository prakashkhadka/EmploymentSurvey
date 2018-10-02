import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messageSuccess:boolean = false;
  messageSent:boolean =false;

  sendMessage(message){
    this.messageSent = true;
  	firebase.firestore().collection('messages').add(message).then(
  		(response)=>{
  			this.messageSuccess = true;
  		}
	)
	.catch(
		(error)=>{
			console.log("Something went wrong : " + error.message)
		}
	)
  }
}
