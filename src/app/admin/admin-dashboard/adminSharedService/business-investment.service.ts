import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessInvestmentService {

	bInvestment = []
	businessInvestment = new Subject();

  	constructor() { 
  		firebase.firestore().collection('survey').where('businessInvestment', '==', '1-5 lakhs').get().then(
  			(docs)=>{
  				this.bInvestment.push({"name":"1-5 lakhs", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)

		firebase.firestore().collection('survey').where('businessInvestment', '==', '5-10 lakhs').get().then(
  			(docs)=>{
  				this.bInvestment.push({"name":"5-10 lakhs", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)

		firebase.firestore().collection('survey').where('businessInvestment', '==', '10-20 lakhs').get().then(
  			(docs)=>{
  				this.bInvestment.push({"name":"10-20 lakhs", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)

		firebase.firestore().collection('survey').where('businessInvestment', '==', '20-50 lakhs').get().then(
  			(docs)=>{
  				this.bInvestment.push({"name":"20-50 lakhs", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)

		firebase.firestore().collection('survey').where('businessInvestment', '==', '50-100 lakhs').get().then(
  			(docs)=>{
  				this.bInvestment.push({"name":"50-100 lakhs", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)

		firebase.firestore().collection('survey').where('businessInvestment', '==', '1-2 Karod').get().then(
  			(docs)=>{
  				this.bInvestment.push({"name":"1-2 Karod", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)

		firebase.firestore().collection('survey').where('businessInvestment', '==', '2 karod above').get().then(
  			(docs)=>{
  				this.bInvestment.push({"name":"2 karod above", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)

		firebase.firestore().collection('survey').where('businessInvestment', '==', "Don't want to say").get().then(
  			(docs)=>{
  				this.bInvestment.push({"name":"Don't want to say", "value": docs.size});
  				this.businessInvestment.next(this.bInvestment);
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)
  	}
}
