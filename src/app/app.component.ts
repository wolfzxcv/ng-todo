import { Component } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  e: any;
  title = 'ng-todo';

  addTodo(e) {
    e.preventDefault();
    const newTodo = {
      id: uuid.v4(),
      title: this.title,
      completed: false,
    };

    this.title = '';
    console.log(newTodo);
  }
}
