import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-highest-education',
  templateUrl: './highest-education.component.html',
  styleUrls: ['./highest-education.component.css']
})
export class HighestEducationComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location: Location) { }

  ngOnInit() {
  }

  goBack(){
  	this.location.back(); // <-- go back to previous location on cancel
  }

}
