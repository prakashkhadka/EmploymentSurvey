import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmploymentSituationService {

	employment = []
	employmentSituation = new Subject();

  	constructor() { 
  		firebase.firestore().collection('survey').where('employmentStatus', '==', 'Business').get().then(
  			(docs)=>{
  				this.employment.push({"name":"Business", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log("Couldn't get Business as employment status : " + error.message);
			}
		)

		firebase.firestore().collection('survey').where('employmentStatus', '==', 'Job').get().then(
  			(docs)=>{
  				this.employment.push({"name":"Job", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log("Couldn't get Job as employment status : " + error.message);
			}
		)

		firebase.firestore().collection('survey').where('employmentStatus', '==', 'Study').get().then(
  			(docs)=>{
  				this.employment.push({"name":"Study", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log("Couldn't get Study as employment status : " + error.message);
			}
		)

		firebase.firestore().collection('survey').where('employmentStatus', '==', 'Foreign Employment').get().then(
  			(docs)=>{
  				this.employment.push({"name":"Foreign Employment", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log("Couldn't get Foreign Employment as employment status : " + error.message);
			}
		)

		firebase.firestore().collection('survey').where('employmentStatus', '==', 'Housewife').get().then(
  			(docs)=>{
  				this.employment.push({"name":"Housewife", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log("Couldn't get Housewife as employment status : " + error.message);
			}
		)

		firebase.firestore().collection('survey').where('employmentStatus', '==', 'Unemployed').get().then(
  			(docs)=>{
  				this.employment.push({"name":"Unemployed", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log("Couldn't get Unemployed as employment status : " + error.message);
			}
		)

		firebase.firestore().collection('survey').where('employmentStatus', '==', 'Retired').get().then(
  			(docs)=>{
  				this.employment.push({"name":"Retired", "value": docs.size});
  				this.employmentSituation.next(this.employment);
  			}
		).catch(
			(error)=>{
				console.log("Couldn't get Retired as employment status : " + error.message);
			}
		)
  	}
}
