import { Component } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html'
})

export class MenuComponent {
	dishes: Dish[] = this.dishService.getDishes();

	selectedDish: Dish;

	constructor(
		private dishService: DishService,
	) {
		
	}

	onSelect(dish: Dish) {
		this.selectedDish = dish;
	}
}