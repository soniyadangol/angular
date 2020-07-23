import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  inputvariable = 'hi i m parent';

  getData(value) {
    console.log(value); 
  }

}
