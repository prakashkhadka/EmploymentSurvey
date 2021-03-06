import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

import { LoginComponent } from './auth/login/login.component';
import { AdminEntryComponent } from './admin-entry/admin-entry.component';
import { MessageComponent } from './message/message.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



import {NgxChartsModule} from '@swimlane/ngx-charts';

import { SurveyMainDataService } from '../admin/admin-dashboard/adminSharedService/survey-main-data.service';
import { DropoutReasonService } from '../admin/admin-dashboard/adminSharedService/dropout-reason.service';
import { RespondantLocationService } from '../admin/admin-dashboard/adminSharedService/respondant-location.service';
import { HighestEducationLevelService } from '../admin/admin-dashboard/adminSharedService/highest-education-level.service';
import { BusinessInvestmentService } from '../admin/admin-dashboard/adminSharedService/business-investment.service';
import { JobIncomeService } from '../admin/admin-dashboard/adminSharedService/job-income.service';
import { AllRespondantComponent } from './all-respondant/all-respondant.component';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxChartsModule
  ],
  declarations: [
  	LoginComponent,
  	AdminEntryComponent,
  	MessageComponent,
  	AdminDashboardComponent,
  	AllRespondantComponent
  ],
  providers: [
  	AuthService,
  	AuthGuardService,
    SurveyMainDataService,
    DropoutReasonService,
    RespondantLocationService,
    HighestEducationLevelService,
    BusinessInvestmentService,
    JobIncomeService
  ]
})
export class AdminModule { }
