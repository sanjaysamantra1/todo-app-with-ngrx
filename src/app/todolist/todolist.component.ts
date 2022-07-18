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
  deleteMyTodo(id: number) {
    const actionObj = deleteTodo(id); // action creator
    this.store.dispatch(actionObj);
  }
  toggleMyTodo(id: number) {
    const actionObj = toggleToDo(id); // action creator
    this.store.dispatch(actionObj);
  }
}
