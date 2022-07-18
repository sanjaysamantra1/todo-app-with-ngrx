import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo } from '../actions/actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}
  addNewTodo(text: string) {
    const actionObj = addTodo(text);
    this.store.dispatch(actionObj);
  }
}
