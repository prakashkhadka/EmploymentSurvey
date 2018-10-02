import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin-entry',
  templateUrl: './admin-entry.component.html',
  styleUrls: ['./admin-entry.component.css']
})
export class AdminEntryComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  	this.authService.loginCheck();
  	console.log("Admin Section envoked");
  }

}
