import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import cookie from '../serives/cookie';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.scss']
})
export class TestServiceComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let queryString = window.location.search;
    queryString = decodeURI(queryString)
    console.log(queryString);
    if (queryString.indexOf("connect.sid=") > -1) {
      console.log(queryString.split("=")[1])
      cookie.cookie_value = queryString.split("=")[1]
      this.router.navigate(['/router'])
    }
  }
}
