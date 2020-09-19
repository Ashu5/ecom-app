import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

users={};
 

  constructor(private http:HttpClient) {}



public getUser(){
  return this.http.get(environment.baseURL);
}
}
