import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Post } from 'src/app/modules/Todo';
import { TodoService } from 'src/app/serives/todo.service';
// import {Post} from "../../modules/Todo"
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Post[];

  constructor(private todoSerivce:TodoService) {}

  ngOnInit(): void {
    this.todoSerivce.getTodo().subscribe(data =>{
      this.todos=data
      console.log(data)
    })
  }

  deleteTodo( state: Post ){
    console.log(state)
    this.todos.filter(cell => cell.id !== state.id)
    this.todoSerivce.deletedTodo(state).subscribe();
  }

}