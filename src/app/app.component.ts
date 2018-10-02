import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'app';

  	constructor(){

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
		
	}
}
