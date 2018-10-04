import { Component, OnInit, OnChanges } from '@angular/core';
//import * as firebase from 'firebase';
//import firestore from 'firebase/firestore';
import { Subject } from 'Rxjs';

import { SurveyMainDataService } from './survey-main-data.service';
import { RespondantLocationService } from './respondant-location.service';
import { DropoutReasonService } from './dropout-reason.service';
import { EmploymentSituationService } from './employment-situation.service';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(
  	public surveyMainDataService:SurveyMainDataService,
  	public respondantLocationService:RespondantLocationService,
  	public dropoutReasonService:DropoutReasonService,
  	public employmentSituationService:EmploymentSituationService
  	) { }

  	pieChart:boolean = false;
  	barChart:boolean = false;

  	showPieChart(){
  		this.pieChart = true;
  		this.barChart = false;
  	}
  	showBarChart(){
  		this.barChart = true;
  		this.pieChart = false;
  	}

	  //Pie Chart
	  view: any[] = [800, 400];
	  showLegend = true;
	  colorScheme = {
	    domain: ['red', 'green', 'blue', 'orange', 'purple', 'black', 'brown', 'gold']
	  };
	  showLabels = true;
	  explodeSlices = false;
	  doughnut = false;
	  animation = true;
	  lTitle= "Reason of not completing course";

	  dropoutData;
	  respondantLocation;
	  jobSituation;

	  // Vertical Bar Chart
	  //view: any[] = [700, 400];

	  // options
	  showXAxis = true;
	  showYAxis = true;
	  gradient = false;
	  legendTitle= "Emp.Status";
	  //showLegend = true;
	  showXAxisLabel = true;
	  xAxisLabel = 'Employment Status';
	  showYAxisLabel = true;
	  yAxisLabel = 'No of Ex-students';

	  colorSchemeForBarChart = {
	    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	  };
  

  ngOnInit() {
  	this.pieChart = true;
  	this.dropoutReasonService.dReason.subscribe(
	  	(data)=>{
	  		this.dropoutData = data;
	  	}
  	);

  	this.respondantLocationService.respondantLocationData.subscribe(
	  	(data)=>{
	  		this.respondantLocation = data;
	  	}
  	);

  	this.employmentSituationService.employmentSituation.subscribe(
	  	(data)=>{
	  		this.jobSituation = data;
	  	}
  	);
  }
}
