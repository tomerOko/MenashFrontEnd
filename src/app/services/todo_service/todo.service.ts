import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Post } from '../../modules/Todo';
import { Observable } from 'rxjs';

const httpOptions={
  headers: new HttpHeaders({
  'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todoUrl="https://jsonplaceholder.typicode.com/todos";
  todosLimit = '?_limit=10'

  constructor(private http:HttpClient) { }

  getTodo():Observable<Post[]>{
    return this.http.get<Post[]>(this.todoUrl+this.todosLimit);
  }

  deletedTodo(todo:Post):Observable<any>{
    console.log("hallow")
    const url=`${this.todoUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }
}
