import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit,OnDestroy {
isloading=false;
private subscription:Subscription;


  constructor(private loaderService:LoaderService) { }
  

  ngOnInit(): void {

    this.subscription=this.loaderService.subjectObservable
    .subscribe((data)=>{
    this.isloading=data.show;
    });
  }

  ngOnDestroy(){
this.subscription.unsubscribe();
}
}
