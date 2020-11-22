import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/modules/Todo';
import {TodoService} from '../../serives/todo.service'

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  deleted=false

  @Input() componentState:Post

  @Output() DeleteTodo: EventEmitter<Post> = new EventEmitter();

  @HostBinding('class') get classes(){
    let classes={
      "is-complete":this.componentState.completed,
      "deleted":this.deleted
      }
      return classes
  }

  constructor (private todoService:TodoService){}

  ngOnInit(): void {
    console.log(this.componentState)
  }

  containerClasses() {
    return {classA:true}
  }

  onChange(componentState:Post, isChaked: boolean){
    componentState.completed=isChaked
    console.log(isChaked)
    this.todoService.deletedTodo(componentState).subscribe(data => console.log(data))

  }

  onDelete(componentState){
    this.deleted=!this.deleted;
    this.DeleteTodo.emit(componentState)
  }

}
