import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

private subject=new Subject<any>();
subjectObservable=this.subject.asObservable();

showLoader(){
  this.subject.next({show:true});
}

hideLoader(){
  this.subject.next({show:false});
}
  constructor() { }
}
