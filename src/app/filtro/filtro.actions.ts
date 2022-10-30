import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

// action action
export const setFilter = createAction(
  '[Filtro] Set Filter',
  props<{ filtro: filtrosValidos }>()
);
