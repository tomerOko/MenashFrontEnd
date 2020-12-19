import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main_service/main.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private main_service: MainService) { }

  ngOnInit(): void {
    console.log("hallow")
  }
}
