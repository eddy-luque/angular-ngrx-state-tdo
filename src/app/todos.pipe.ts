import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from './filtro/filtro.actions';
import { Todo } from './todos/models/todo.models';

@Pipe({
  name: 'todosFiltro',
})
export class TodosPipe implements PipeTransform {
  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case 'completados':
        return todos.filter((todo) => todo.completado);
      case 'pendientes':
        return todos.filter((todo) => !todo.completado);
      default:
        return todos;
    }
  }
}
