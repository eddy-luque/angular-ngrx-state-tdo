import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.models';
import * as actions from '../todo.actions';
import { AppState } from './../../app.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputItem') inputItem: ElementRef<HTMLInputElement>;

  chkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe((valor) => {
      this.store.dispatch(actions.toogle({ id: this.todo.id }));
    });
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.inputItem.nativeElement.select();
    }, 1);
  }
  terminarEdicion() {
    this.editando = false;
    this.inputItem.nativeElement.blur();
    if (this.txtInput.valid) {
      if (this.todo.texto !== this.txtInput.value) {
        this.store.dispatch(
          actions.editar({ id: this.todo.id, texto: this.txtInput.value })
        );
      }
    }
  }

  quitar() {
    this.store.dispatch(actions.borrar({ id: this.todo.id }));
  }
}
