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

  formErrors = {
    firstName: '',
    lastName: '',
    telNum: '',
    email: ''
  };

  validationMessages = {
      'firstName' : {
        'required': 'First Name is required.',
        'maxlength': 'The first Name must be of a maximum length of 2.',
        'minlength': 'The first name must be minimum 25 characters long.'
      },
      'lastName' : {
        'required': 'Last Name is required.',
        'maxlength': 'The first Name must be of a maximum length of 2.',
        'minlength': 'The first name must be minimum 25 characters long.'
      },
      'telNum' : {
        'required': 'Telephone number is required',
        'pattern': 'The telephone number must be in numeric value.'
      },
      'email' : {
        'required': 'Email is required.',
        'email': 'Email is not in a valid format.'
      }
  };

  constructor(
  	private formBuilder: FormBuilder
  ) {
  		this.createForm();
	}

  ngOnInit() {
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
      telNum: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contactType: 'None',
      message: ''
    })

    this.contactForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
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
  onValueChanged(data?: any) {
    if (!this.contactForm) { return; }

    const form = this.contactForm;

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';

        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}
