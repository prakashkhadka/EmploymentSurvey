import { Component, OnInit } from '@angular/core';

//import { AuthService } from '../auth/auth.service';

//import { TutorService } from '../auth/tutor.service';

//import { UserSubscribedCourseService } from './user-subscribed-course.service';

//import { CartService } from './cart.service';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  courseIdTitles;
  
  constructor(
    private authService: AuthService, 
    //private tutorService:TutorService,
    //private userSubscribedCourseService:UserSubscribedCourseService,
    //private cartService: CartService
    ) { 
    
  }


  isTutor:boolean = false;
  ngOnInit() { 
  	/*
    this.tutorService.isTutor();
   
    this.tutorService.courseLength.subscribe(
      (length) => {
        //console.log("Course Length :" + length);
        if(length > 0){
          this.isTutor = true;
        }
      }
    )
    this.userSubscribedCourseService.getSubscribedCoursesId();
    */
  }

  

  logout(){
  	//this.authService.logout();
  }

}
