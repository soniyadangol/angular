import { NgModule } from '@angular/core';
import { DishDetailComponent } from './dish-detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		DishDetailComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		DishDetailComponent
	]
})

export class DishDetailModule {}