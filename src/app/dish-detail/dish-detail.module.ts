import { NgModule } from '@angular/core';
import { DishDetailComponent } from './dish-detail.component';
import { CommonModule } from '@angular/common';
import { DishDetailRoutingModule } from './dish-detail-routing.module';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		DishDetailComponent
	],
	imports: [
		CommonModule,
		DishDetailRoutingModule,
		MatSliderModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		DishDetailComponent
	]
})

export class DishDetailModule {}