import { Component, OnInit, ViewChild } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, REACTIVE_FORM_DIRECTIVES, ReactiveFormsModule  } from '@angular/forms';
import {MatFormFieldControl} from '@angular/material';

export class Comment {
	author: string;
	comment: any;
}

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
	dish: Dish;
	dishIds: string[];

	prev: string;
	next: string;

	commentForm: FormGroup;
	feedback: Comment;
	rating = {};
	merged = {};
	userFeedBack = [];
	date = [];
	commentDate = [];

	@ViewChild('feedBackForm', {static: false})
	commentFormDirective;

	formErrors = {
		author: '',
		comment: ''
	};

	validationMessages = {
		'author': {
			'required': 'First Name is required.',
	        'maxlength': 'The first Name must be of a maximum length of 30.',
	        'minlength': 'The first author must be minimum 2 characters long.'
		},
		'comment': {
			'required': 'Comment is required.'
		}
	}

	constructor(
		private dishService: DishService,
		private route: ActivatedRoute,
		private location: Location,
		private formBuilder: FormBuilder,
	) { 
		this.createForm();
	}

	ngOnInit() {
		this.dishService.getDishIds()
			.subscribe(dishIds => this.dishIds = dishIds);

		this.route.params.pipe(switchMap((params: Params) => 
			this.dishService.getDish(params['id'])))
			.subscribe(dish => { this.dish = dish; this.setNextPrev(dish.id); });
	}

	setNextPrev(dishId: string) {
		const index = this.dishIds.indexOf(dishId);
		this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
		console.log('prev' + this.prev);
		this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
	}

	back() {
		this.location.back();
	}

	createForm() {
		this.commentForm = this.formBuilder.group({
			author: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
			comment: [null, [Validators.required]]
		})

		this.commentForm.valueChanges
			.subscribe(data => this.onValueChanges(data));

		this.onValueChanges();
	}

	onSlideChange(event) {
		this.rating = event.value;
	}

	onValueChanges(data?: any) {
		if(!this.commentForm) {
			return;
		}

		const comment = this.commentForm;

		for (const field in this.formErrors) {
			if(this.formErrors.hasOwnProperty(field)) {
				this.formErrors[field] = '';
			}
			const control = comment.get(field);
			
			if(control && control.dirty && !control.valid) {
				const errorMsg = this.validationMessages[field];

				for (const key in control.errors) {
					if(control.errors.hasOwnProperty(key)) {
						this.formErrors[field] += errorMsg[key] + '';
					}
				}
			}
		}
	}

	onSubmit() {
		this.feedback = this.commentForm.value;

		this.date = new Date();
		this.commentDate = this.date.toISOString();

		console.log(this.rating);

		this.merged = Object.assign(this.feedback, this.rating);
		console.log(this.merged);

		//this.dish.comments.push(this.feedback);


		//this.userFeedBack.push(this.feedback);
		//this.userFeedBack.push(this.rating);
		//this.userFeedBack.push(this.commentDate);

		//this.commentFormDirective.resetForm();

		//this.dish.comments.push(this.userFeedBack);
		//console.log(this.dish.comments);
	}
}
