import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { AdminEntryComponent } from './admin-entry/admin-entry.component';

import { AuthGuardService } from './auth/auth-guard.service';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
	/*
	{path:'',component:AdminEntryComponent, children:[
		{path:'', component:AdminDashboardComponent},
		{path:'message', component:MessageComponent}
	]},
	*/
	
	{path:'', component:LoginComponent},
	{path:'admin-panel',pathMatch:'prefix',canActivate:[AuthGuardService],component:AdminEntryComponent, children:[
		{path:'', component:AdminDashboardComponent},
		{path:'message', component:MessageComponent}
	]},
	
	
	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
