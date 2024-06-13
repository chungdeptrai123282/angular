import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submited:boolean=false;
  formLogin: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder,protected accService:AccountService) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',Validators.required],
    });
  };
  get f(){
    return this.formLogin.controls;
  };
  onLogin():any {
    this.submited=true;
    if(this.formLogin.invalid){return false;}
    this.accService.login(this.formLogin.value).subscribe(res=>{
      localStorage.setItem("token",JSON.stringify(res.token));
    })

  }
}
