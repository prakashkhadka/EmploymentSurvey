import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'app';

  	constructor(
  		@Inject(PLATFORM_ID) private platformId: Object,
    	@Inject(APP_ID) private appId: string
	){

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

		onActivate(event: any) {
	    if (isPlatformBrowser(this.platformId)) {
	      let scrollToTop = window.setInterval(() => {
	        let pos = window.pageYOffset;
	        if (pos > 0) {
	          window.scrollTo(0, pos - 50); // how far to scroll on each step
	        } else {
	          window.clearInterval(scrollToTop);
	        }
	      }, 16);
	    }
	  }
}
