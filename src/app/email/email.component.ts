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
    if(this.surveyService.email && this.surveyService.consent){
      let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
      if(pattern.test(this.surveyService.email)){
        this.surveyService.submit();
      }
      else{
        this.isInvalid = true;
      }
    }
    else if(this.surveyService.consent){
      this.surveyService.email = null;
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
