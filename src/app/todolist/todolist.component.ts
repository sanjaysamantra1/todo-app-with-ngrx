import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteTodo, toggleToDo } from '../actions/actions';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  allToDos: any;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.subscribe((state: any) => {
      console.log('state', state);
      this.allToDos = state.todosReducer;
    });
  }
  deleteTodo(id: number) {
    const actionObj = deleteTodo(id);
    this.store.dispatch(actionObj);
  }
  toggleTodo(id: number) {
    const actionObj = toggleToDo(id);
    this.store.dispatch(actionObj);
  }
}
