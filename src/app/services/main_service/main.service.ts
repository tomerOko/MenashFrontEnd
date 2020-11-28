import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apartment_post } from 'src/app/modules/apartment_post';
import { Street } from 'src/app/modules/street';
import { Post } from 'src/app/modules/Todo';

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

  slags = {
    domain: "http://localhost:3000",
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

  constructor(private http: HttpClient) {}

  get_all_streets(): Observable < Street[] > {
    return this.http.post < Street[] > (this.slags.domain + this.slags.get_all_streets, "", httpOptions)
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

  create_building_post(buildingId:string, apartmentId:string, post_data:apartment_post): Observable < any > {
    return this.http.post < any > (this.slags.domain + this.slags.create_building_post, "", httpOptions)
  }

  get_apartments(): Observable < any > {
    return this.http.post < any > (this.slags.domain + this.slags.get_apartments, "", httpOptions)
  }

  get_apartment_posts(): Observable < any > {
    return this.http.post < any > (this.slags.domain + this.slags.get_apartment_posts, "", httpOptions)
  }

  get_building_posts(): Observable < any > {
    return this.http.post < any > (this.slags.domain + this.slags.get_building_posts, "", httpOptions)
  }

  get_my_apartment_posts(): Observable < any > {
    return this.http.post < any > (this.slags.domain + this.slags.get_my_apartment_posts, "", httpOptions)
  }

  get_my_building_posts(): Observable < any > {
    return this.http.post < any > (this.slags.domain + this.slags.get_my_building_posts, "", httpOptions)
  }

}
