import { Component } from '@angular/core';
import { MatError, MatFormField, MatLabel, } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [
    MatFormField,
    MatLabel,
    NgIf,
    MatError,
    MatIcon,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
   loginForm: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Handle login logic
    }
  }

  
  gotoDashboard = {
    routepath: 'dashboard'
  }

  onLogins() {
    // Add your auth logic here if needed
    this.router.navigate(['/Bataan-heroes-lamp/dashboard']);
  }
}
