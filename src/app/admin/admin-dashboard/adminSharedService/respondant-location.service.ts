import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RespondantLocationService {

  livingInNepal:number;
  livingOverseas:number;
  location=[];

  respondantLocationData = new Subject();

  constructor() { 
	// To get the respondants living in Nepal
	firebase.firestore().collection('survey').where('location', '==', 'Nepal').get().then(
		(docs)=>{
			this.livingInNepal = docs.size;
			this.location.push({"name":"Living in Nepal", "value": docs.size});
		}
	)
	.catch(
		(error)=>{
			console.log("Couldn't get the respondants living in Nepal : " + error.message);
		}
	)

	// To get the respondants living Overseas
	firebase.firestore().collection('survey').where('location', '==', 'Overseas').get().then(
		(docs)=>{
			this.livingOverseas = docs.size;
			this.location.push({"name":"Living Overseas", "value": docs.size});
			this.respondantLocationData.next(this.location);
		}
	)
	.catch(
		(error)=>{
			console.log("Couldn't get the respondants living Overseas : " + error.message);
		}
	)
	
	//console.log("Location iss : " + this.location);
  }
}
