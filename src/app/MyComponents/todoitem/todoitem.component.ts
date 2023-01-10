import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent {

  @Input()
  todo : Todo;

  @Output()
  todoDeleter : EventEmitter<Todo> = new EventEmitter();

  @Output()
  todoDone : EventEmitter<Todo> = new EventEmitter();

  onDeleteClicked = () => {
    this.todoDeleter.emit(this.todo);
  }

  markAsDone = () => {
    this.todoDone.emit(this.todo);
  }
}
