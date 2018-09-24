import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SurveyService } from '../survey.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-year-joined',
  templateUrl: './year-joined.component.html',
  styleUrls: ['./year-joined.component.css']
})
export class YearJoinedComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location: Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  invalidDate:boolean = false;
  onSubmit(){
  	//console.log("onCourse");
  	if(this.surveyService.year > 2045 && this.surveyService.year < 2076){
  		this.router.navigate(['/course-completed']);
  		this.isInvalid = false;
  		this.invalidDate = false;
  	}
  	else if(this.surveyService.year < 2046 || this.surveyService.year > 2075){
  		this.isInvalid = true;
  		this.invalidDate = true;
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }



  //years:[number] = [2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058];

}
