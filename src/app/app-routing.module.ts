import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderComponent } from './leader/leader.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'about-us',
		component: AboutUsComponent
	},
	{
		path: 'menu',
		component: MenuComponent
	},
	{
		path: 'leaders',
		component: LeaderComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	},
	{
		path: '',
		redirectTo: '/home', pathMatch: 'full'
	},
	{
		path: 'dish-detail/:id',
		component: DishDetailComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
	
}
