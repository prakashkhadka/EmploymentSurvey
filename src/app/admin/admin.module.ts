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

import { SurveyMainDataService } from '../admin/admin-dashboard/survey-main-data.service';
import { DropoutReasonService } from '../admin/admin-dashboard/dropout-reason.service';
import { RespondantLocationService } from '../admin/admin-dashboard/respondant-location.service';




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
  	AdminDashboardComponent
  ],
  providers: [
  	AuthService,
  	AuthGuardService,
    SurveyMainDataService,
    DropoutReasonService,
    RespondantLocationService
  ]
})
export class AdminModule { }
