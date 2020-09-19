import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users={};
  constructor(private userService:UserService
    ,public productService:ProductService){
    this.userService.getUser().subscribe(data=>{
      console.log("data",data);
      this.users=data;

    });


  }
  ngOnInit(): void {
   
  }

  



}
