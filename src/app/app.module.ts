import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { StudentComponent } from './student/student.component';

import { PromotionService } from './services/promotion.service';
import { DishService } from './services/dish.service';
import { LeaderService } from './services/leader.service';

import { LeaderModule } from './leader/leader.module';
import { MenuModule } from './menu/menu.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DishDetailModule } from './dish-detail/dish-detail.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    StudentComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DishDetailModule,
    LeaderModule,
    MenuModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
