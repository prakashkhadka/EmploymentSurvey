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

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [
  	LoginComponent,
  	AdminEntryComponent,
  	MessageComponent,
  	AdminDashboardComponent
  ],
  providers: [
  	AuthService,
  	AuthGuardService
  ]
})
export class AdminModule { }
