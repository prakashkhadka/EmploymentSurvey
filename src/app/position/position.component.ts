import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  constructor(public surveyService:SurveyService, private location: Location, private router:Router) { }

  ngOnInit() {
  }
  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.position){
  		this.router.navigate(['/contribution']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack() {
    this.location.back();
  }
}