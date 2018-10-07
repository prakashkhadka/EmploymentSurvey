import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

@Component({
  selector: 'app-all-respondant',
  templateUrl: './all-respondant.component.html',
  styleUrls: ['./all-respondant.component.css']
})
export class AllRespondantComponent implements OnInit {

  constructor() { }

  surveyIds:any[]=[];
  userInfo;
  indexNo;

  ngOnInit() {
  	firebase.firestore().collection('survey').get().then(
  		(docs)=>{
  			docs.forEach(
  				(doc)=>{
  					this.surveyIds.push(doc.id);
  					//console.log(this.surveyIds);
  				}
			)
  		}
	)
  }

  getUserInfo(id,i){
  	this.indexNo = i;
  	//console.log("User id is : " + id);
  	firebase.firestore().collection('survey').doc(id).get().then(
  		(doc)=>{
  			this.userInfo = doc.data();
  			//console.log(doc.data());
  		}
	)
	.catch(
		(error)=>{
			console.log("Couldn't get user info : " + error.message);
		}
	)
  }

}
