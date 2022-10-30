import { filtrosValidos } from './../../filtro/filtro.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { AppState } from './../../app.reducer';
import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  listas: Todo[] = [];
  todoActual: filtrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.select('todos').subscribe((lista) => (this.listas = lista));
    this.store.subscribe(({ todos, filtro }) => {
      this.listas = todos;
      this.todoActual = filtro;
    });
  }
}
