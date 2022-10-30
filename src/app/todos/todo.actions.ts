import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crear todo',
  props<{ texto: string }>()
);
export const toogle = createAction(
  '[TODO] Toogle todo',
  props<{ id: number }>()
);
export const editar = createAction(
  '[TODO] Editar todo',
  props<{ id: number; texto: string }>()
);
export const borrar = createAction(
  '[TODO] Eliminar todo',
  props<{ id: number }>()
);
export const seleccionarTodo = createAction(
  '[TODO] Seleccionar todo',
  props<{ estado: boolean }>()
);
export const limpiarTodo = createAction(
  '[TODO] Limpiar todo'
);
