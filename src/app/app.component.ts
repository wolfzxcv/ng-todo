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
  display: ITodo[];

  constructor(private fb: FormBuilder) {
    this.forma = this.fb.group({
      title: [null, null, null],
    });
  }

  ngOnInit(): void {
    this.todos = JSON.parse(localStorage.getItem('localStorageTodos')) || [];
    this.display = this.todos;
  }

  setItem(todos) {
    localStorage.setItem('localStorageTodos', JSON.stringify(todos));
  }
  getItem() {
    this.todos = JSON.parse(localStorage.getItem('localStorageTodos')) || [];
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
      this.setItem(this.todos);
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
    this.setItem(this.todos);
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter((x) => x.id !== id);
    this.setItem(this.todos);

    this.display = this.todos;
  }

  displayAll() {
    this.display = this.todos;
  }

  displayActive() {
    this.display = this.todos.filter((x) => x.completed === false);
  }

  displayCompleted() {
    this.display = this.todos.filter((x) => x.completed === true);
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
