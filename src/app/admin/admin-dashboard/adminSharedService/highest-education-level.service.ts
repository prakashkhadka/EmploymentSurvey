import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighestEducationLevelService {
	highestLevel = [];
	educationHighestLevel = new Subject();

  constructor() { 
  	firebase.firestore().collection('survey').where('highestEducationLevel', '==', 'Intermediate').get().then(
  		(docs)=>{
  			this.highestLevel.push({"name":"Intermediate", "value": docs.size});
  		}
	).catch(
		(error)=>{
			console.log("Couldn't get Intermediate : " + error.message);
		}
	)

	firebase.firestore().collection('survey').where('highestEducationLevel', '==', 'Bachelor').get().then(
  		(docs)=>{
  			this.highestLevel.push({"name":"Bachelor", "value": docs.size});
  		}
	).catch(
		(error)=>{
			console.log("Couldn't get Bachelor : " + error.message);
		}
	)

	firebase.firestore().collection('survey').where('highestEducationLevel', '==', 'Master').get().then(
  		(docs)=>{
  			this.highestLevel.push({"name":"Master", "value": docs.size});
  		}
	).catch(
		(error)=>{
			console.log("Couldn't get Master : " + error.message);
		}
	)

	firebase.firestore().collection('survey').where('highestEducationLevel', '==', 'Doctorate').get().then(
  		(docs)=>{
  			this.highestLevel.push({"name":"Doctorate", "value": docs.size});
  			this.educationHighestLevel.next(this.highestLevel);
  		}
	).catch(
		(error)=>{
			console.log("Couldn't get Doctorate : " + error.message);
		}
	)
  }
}
