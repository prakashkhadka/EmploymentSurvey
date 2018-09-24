import { Component } from '@angular/core';
import * as firebase from 'firebase';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService:AuthService){

  }

  	ngOnInit(){
		firebase.initializeApp({
			apiKey: "AIzaSyDAKMVWEONGvKamqT-WntZRI7RlSo4bGmM",
		    authDomain: "emplymentsurvey.firebaseapp.com",
		    databaseURL: "https://emplymentsurvey.firebaseio.com",
		    projectId: "emplymentsurvey",
		    storageBucket: "emplymentsurvey.appspot.com",
		    messagingSenderId: "513797163782"
	});
			this.authService.loginCheck();

	}
}
