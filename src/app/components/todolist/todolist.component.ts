import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  markCom() {
    console.log('markCom');
  }

  removeTodo() {
    console.log('removeTodo');
  }
}
