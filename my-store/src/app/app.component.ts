import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Hugo';
  age = 30;
  img = 'https://source.unsplash.com/random';
  btnDisabled = false;

  person = {
    name: 'Hugo',
    age: 30,
    avatar: 'https://source.unsplash.com/random'
  };
}
