import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent { 

  todos: Todo[];
  localTodos : string | null;

  constructor() {
    this.localTodos = localStorage.getItem("todos");
    if(this.localTodos == null ) {
      this.todos = [
        //  {
        //   id : 1,
        //   name : "TODO_1",
        //   description : "Description Of Todo_01",
        //   active : false
        //  },
        //  {
        //   id : 2,
        //   name : "TODO_2",
        //   description : "Description Of Todo_02",
        //   active : true
        //  },
        //  {
        //   id : 3,
        //   name : "TODO_3",
        //   description : "Description Of Todo_03",
        //   active : true
        //  },
      ]
    } else {
      this.todos = JSON.parse(this.localTodos);
    }
    
  }

  deleteTodo = (todo : Todo) => {

    this.todos.splice(this.todos.indexOf(todo), 1);
    console.log(todo.id + " is deleted");
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo = (todo : Todo) => {

    todo.id = this.todos.length;
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  markAsDone = (todo : Todo) => {

    const index = this.todos.indexOf(todo); 
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
