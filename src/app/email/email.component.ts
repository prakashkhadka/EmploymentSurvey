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
    if(this.surveyService.consent){
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
