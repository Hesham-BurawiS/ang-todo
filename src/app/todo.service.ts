import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: {id: number, title: string, done: boolean}[] = [];
  constructor() { }
  getTodos() {
    return this.todos;
  }
  addTodo(title:string) {
    const newTodo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1: 1,
      title: title,
      done:false
    }
    this.todos.push(newTodo)
  }

  deleteTodo(id?:number) {
    //return if null
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
