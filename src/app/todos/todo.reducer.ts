import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.models';
// import { crear, editar } from './todo.actions';
import * as actions from './todo.actions';

// export const estadoInicial: Todo[] = [];
export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Iroman'),
  new Todo('Robar escudo del capitan america'),
];
const _todoReducer = createReducer(
  estadoInicial,
  on(actions.limpiarTodo, (state) => state.filter(todo => !todo.completado) ),
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.toogle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
    // return state;
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.seleccionarTodo, (state, { estado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado: estado,
      };
    });
  }),
  on(actions.borrar, (state, { id }) => state.filter((todo) => todo.id !== id))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
