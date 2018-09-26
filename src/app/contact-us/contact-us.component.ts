import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from './message.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  ngOnInit() {
  }

  onSendMessage(form:NgForm){
  	this.messageService.sendMessage(form.value);
  }

}
