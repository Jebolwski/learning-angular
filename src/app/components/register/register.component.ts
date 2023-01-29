import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerform!: FormGroup;

  constructor(private service: HttpService) {}
  ngOnInit(): void {
    this.registerform = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(150),
        Validators.minLength(4),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(40),
        Validators.minLength(6),
      ]),
      password_again: new FormControl('', [
        Validators.required,
        Validators.maxLength(40),
        Validators.minLength(6),
      ]),
    });
  }

  register(data: any): void {
    data['language'] = 'en';
    this.service.registerUser(data);
  }

  get username(): any {
    return this.registerform.get('username');
  }
  get email(): any {
    return this.registerform.get('email');
  }
  get password(): any {
    return this.registerform.get('password');
  }
  get password_again(): any {
    return this.registerform.get('password_again');
  }
}
