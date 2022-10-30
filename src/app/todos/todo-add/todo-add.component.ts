import * as actions from './../todo.actions';
import { AppState } from './../../app.reducer';

import { Store } from '@ngrx/store';

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  textoInput: FormControl;
  constructor(private store: Store<AppState>) {
    this.textoInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}

  asignar() {
    if (this.textoInput.valid) {
      this.store.dispatch(actions.crear({ texto: this.textoInput.value }));
      this.textoInput.reset();
    }
  }
}
