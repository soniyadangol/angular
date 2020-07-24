import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderComponent } from './leader/leader.component';

const routes: Routes = [
	{
		path: '/leaders',
		component: LeaderComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
	
}
