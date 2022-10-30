import { filtrosValidos } from './filtro/filtro.actions';
import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.models';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filtro/filtro.reducer';

export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filterReducer,
};
