import { Component } from "@angular/core";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { NgIf } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import { Router } from "@angular/router";
import { routes } from "../../app.routes";

@Component({
  selector: "app-login-page",
  imports: [
    MatFormField,
    MatLabel,
    NgIf,
    MatError,
    MatIcon,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onLogin() {
  if (this.loginForm.valid) {
    console.log(this.loginForm.value);

    this.showSuccessToast();

    setTimeout(() => {
      this.router.navigate(["Bataan-heroes-lamp", "dashboard"]);
    }, 1500);  // navigate after 1.5 seconds
  }
}

  showSuccessToast() {
  this.snackBar.open('Login Successful!', 'Close', {
    duration: 1500, 
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: ['success-snackbar'] // optional custom class for styling
  });
}

  gotoDashboard = {
    routepath: "dashboard",
  };

}
