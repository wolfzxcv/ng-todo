import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() displayAll: EventEmitter<string> = new EventEmitter();
  @Output() displayActive: EventEmitter<string> = new EventEmitter();
  @Output() displayCompleted: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  all() {
    this.displayAll.emit();
  }

  active() {
    this.displayActive.emit();
  }

  completed() {
    this.displayCompleted.emit();
  }
}
