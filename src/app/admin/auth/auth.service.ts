import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  token;
  isAuthenticated:boolean = false;

  login(email, password){
  	firebase.auth().signInWithEmailAndPassword(email, password).then(
  		(token) => {
  			//console.log("Successful login : " + token);
  			this.router.navigate(['/admin/admin-panel']);
  			return this.token = token;
  		}
	)
	.catch(
		(error) => {
			console.log("Something went wrong : " + error.message);
		}
	)
  }

  loginCheck(){
  	firebase.auth().onAuthStateChanged(
  		(user)=>{
  			if(user){
  				console.log("User is loggedin")
  				this.isAuthenticated = true;
  				this.router.navigateByUrl('/admin/admin-panel');

  			}
  			else{
  				console.log("User is not logged in");
  			}
  		}
	);
  	
  }



  logout(){
  	firebase.auth().signOut().then(
  		(response) => {
  			console.log("You are signed out");
        this.router.navigate(['/']);
  		}
	)
	.catch(
		(error) => {
			console.log("Something went wrong with Sign Out : " + error.message);
		}
	)
  }
}
