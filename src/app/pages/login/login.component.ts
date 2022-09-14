import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router  } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup
  constructor(private fb: FormBuilder, private _login: LoginService, private route: Router) {

  }

  initform() {
    this.formLogin = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
  }
  login() {
    this._login.login(this.formLogin.value).subscribe((res: any) => { 
      console.log(res)
      localStorage.setItem('token', res.token);
      this.route.navigate(['home'])
    })
    

  }

  ngOnInit(): void {
    this.initform()
  }

}
