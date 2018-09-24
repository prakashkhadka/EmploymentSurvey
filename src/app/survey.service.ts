import { Injectable, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import 'firebase/firestore';


//import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
	constructor(){

	}
  
  //firstname = new Subject();

  surveyData = [];
  firstname:string;
  lastname:string;
  year:number;
  level:string;;
  completed:string;
  highestEducationLevel:string;
  gender:string;
  employmentStatus:string;
  country:string;
  location:string;
  dropoutReason:string;
  businessType:string;
  employeeNumber:string;
  businessInheritance:string;
  businessDuration:string;
  businessInvestment:string;
  businessNumber:string;
  jobLevel:string;
  jobType:string;
  organiationType:string;
  jobIncome:string;
  jobOtherActivites:string;
  jobSatisfactionLevel:string;
  pastJobChange:string;
  futureJobChange:string;
  overseasPurpose:string;
  FeDuration:string;
  FeIncome:string;
  FeWorkDayNumber:string;
  FeOvertime:string;
  FeOvertimeHours:string;
  FeFurtherStay:string;
  agricultureType:string;
  AgricultureIncome:string;
  afterStudy:string;
  dreamJob:string;
  retiredTime:string;
  serviceDuration:string;
  pension:string;
  housewifeJobwish:string;



  ngOnInit(){
  	
  }

  submit(){
  	
  	let name = {
  		firstName: this.firstname,
  		lastName: this.lastname,
  		year:this.year
  	}
  	firebase.firestore().collection('survey').add(name).then(
  		() => {
  			console.log("Successfully added")
  		}
	)
	.catch(
		() => {
			console.log("Something went wrong. Please try again");
		}
	)
  }





}
