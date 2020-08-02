import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
	dish: Dish;

	constructor(
		private dishService: DishService,
		private route: ActivatedRoute,
		private location: Location,
	) { 

	}

	ngOnInit() {
		console.log(this.dish);
		const id = this.route.snapshot.params['id'];
		this.dish = this.dishService.getDish(id);
	}

	back() {
		this.location.back();
	}
}
