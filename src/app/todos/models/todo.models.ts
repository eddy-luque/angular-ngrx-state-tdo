export class Todo {
  // private id: number;
  // private texto: string;
  // private completado: boolean;
  id: number;
  texto: string;
  completado: boolean;

  constructor(texto: string) {
    this.texto = texto;
    // this.id = new Date().getTime();
    this.id = Math.random();
    this.completado = false;
  }
}
