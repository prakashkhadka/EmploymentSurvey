import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }
  messages=[];
  openMessageBox:boolean = false;
  showWaitSpinner:boolean = true;
  ngOnInit() {
  	firebase.firestore().collection('messages').get().then(
  		(docs)=>{
  			docs.forEach(
  				(doc)=>{
  					this.messages.push(doc.data());
  					this.showWaitSpinner = false;
  				}
			)
  		}
	)
  }

  composeMessage(){
  	this.openMessageBox=true;
  }

  cancelComposeMessage(){
  	this.openMessageBox=false;
  }

  seneMessage(form:NgForm){
  	
  }

}
