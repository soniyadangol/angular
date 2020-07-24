import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { StudentComponent } from './student/student.component';
import { MenuModule } from './menu/menu.module';
import { DishDetailModule } from './dish-detail/dish-detail.module';
import { LeaderModule } from './leader/leader.module';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    DishDetailModule,
    LeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
