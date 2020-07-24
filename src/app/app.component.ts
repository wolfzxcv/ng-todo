import { Component } from '@angular/core';
import * as uuid from 'uuid';
import { ITodo } from './models/todo';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  forma: FormGroup;
  todos: ITodo[];

  constructor(private fb: FormBuilder) {
    this.forma = this.fb.group({
      title: [null, null, null],
    });
  }

  ngOnInit(): void {
    this.todos = [
      {
        id: 'what-you-wanna-be',
        title: 'Todo one',
        completed: false,
      },
    ];
  }

  get title() {
    return this.forma.get('title').value;
  }

  addTodo() {
    if (this.title && this.title.trim().length > 3) {
      const newTodo = {
        id: uuid.v4(),
        title: this.title,
        completed: false,
      };
      this.todos.push(newTodo);
      this.forma.reset();
    } else if (this.title && this.title.trim().length <= 3) {
      alert('please add more than 3 letters');
    }
  }
  toggleTodo(id: string) {
    this.todos = this.todos.map((x) => {
      if (x.id === id) {
        x.completed = !x.completed;
      }
      return x;
    });
  }
  deleteTodo(id: string) {
    this.todos = this.todos.filter((x) => x.id !== id);
  }

  /***
   * The Great Escape
   * In   4
   *      4
   * V1  12
   * PC1  4
   * C1  12
   * B1   4
   * V2  12
   * B2   4
   * C2  12
   *      8
   * B3   8
   * C3   8
   *      1
   *     16
   *      4
   *      8
   *      4
   */
}
