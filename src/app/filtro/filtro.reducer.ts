import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFilter } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer(
  initialState,
  on(setFilter, (state, { filtro }) => filtro)
);

export function filterReducer(state, action) {
  return _filtroReducer(state, action);
}
