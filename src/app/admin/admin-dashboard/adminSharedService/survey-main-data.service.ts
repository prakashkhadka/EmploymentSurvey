import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SurveyMainDataService {

  respondantsNumber:number;
  successfullyCompleted:number;
  notCompletedCourse:number;

  constructor() { 
	// To get the total respondants
  	firebase.firestore().collection('survey').get().then(
  		(docs)=>{
  			this.respondantsNumber = docs.size;
  		}
	)
	.catch(
		(error)=>{
			console.log("Couldn't get survey data : " + error.message);
		}
	)


	// Number of students who successfully completed course
	firebase.firestore().collection('survey').where('completed', '==', 'Yes').get().then(
		(docs)=>{
			this.successfullyCompleted = docs.size;
		}
	)
	.catch(
		(error)=>{
			console.log("Couldn't get the respondants completed course successfully : " + error.message);
		}
	)

	// Number of students who couldn't complete the course
	firebase.firestore().collection('survey').where('completed', '==', 'No').get().then(
		(docs)=>{
			this.notCompletedCourse = docs.size;
		}
	)
	.catch(
		(error)=>{
			console.log("Couldn't get the respondants who didn't complete the course : " + error.message);
		}
	)
  }
}
