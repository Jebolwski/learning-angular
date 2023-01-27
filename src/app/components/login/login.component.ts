import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import * as $ from 'jquery';
import { TippyDirective } from '@ngneat/helipopper';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public service: HttpService) {}

  loginform!: FormGroup;
  ngOnInit(): void {
    this.loginform = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(150),
        Validators.minLength(4),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(40),
        Validators.minLength(6),
      ]),
    });
  }

  get username() {
    return this.loginform.get('username');
  }
  get password() {
    return this.loginform.get('password');
  }
}
