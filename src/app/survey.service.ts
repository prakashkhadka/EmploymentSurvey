import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import 'firebase/firestore';


//import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
	constructor(private router:Router){

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
  organisationType:string;
  jobIncome:string;
  jobOtherActivites:string;
  jobSatisfactionLevel:string;
  pastJobChange:string;
  futureJobChange:string;
  overseasPurpose:string;
  feDuration:string;
  feIncome:string;
  feWorkDayNumber:string;
  feOvertime:string;
  feOvertimeHours:string;
  feFurtherStay:string;
  agricultureType:string;
  agricultureIncome:string;
  afterStudy:string;
  dreamJob:string;
  retiredTime:string;
  serviceDuration:string;
  pension:string;
  housewifeWish:string;
  email:string;
  consent:string;



  ngOnInit(){
  	
  }

  submit(){
  	console.log("Submit method called");
  	this.router.navigate(['/thank-you']);
	/*
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
	*/
  }





}
