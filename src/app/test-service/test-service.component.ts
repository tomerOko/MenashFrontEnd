import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { domain } from 'process';
import { Street } from '../modules/street';
import { MainService } from '../services/main_service/main.service';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.scss']
})
export class TestServiceComponent implements OnInit {

  streets:Street[];
  resutl:String="none";

  constructor(private todo_service: MainService) {}


  ngOnInit(): void {
    // let queryString = decodeURI(window.location.search)
    // console.log(queryString);

    // if (queryString.indexOf("connect.sid=") > -1) {

    //   let value=queryString.split("=")[1]
    //   console.log(value)

    //   console.log("============"+JSON.stringify(this.cookie.getAll()))
      // this.router.navigate(['/router'])
    // }
  }

  display_streets(){
    // this.cookie.set("connect.sid","s%3AzvYBPib8g9xURKIW-MbhPNqcn8eEfp15.pi2XyqDIYjfNKmJqNQO34%2BJR351it2butIUtE7T22mE",null,"/","localhost:/3000")
    this.todo_service.get_all_streets().subscribe(data => {
      this.streets=data
      console.log(this.streets)
      this.resutl=JSON.stringify(this.streets)
    })
  }
}
