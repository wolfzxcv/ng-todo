import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  constructor() {}
  @Input() todo: ITodo;
  @Output() toggleTodo: EventEmitter<string> = new EventEmitter();
  @Output() deleteTodo: EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {}

  markCom(id: string) {
    this.toggleTodo.emit(id);
  }

  removeTodo(id: string) {
    this.deleteTodo.emit(id);
  }
}
