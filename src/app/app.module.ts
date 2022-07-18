import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { myStore } from './store/store';

@NgModule({
  declarations: [AppComponent, TodolistComponent, AddTodoComponent],
  imports: [BrowserModule, myStore],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
