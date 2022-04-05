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
  btnDisabled = true;

  person = {
    name: 'Hugo',
    age: 30,
    avatar: 'https://source.unsplash.com/random'
  };

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const elem = event.target as HTMLElement;

    console.log(elem.scrollTop);
  }

  captureData(event: Event) {
    const element = event.target as HTMLInputElement;

    this.person.name = element.value;
  }
}
