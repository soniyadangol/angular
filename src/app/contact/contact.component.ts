import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatFormFieldControl} from '@angular/material';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	
	contactForm: FormGroup;
	feedback: Feedback;
	contactType = ContactType;

	@ViewChild('feedbackForm', {static: false}) feedbackFormDirective;

  constructor(
  	private formBuilder: FormBuilder
  ) {
  		this.createForm();
	}

  ngOnInit() {
  }

  createForm() {
  	this.contactForm = this.formBuilder.group({
  		firstName: ['', Validators.required],
  		lastName: ['', Validators.required],
  		telNum: ['', Validators.required],
  		email: ['', Validators.required],
  		agree: false,
  		contactType: 'None',
  		message: ''
  	})
  }

  onSubmit() {
  	this.feedback = this.contactForm.value;
  	console.log(this.feedback);
  	this.contactForm.reset({
  		firstName: '',
		lastName: '',
  		telNum: '',
  		email: '',
  		agree: false,
  		contactType: 'None',
  		message: ''
  	});
  	this.feedbackFormDirective.resetForm();
  }
}
