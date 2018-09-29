import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location: Location, private router:Router) { }

  ngOnInit() {
  }
  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.level){
  		this.router.navigate(['/year-joined']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack() {
    this.location.back();
  }

}
