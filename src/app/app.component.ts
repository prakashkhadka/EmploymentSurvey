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
			apiKey: "AIzaSyCcZwmDvZ7O0wbNqrwizzNA6PXKZ2Dd_tA",
		    authDomain: "employmentsurvey-a609b.firebaseapp.com",
		    databaseURL: "https://employmentsurvey-a609b.firebaseio.com",
		    projectId: "employmentsurvey-a609b",
		    storageBucket: "employmentsurvey-a609b.appspot.com",
		    messagingSenderId: "916251257418"
		});
		
		
	}
}
