import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent {

  title : string = "";
  description : string = "";

  @Output()
  addTodoEmitter : EventEmitter<Todo> = new EventEmitter();

  constructor() {

  }

  onSubmit() {
      console.log(this.title);
      console.log(this.description);

      if(this.title !== "" && this.description !== "") {
        const todo : Todo = {
          id : 0,
          name : this.title,
          description : this.description,
          active : true
        }

        this.addTodoEmitter.emit(todo);
      }
      this.title = "";
      this.description = "";
  }

}
