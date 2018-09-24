import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';


@Component({
  selector: 'app-fe-duration',
  templateUrl: './fe-duration.component.html',
  styleUrls: ['./fe-duration.component.css']
})
export class FeDurationComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  }

  goBack(){
  	this.location.back();
  }

}
