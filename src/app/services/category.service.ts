import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories:{};

 

  constructor(private http:HttpClient) {

    this.getCategories().subscribe(data=>{
      this.categories=data;
      console.log("cat data",this.categories);
    })
   }



public getCategories():Observable<any>{
  return this.http.get("./assets/data/category.json");
}
}
