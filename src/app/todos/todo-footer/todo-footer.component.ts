import { limpiarTodo } from './../todo.actions';

import { AppState } from './../../app.reducer';

import { filtrosValidos, setFilter } from './../../filtro/filtro.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['todos', 'pendientes', 'completados'];
  pendientes: number = 0;

  constructor(private store: Store<AppState>) {
    // this.store
    //   .select('filtro')
    //   .subscribe((filtro) => (this.filtroActual = filtro));
  
    this.store.subscribe( state  => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado ).length;
    })


  }

  ngOnInit(): void {}

  seleccionarFiltro(filtro: any) {
    this.store.dispatch(setFilter({ filtro: filtro }));
    this.filtroActual = filtro;
  }

  limpiarTodo(){
    this.store.dispatch( limpiarTodo() );
  }
}
