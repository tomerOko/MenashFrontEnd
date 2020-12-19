
import { Component, OnInit } from '@angular/core';
import { Street } from 'src/app/models/main_model';
import { MainService } from 'src/app/services/main_service/main.service';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements OnInit {

  get_all_streets_result:Street[]
  create_building_result= []
  create_apartment_result= []
  create_apartment_post_result= []
  create_building_post_result= []
  get_apartments_result= []
  get_apartment_posts_result= []
  get_building_posts_result= []
  get_my_apartment_posts_result= []
  get_my_building_posts_result= []

  constructor(private main_service: MainService) { }


  get_all_streets = () => {
    this.get_all_streets_result=this.main_service.get_all_streets()
  }

  create_building= []
  create_apartment= []
  create_apartment_post= []
  create_building_post= []
  get_apartments= []
  get_apartment_posts= []
  get_building_posts= []
  get_my_apartment_posts= []
  get_my_building_posts= []

  ngOnInit(): void {
  }

}

