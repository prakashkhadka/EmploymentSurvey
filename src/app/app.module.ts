import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationComponent } from './location/location.component';

import { SurveyService } from './survey.service';
import { GenderComponent } from './gender/gender.component';
import { EmployementStatusComponent } from './employement-status/employement-status.component';
import { JobTypeComponent } from './status/job/job-type/job-type.component';
import { YearJoinedComponent } from './year-joined/year-joined.component';
import { CourseComponent } from './course/course.component';
import { HighestEducationComponent } from './highest-education/highest-education.component';
import { JobLevelComponent } from './status/job/job-level/job-level.component';
import { JobOrganisationComponent } from './status/job/job-organisation/job-organisation.component';
import { CountryComponent } from './country/country.component';
import { BusinessTypeComponent } from './status/business/business-type/business-type.component';
import { BusinessComponent } from './status/business/business/business.component';

import { EmployeeNumberComponent } from './status/business/employee-number/employee-number.component';
import { OverseasPurposeComponent } from './overseas-purpose/overseas-purpose.component';
import { ForeignEmployementEntryComponent } from './status/foreign-employment/foreign-employement-entry/foreign-employement-entry.component';
import { FeDurationComponent } from './status/foreign-employment/fe-duration/fe-duration.component';
import { FeIncomeComponent } from './status/foreign-employment/fe-income/fe-income.component';
import { FeWorkdaysNumberComponent } from './status/foreign-employment/fe-workdays-number/fe-workdays-number.component';
import { FeOvertimeComponent } from './status/foreign-employment/fe-overtime/fe-overtime.component';
import { FeOvertimeHoursComponent } from './status/foreign-employment/fe-overtime-hours/fe-overtime-hours.component';

import { MessageService } from './contact-us/message.service';
import { BusinessInheritanceComponent } from './status/business/business-inheritance/business-inheritance.component';
import { BusinessDurationComponent } from './status/business/business-duration/business-duration.component';
import { BusinessInvestmentComponent } from './status/business/business-investment/business-investment.component';
import { BusinessNumberComponent } from './status/business/business-number/business-number.component';
import { FeFurtherstayComponent } from './status/foreign-employment/fe-furtherstay/fe-furtherstay.component';
import { DropoutReasonComponent } from './dropout-reason/dropout-reason.component';
import { AgricultureEntryComponent } from './status/agriculture/agriculture-entry/agriculture-entry.component';
import { AgricultureTypeComponent } from './status/agriculture/agriculture-type/agriculture-type.component';
import { AgricultureIncomeComponent } from './status/agriculture/agriculture-income/agriculture-income.component';
import { ForeignStudyEntryComponent } from './status/foreign-study/foreign-study-entry/foreign-study-entry.component';
import { JobEntryComponent } from './status/job/job-entry/job-entry.component';
import { JobIncomeComponent } from './status/job/job-income/job-income.component';
import { JobOtherActivitiesComponent } from './status/job/job-other-activities/job-other-activities.component';
import { JobSatisfactionComponent } from './status/job/job-satisfaction/job-satisfaction.component';
import { JobChangeComponent } from './status/job/job-change/job-change.component';
import { FutureJobChangeComponent } from './status/job/future-job-change/future-job-change.component';
import { StudyEntryComponent } from './status/study/study-entry/study-entry.component';
import { DreamJobComponent } from './status/study/dream-job/dream-job.component';
import { AfterStudyComponent } from './status/study/after-study/after-study.component';
import { RetiredEntryComponent } from './status/retired/retired-entry/retired-entry.component';
import { RetiredTimeComponent } from './status/retired/retired-time/retired-time.component';
import { ServiceDurationComponent } from './status/retired/service-duration/service-duration.component';
import { RetiredPensionComponent } from './status/retired/retired-pension/retired-pension.component';
import { HousewifeEntryComponent } from './status/housewife/housewife-entry/housewife-entry.component';
import { HousewifeJobwishComponent } from './status/housewife/housewife-jobwish/housewife-jobwish.component';
import { CourseCompletedComponent } from './course-completed/course-completed.component';
import { UnderDevelopmentComponent } from './under-development/under-development.component';
import { EmailComponent } from './email/email.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PurposeComponent } from './purpose/purpose.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { AdminModule } from './admin/admin.module';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    HeaderComponent,
    LocationComponent,
    GenderComponent,
    EmployementStatusComponent,
    JobTypeComponent,
    YearJoinedComponent,
    CourseComponent,
    HighestEducationComponent,
    JobLevelComponent,
    JobOrganisationComponent,
    CountryComponent,
    BusinessTypeComponent,
    BusinessComponent,
    EmployeeNumberComponent,
    OverseasPurposeComponent,
    ForeignEmployementEntryComponent,
    FeDurationComponent,
    FeIncomeComponent,
    FeWorkdaysNumberComponent,
    FeOvertimeComponent,
    FeOvertimeHoursComponent,
    BusinessInheritanceComponent,
    BusinessDurationComponent,
    BusinessInvestmentComponent,
    BusinessNumberComponent,
    FeFurtherstayComponent,
    DropoutReasonComponent,
    AgricultureEntryComponent,
    AgricultureTypeComponent,
    AgricultureIncomeComponent,
    ForeignStudyEntryComponent,
    JobEntryComponent,
    JobIncomeComponent,
    JobOtherActivitiesComponent,
    JobSatisfactionComponent,
    JobChangeComponent,
    FutureJobChangeComponent,
    StudyEntryComponent,
    DreamJobComponent,
    AfterStudyComponent,
    RetiredEntryComponent,
    RetiredTimeComponent,
    ServiceDurationComponent,
    RetiredPensionComponent,
    HousewifeEntryComponent,
    HousewifeJobwishComponent,
    CourseCompletedComponent,
    UnderDevelopmentComponent,
    EmailComponent,
    ThankYouComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    ContactUsComponent,
    PurposeComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  	SurveyService,
  	MessageService,
    {provide:LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
