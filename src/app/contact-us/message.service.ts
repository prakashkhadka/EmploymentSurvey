import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messageSuccess:boolean = false;

  sendMessage(message){
  	firebase.firestore().collection('messages').add(message).then(
  		(response)=>{
  			//console.log("Message successfully saved : " + response);
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
