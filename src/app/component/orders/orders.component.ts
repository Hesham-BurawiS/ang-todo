import { Component } from '@angular/core';
import {TodoService} from "../../todo.service";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  newTodoTitle = '';
  constructor(public todoService: TodoService) {}
  addTodo() {
    this.todoService.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
}
  deleteTodo(id:number) {
    this.todoService.deleteTodo(id);
  }
}
