import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Subject } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class DropoutReasonService {
	dropoutReason = []

	dReason = new Subject()

	
	constructor() { 
		
	  	// Dropout reasons\
		firebase.firestore().collection('survey').where('dropoutReason', '==', 'Foreign Study').get().then(
			(docs)=>{
				this.dropoutReason.push({'name':'Foreign Study', 'value':docs.size})
				
			}
		)
		.catch(
			(error)=> {
				console.log("Eror : " + error.message);
			}
		)
		firebase.firestore().collection('survey').where('dropoutReason', '==', "Couldn't pass").get().then(
			(docs)=>{
				this.dropoutReason.push({'name':"Couldn't pass", 'value':docs.size})
				//console.log(this.dropoutReason);
			}
		)
		.catch(
			(error)=> {
				console.log("Eror : " + error.message);
			}
		)
		
		firebase.firestore().collection('survey').where('dropoutReason', '==', "Financial difficulty").get().then(
			(docs)=>{
				this.dropoutReason.push({'name':"Financial difficulty", 'value':docs.size})
			}
		)
		.catch(
			(error)=> {
				console.log("Eror : " + error.message);
			}
		)
		firebase.firestore().collection('survey').where('dropoutReason', '==', "Foreign Employment").get().then(
			(docs)=>{
				this.dropoutReason.push({'name':"Foreign Employment", 'value':docs.size})
			}
		)
		.catch(
			(error)=> {
				console.log("Eror : " + error.message);
			}
		)
		firebase.firestore().collection('survey').where('dropoutReason', '==', "Migration").get().then(
			(docs)=>{
				this.dropoutReason.push({'name':"Migration", 'value':docs.size})
			}
		)
		.catch(
			(error)=> {
				console.log("Eror : " + error.message);
			}
		)
		firebase.firestore().collection('survey').where('dropoutReason', '==', "Moved to other college").get().then(
			(docs)=>{
				this.dropoutReason.push({'name':"Moved to other college", 'value':docs.size})
			}
		)
		.catch(
			(error)=> {
				console.log("Eror : " + error.message);
			}
		)
		firebase.firestore().collection('survey').where('dropoutReason', '==', "Other reason").get().then(
			(docs)=>{
				this.dropoutReason.push({'name':"Other reason", 'value':docs.size})
				this.dReason.next(this.dropoutReason);
			}
		)
		.catch(
			(error)=> {
				console.log("Eror : " + error.message);
			}
		)
		
		
  	}
}
