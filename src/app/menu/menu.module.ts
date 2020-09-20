import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { DishDetailModule } from '../dish-detail/dish-detail.module';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
	declarations: [
		MenuComponent,
	],
	imports: [	
		CommonModule,
		DishDetailModule,
		MenuRoutingModule,
	],
	exports: [
		MenuComponent,
	]
})

export class MenuModule {}