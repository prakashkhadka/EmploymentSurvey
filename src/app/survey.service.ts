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
  
  firstname:string;
  lastname:string;
  year:number;
  level:string;
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
      if(this.completed == 'Yes'){
          this.dropoutReason = null;
      }
      if(this.feOvertime == 'No'){
        this.feOvertimeHours=null;
      }
      

      let surveyData = {}

      if(this.employmentStatus == 'Job'){
        surveyData = {
          level:this.level,
          year:this.year,
          completed:this.completed,
          dropoutReason:this.dropoutReason,
          highestEducationLevel:this.highestEducationLevel,
          gender:this.gender,
          location:this.location,
          employmentStatus:this.employmentStatus,
          email:this.email,
          consent:this.consent,
          jobType:this.jobType,
          organisationType:this.organisationType,
          jobLevel:this.jobLevel,
          jobIncome:this.jobIncome,
          JobOtherActivities:this.jobOtherActivites,
          jobSatisfactionLevel:this.jobSatisfactionLevel,
          pastJobChange:this.pastJobChange,
          futureJobChange:this.futureJobChange
        }
      }
        else if(this.employmentStatus == 'Business'){
          surveyData = {
            level:this.level,
            year:this.year,
            completed:this.completed,
            dropoutReason:this.dropoutReason,
            highestEducationLevel:this.highestEducationLevel,
            gender:this.gender,
            location:this.location,
            employmentStatus:this.employmentStatus,
            email:this.email,
            consent:this.consent,
            businessType:this.businessType,
            employeeNumber:this.employeeNumber,
            businessInheritance:this.businessInheritance,
            businessDuration:this.businessDuration,
            businessInvestment:this.businessInvestment,
            businessNumber:this.businessNumber
          }
        }
        else if(this.employmentStatus == 'Foreign Employment'){
          surveyData = {
            level:this.level,
            year:this.year,
            completed:this.completed,
            dropoutReason:this.dropoutReason,
            highestEducationLevel:this.highestEducationLevel,
            gender:this.gender,
            location:this.location,
            employmentStatus:this.employmentStatus,
            email:this.email,
            consent:this.consent,
            country:this.country,
            foreignEmploymentDuration:this.feDuration,
            foreignEmploymentIncome:this.feIncome,
            foreignEmploymentWorkdaysNumber:this.feWorkDayNumber,
            foreignEmploymentOvertime:this.feOvertime,
            foreignEmploymentFurtherStay:this.feFurtherStay
          }
        }
        else if(this.employmentStatus == 'Study'){
          surveyData = {
            level:this.level,
            year:this.year,
            completed:this.completed,
            dropoutReason:this.dropoutReason,
            highestEducationLevel:this.highestEducationLevel,
            gender:this.gender,
            location:this.location,
            employmentStatus:this.employmentStatus,
            email:this.email,
            consent:this.consent,
            afterStudy:this.afterStudy,
            dreamJob:this.dreamJob
          }
        }
        else if(this.employmentStatus == 'Housewife'){
          surveyData = {
            level:this.level,
            year:this.year,
            completed:this.completed,
            dropoutReason:this.dropoutReason,
            highestEducationLevel:this.highestEducationLevel,
            gender:this.gender,
            location:this.location,
            employmentStatus:this.employmentStatus,
            email:this.email,
            consent:this.consent,
            houseWifeJobWish:this.housewifeWish
          }
        }
        else if(this.employmentStatus == 'Agriculture'){
          surveyData = {
            level:this.level,
            year:this.year,
            completed:this.completed,
            dropoutReason:this.dropoutReason,
            highestEducationLevel:this.highestEducationLevel,
            gender:this.gender,
            location:this.location,
            employmentStatus:this.employmentStatus,
            email:this.email,
            consent:this.consent,
            agricultureType:this.agricultureType,
            agricultureIncome:this.agricultureIncome
          }
        }
        else if(this.employmentStatus == 'Retired'){
          surveyData = {
            level:this.level,
            year:this.year,
            completed:this.completed,
            dropoutReason:this.dropoutReason,
            highestEducationLevel:this.highestEducationLevel,
            gender:this.gender,
            location:this.location,
            employmentStatus:this.employmentStatus,
            email:this.email,
            consent:this.consent,
            retirementTime:this.retiredTime,
            servieDuration:this.serviceDuration,
            pension:this.pension,
          }
        }
        else{
          surveyData={
            level:this.level,
            year:this.year,
            completed:this.completed,
            dropoutReason:this.dropoutReason,
            highestEducationLevel:this.highestEducationLevel,
            gender:this.gender,
            location:this.location,
            employmentStatus:this.employmentStatus,
            email:this.email,
            consent:this.consent,
          }
        }
      
        console.log("Data is : " + surveyData)
      firebase.firestore().collection('survey').add(surveyData).then(
        ()=>{
          this.router.navigate(['/thank-you']);
        }
      )
      .catch(
        (error)=>{
          console.log("Something went wrong: " + error.message);
        }
      )
    }


    
      
  	//this.router.navigate(['/thank-you']);
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
