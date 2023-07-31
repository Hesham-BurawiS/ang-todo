import {Component, Input} from '@angular/core';
import {TodoService} from "../../todo.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(public todoService: TodoService) {}
  @Input() todo?: { id: number; title: string; done: boolean } ;
}
