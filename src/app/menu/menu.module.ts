import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { DishDetailModule } from '../dish-detail/dish-detail.module';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		MenuComponent,
	],
	imports: [	
		DishDetailModule,
		CommonModule
	],
	exports: [
		MenuComponent,
	]
})

export class MenuModule {}