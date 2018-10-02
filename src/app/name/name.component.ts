import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor(public surveyService: SurveyService, private location:Location, private router:Router) { }
  
  noName:string;
  isInvalid:boolean = false;

  ngOnInit() {
    if(this.surveyService.firstname == '' && this.surveyService.lastname == ''){
      this.noName = "noName";
    }
  }

  resetName(){
    if(this.noName){
        this.surveyService.firstname = '';
        this.surveyService.lastname = '';
    }
    else{

    }
  }

  
  onSubmit(){
    if(this.surveyService.firstname && this.surveyService.lastname || this.noName){
      this.router.navigate(['/email']);
    }
    else{
      this.isInvalid = true;
    }
  }

    goBack(){
      this.location.back();
    }
  }

