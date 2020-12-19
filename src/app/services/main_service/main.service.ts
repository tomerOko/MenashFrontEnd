import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {login_status, Street, apartment_post, building_post} from './../../models/main_model'

const httpOptions={
  headers: new HttpHeaders({
  'content-type':'application/json'
  }),
  withCredentials: true
  }

@Injectable({
  providedIn: 'root'
})

export class MainService {

  private streets;

  private slags = {
    domain: "http://localhost:3000",
    check:"/ensureAuth",
    get_all_streets: "/getAllStreets",
    create_building: "/createBuilding",
    create_apartment: "/createApartment",
    create_apartment_post: "/createApartmentPost",
    create_building_post: "/createBuildingPost",
    get_apartments: "/getApartments",
    get_apartment_posts: "/getApartmentPosts",
    get_building_posts: "/getBuildingPosts",
    get_my_apartment_posts: "/getMyApartmentPosts",
    get_my_building_posts: "/getMyBuildingPosts",
  }

  constructor(private http: HttpClient, private router : Router) {}


  check(){
    // this.http.get < login_status > (this.slags.domain + this.slags.check, httpOptions).subscribe(data => {
    //   console.log(data)
    //   console.log("loged")
    //   if(data.authenticated){
    //     console.log("loged in")
    //     this.router.navigate([route])
    //   }
    // })
    return this.http.get<login_status>(this.slags.domain + this.slags.check, httpOptions)
  }

  check_boolean(){

  }


  get_all_streets(): Street[] {
    this.http.post < Street[] > (this.slags.domain + this.slags.get_all_streets, "", httpOptions).subscribe(data => {
      return data;
    })
    return null
    // return this.http.post < Street[] > (this.slags.domain + this.slags.get_all_streets, "", httpOptions)
  }

  create_building(streetId:string, buildingName:string): Observable <any> {
    return this.http.post <any> (this.slags.domain + this.slags.create_building, {"buildingName":buildingName, "streetId":streetId}, httpOptions)
  }

  create_apartment(streetId:string, buildingId:string , apartmentName:string ): Observable < any > {
    return this.http.post < any > (this.slags.domain + this.slags.create_apartment, {"streetId":streetId, "buildingId":buildingId, "apartmentName":apartmentName }, httpOptions)
  }

  create_apartment_post(apartmentId:string, post_data:apartment_post): Observable < any > {
    return this.http.post < any > (this.slags.domain + this.slags.create_apartment_post, {"apartmentId":apartmentId, "startYear":post_data.startYear ,  "endYear":post_data.endYear , "apartamentText":post_data.apartamentText , "rank":post_data.rank , "rentCost":post_data.rentCost , "heshbonot": post_data.heshbonot}, httpOptions)
  }

  create_building_post(buildingId:string, apartmentId:string, post_data:building_post): Observable < any > {
    return this.http.post < any > (this.slags.domain + this.slags.create_building_post,{"buildingId":buildingId, "apartmentId":apartmentId, "startYear":post_data.startYear ,  "endYear":post_data.endYear , "levelOfStudents":post_data.levelOfStudents , "buildingText":post_data.buildingText , "buildingRank":post_data.buildingRank}, httpOptions)
  }

  get_apartments(buildingId:string): Observable < any > {
    return this.http.post < any > (this.slags.domain + this.slags.get_apartments, {"buildingId":buildingId}, httpOptions)
  }

  get_apartment_posts(apartmentId:string): Observable < any > {
    return this.http.post < any > (this.slags.domain + this.slags.get_apartment_posts, {"apartmentId":apartmentId}, httpOptions)
  }

  get_building_posts(buildingId:string): Observable < any > {
    return this.http.post < any > (this.slags.domain + this.slags.get_building_posts, {"buildingId":buildingId}, httpOptions)
  }

  get_my_apartment_posts(): Observable < any > {
    return this.http.post < any > (this.slags.domain + this.slags.get_my_apartment_posts, {}, httpOptions)
  }

  get_my_building_posts(): Observable < any > {
    return this.http.post < any > (this.slags.domain + this.slags.get_my_building_posts, {}, httpOptions)
  }

}
