import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobIncomeService {

	jIncome = []
	jobIncome = new Subject();

  	constructor() { 
  		firebase.firestore().collection('survey').where('jobIncome', '==', '10-15 Thousands').get().then(
  			(docs)=>{
  				this.jIncome.push({"name":"10-15 Thousands", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)

		firebase.firestore().collection('survey').where('jobIncome', '==', '15-20 Thousands').get().then(
  			(docs)=>{
  				this.jIncome.push({"name":"15-20 Thousands", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)

		firebase.firestore().collection('survey').where('jobIncome', '==', '20-25 Thousands').get().then(
  			(docs)=>{
  				this.jIncome.push({"name":"20-25 Thousands", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)

		firebase.firestore().collection('survey').where('jobIncome', '==', '25-35 Thousands').get().then(
  			(docs)=>{
  				this.jIncome.push({"name":"25-35 Thousands", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)

		firebase.firestore().collection('survey').where('jobIncome', '==', '35-50 Thousands').get().then(
  			(docs)=>{
  				this.jIncome.push({"name":"35-50 Thousands", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)

		firebase.firestore().collection('survey').where('jobIncome', '==', '50-100 Thousands').get().then(
  			(docs)=>{
  				this.jIncome.push({"name":"50-100 Thousands", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)

		firebase.firestore().collection('survey').where('jobIncome', '==', 'More than 100 Thousands').get().then(
  			(docs)=>{
  				this.jIncome.push({"name":"More than 100 Thousands", "value": docs.size});
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)

		firebase.firestore().collection('survey').where('jobIncome', '==', "Don't want to disclose").get().then(
  			(docs)=>{
  				this.jIncome.push({"name":"Don't want to disclose", "value": docs.size});
  				this.jobIncome.next(this.jIncome);
  			}
		).catch(
			(error)=>{
				console.log(error.message);
			}
		)
  	}
}
