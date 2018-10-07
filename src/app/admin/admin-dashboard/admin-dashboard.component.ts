import { Component, OnInit, OnChanges } from '@angular/core';
//import * as firebase from 'firebase';
//import firestore from 'firebase/firestore';
import { Subject } from 'Rxjs';

import { SurveyMainDataService } from './adminSharedService/survey-main-data.service';
import { RespondantLocationService } from './adminSharedService/respondant-location.service';
import { DropoutReasonService } from './adminSharedService/dropout-reason.service';
import { EmploymentSituationService } from './adminSharedService/employment-situation.service';
import { HighestEducationLevelService } from './adminSharedService/highest-education-level.service';
import { BusinessInvestmentService } from './adminSharedService/business-investment.service';
import { JobIncomeService } from './adminSharedService/job-income.service';


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
  	public employmentSituationService:EmploymentSituationService,
  	public highestEducationLevelService:HighestEducationLevelService,
  	public businessInvestmentService:BusinessInvestmentService,
  	public jobIncomeService:JobIncomeService
  	) { }

  	dropoutData;
  	respondantLocation;
  	jobSituation;
  	highestEducationLevel;
  	businessInvestment;
  	jobIncome

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
	  view:any[] = [800, 500];
	  showLegend = true;
	  colorScheme = {
	    domain: ['red', 'green', 'blue', 'orange', 'purple', 'black', 'brown', 'gold']
	  };
	  showLabels = true;
	  explodeSlices = false;
	  doughnut = false;
	  animation = true;

	  // Vertical Bar Chart

	  // options
	  showXAxis = true;
	  showYAxis = true;
	  gradient = false;
	  legendTitleEmployment= "Emp.Status";
	  legendTitleLocation= "Country of residence";
	  legendTitleDropout="Dropout reasons"
	  legentTitleHeducation ="Highest Education Level"
	  legentTitleBusinessInvestment ="Business Investment"
	  legentTitleJobIncome ="JobIncome"

	  showXAxisLabel = true;
	  xAxisLabelEmployment = 'Employment Status';
	  xAxisLabelLocation = 'Country';
	  xAxisLabelDropout = 'Dropout reason';
	  xAxisLabelHeducation = 'Highest Education Level'
	  xAxisLabelBusinessInvestment = 'Business Investment'
	  xAxisLabelJobIncome = 'Job Income'

	  showYAxisLabel = true;
	  yAxisLabelEmployment = 'No of Ex-students';
	  yAxisLabelLocation = 'No of Ex-students';
	  yAxisLabelDropout = 'No of Ex-students';
	  yAxisLabelHeducation = "No. of Ex-students"
	  yAxisLabelBusinessInvestment = "No. of Ex-students"
	  yAxisLabelJobIncome = "No. of Ex-students"

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

  	this.highestEducationLevelService.educationHighestLevel.subscribe(
	  	(data)=>{
	  		this.highestEducationLevel = data;
	  	}
  	);

  	this.businessInvestmentService.businessInvestment.subscribe(
  		(data)=>{
  			this.businessInvestment = data;
  		}
	)

	this.jobIncomeService.jobIncome.subscribe(
  		(data)=>{
  			this.jobIncome = data;
  		}
	)
  }
}
