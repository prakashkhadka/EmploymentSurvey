import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location, private router:Router) { }

  
  isInvalid:boolean = false;

  ngOnInit() {
  }

 

  onSubmit(){
  	/*
  	let pattern = new RegExp("^(?=.*[A-Z])(?=.*[0-9])");
  	
  	if(pattern.test(this.surveyService.email)){
      this.isInvalid = false;
      //console.log("Password inalid");
    }
  	 
    if(this.surveyService.consent){

      	this.surveyService.submit();


    }
    else{
      this.isInvalid = true;
    }
    */

    if(this.surveyService.email && this.surveyService.consent){
    	//console.log(this.surveyService.email);
    	//let pattern = new RegExp("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$");
    	let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    	if(pattern.test(this.surveyService.email)){
    		console.log("email passed");
	    	this.surveyService.submit();
	    }
	    else{
	    	console.log("Couldn't pass regex");
	    	this.isInvalid = true;
	    }
    }
    else if(this.surveyService.consent){
    	console.log("can go")
		this.surveyService.submit();
    }
    else{
    	this.isInvalid = true;
    }
  }



  goBack(){
  	this.location.back();
  }

  
  

}
