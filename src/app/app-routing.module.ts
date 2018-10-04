import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { NameComponent } from './name/name.component';
import { YearJoinedComponent } from './year-joined/year-joined.component';
import { CourseComponent } from './course/course.component';
import { CourseCompletedComponent } from './course-completed/course-completed.component';
import { HighestEducationComponent } from './highest-education/highest-education.component';
import { GenderComponent } from './gender/gender.component';
import { LocationComponent } from './location/location.component';
import { CountryComponent } from './country/country.component';
import { OverseasPurposeComponent } from './overseas-purpose/overseas-purpose.component';
import { EmployementStatusComponent } from './employement-status/employement-status.component';

import { JobEntryComponent } from './status/job/job-entry/job-entry.component';
import { JobTypeComponent } from './status/job/job-type/job-type.component';
import { JobOrganisationComponent } from './status/job/job-organisation/job-organisation.component';
import { JobLevelComponent } from './status/job/job-level/job-level.component';
import { JobIncomeComponent } from './status/job/job-income/job-income.component';
import { JobOtherActivitiesComponent } from './status/job/job-other-activities/job-other-activities.component';
import { JobSatisfactionComponent } from './status/job/job-satisfaction/job-satisfaction.component';
import { JobChangeComponent } from './status/job/job-change/job-change.component';
import { FutureJobChangeComponent } from './status/job/future-job-change/future-job-change.component';


import { BusinessComponent } from './status/business/business/business.component';
import { BusinessTypeComponent } from './status/business/business-type/business-type.component';
import { EmployeeNumberComponent } from './status/business/employee-number/employee-number.component';
import { ForeignEmployementEntryComponent } from './status/foreign-employment/foreign-employement-entry/foreign-employement-entry.component';
import { FeDurationComponent } from './status/foreign-employment/fe-duration/fe-duration.component';
import { FeIncomeComponent } from './status/foreign-employment/fe-income/fe-income.component';
import { FeWorkdaysNumberComponent } from './status/foreign-employment/fe-workdays-number/fe-workdays-number.component';
import { FeOvertimeComponent } from './status/foreign-employment/fe-overtime/fe-overtime.component';
import { FeOvertimeHoursComponent } from './status/foreign-employment/fe-overtime-hours/fe-overtime-hours.component';
import { FeFurtherstayComponent } from './status/foreign-employment/fe-furtherstay/fe-furtherstay.component';


import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PurposeComponent } from './purpose/purpose.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { BusinessInheritanceComponent } from './status/business/business-inheritance/business-inheritance.component';
import { BusinessDurationComponent } from './status/business/business-duration/business-duration.component';
import { BusinessInvestmentComponent } from './status/business/business-investment/business-investment.component';
import { BusinessNumberComponent } from './status/business/business-number/business-number.component';
import { DropoutReasonComponent } from './dropout-reason/dropout-reason.component';


import { AgricultureEntryComponent } from './status/agriculture/agriculture-entry/agriculture-entry.component';
import { AgricultureTypeComponent } from './status/agriculture/agriculture-type/agriculture-type.component';
import { AgricultureIncomeComponent } from './status/agriculture/agriculture-income/agriculture-income.component';

import { ForeignStudyEntryComponent } from './status/foreign-study/foreign-study-entry/foreign-study-entry.component';

import { StudyEntryComponent } from './status/study/study-entry/study-entry.component';
import { AfterStudyComponent } from './status/study/after-study/after-study.component';
import { DreamJobComponent } from './status/study/dream-job/dream-job.component';

import { RetiredEntryComponent } from './status/retired/retired-entry/retired-entry.component';
import { RetiredTimeComponent } from './status/retired/retired-time/retired-time.component';
import { ServiceDurationComponent } from './status/retired/service-duration/service-duration.component';
import { RetiredPensionComponent } from './status/retired/retired-pension/retired-pension.component';

import { HousewifeEntryComponent } from './status/housewife/housewife-entry/housewife-entry.component';
import { HousewifeJobwishComponent } from './status/housewife/housewife-jobwish/housewife-jobwish.component';

import { EmailComponent } from './email/email.component';
import { ThankYouComponent } from './thank-you/thank-you.component';



import { UnderDevelopmentComponent } from './under-development/under-development.component';


const appRoutes: Routes = [
  //{path:'', component:CourseComponent},
  {path:'', loadChildren:'./admin/admin.module#AdminModule'},
  //{path:'admin', pathMatch:'prefix', loadChildren:'./admin/admin.module#AdminModule'},
  
  {path:'privacy-policy', component:PrivacyPolicyComponent},
  {path:'terms-conditions', component:TermsConditionsComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'purpose', component:PurposeComponent},
  {path:'about-us', component:AboutUsComponent},


  {path:'year-joined', component: YearJoinedComponent},
  {path:'course', component: CourseComponent},
  {path:'course-completed', component:CourseCompletedComponent},
  {path:'dropout-reason', component:DropoutReasonComponent},
  {path:'highest-education', component:HighestEducationComponent},
  {path:'gender', component: GenderComponent},
  {path:'location', component: LocationComponent},
  {path:'country', component:CountryComponent},
  {path:'overseas-purpose', component:OverseasPurposeComponent},
  {path:'employment-status', component:EmployementStatusComponent},
  {path:'name', component:NameComponent},
  {path:'job', component:JobEntryComponent, children:[
  	{path:'', component:JobTypeComponent},
  	{path:'organisation-type', component:JobOrganisationComponent},
  	{path:'job-level', component:JobLevelComponent},
  	{path:'job-income', component:JobIncomeComponent},
  	{path:'job-other-activities', component:JobOtherActivitiesComponent},
  	{path:'job-satisfaction', component:JobSatisfactionComponent},
  	{path: 'job-change', component:JobChangeComponent},
  	{path: 'future-job-change', component:FutureJobChangeComponent}
  ]},
  
  {path:'business', component:BusinessComponent,children:[
  	{path:'', component:BusinessTypeComponent},
  	{path:'employee-number', component:EmployeeNumberComponent},
  	{path: 'business-inheritance', component: BusinessInheritanceComponent},
  	{path:'business-duration', component:BusinessDurationComponent},
  	{path:'business-investment', component:BusinessInvestmentComponent},
  	{path:'business-number', component:BusinessNumberComponent}
  ]},
  {path:'foreign-employment', component:ForeignEmployementEntryComponent, children:[
  	{path:'', component:FeDurationComponent},
  	{path:'income', component:FeIncomeComponent},
  	{path:'workdays-number', component:FeWorkdaysNumberComponent},
  	{path:'overtime', component:FeOvertimeComponent},
  	{path:'overtime-hours', component:FeOvertimeHoursComponent},
  	{path: 'further-stay', component:FeFurtherstayComponent}
  ]},
  {path:'agriculture', component:AgricultureEntryComponent, children:[
  	{path:'', component:AgricultureTypeComponent},
  	{path:'agriculture-income', component: AgricultureIncomeComponent}
  ]},
  {path:'foreign-study', component:ForeignStudyEntryComponent, children:[
  	
  ]},
  {path:'study', component:StudyEntryComponent, children:[
  	{path:'', component:AfterStudyComponent},
  	{path:'dream-job', component:DreamJobComponent}
  ]},
  {path:'retired', component:RetiredEntryComponent, children:[
  	{path:'', component:RetiredTimeComponent},
  	{path:'service-duration', component:ServiceDurationComponent},
  	{path: 'retired-pension', component:RetiredPensionComponent}
  ]},
  {path:'housewife', component:HousewifeEntryComponent, children:[
  	{path:'', component:HousewifeJobwishComponent}
  ]},
  {path:'email', component:EmailComponent},
  {path:'thank-you', component:ThankYouComponent}


]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
