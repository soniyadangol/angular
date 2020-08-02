import { NgModule } from '@angular/core';
import { DishDetailComponent } from './dish-detail.component';
import { CommonModule } from '@angular/common';
import { DishDetailRoutingModule } from './dish-detail-routing.module';

@NgModule({
	declarations: [
		DishDetailComponent
	],
	imports: [
		CommonModule,
		DishDetailRoutingModule
	],
	exports: [
		DishDetailComponent
	]
})

export class DishDetailModule {}