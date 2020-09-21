import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  email:string;
  password:string;
  returnUrl: string;


  constructor( private formBuilder: FormBuilder,private router: Router
    ,private userService:UserService,private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
 
  }
  
  
  
  get f() { return this.loginForm.controls; }

  onSubmit(){
  this.submitted = true;
  if (this.loginForm.invalid) {
    return;
}

this.userService.getUser(this.f.username.value)
.subscribe((response) => {
  localStorage.setItem('user', this.f.username.value);
},
  (err) => console.log(err)
);

}

}
