import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UserAuth} from "../../shared/model/user-model";
import {AuthService} from "../../service/auth/auth.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Observable} from "rxjs";
import {CookieHelper} from "../../shared/service/cookie.helper";
import {CookieKey} from "../../shared/model/cookie-key";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent {
  isLoginMode = true; // Mode par défaut : Connexion
  authForm: FormGroup;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
  ) {
    this.authForm = this.fb.group({
      userName: [''],
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    });
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    if (this.isLoginMode) {
      this.authForm.removeControl('confirmPassword');
      this.authForm.removeControl('userName');
    } else {
      this.authForm.addControl(
        'userName',
        this.fb.control('', [Validators.required])
      );
      this.authForm.addControl(
        'confirmPassword',
        this.fb.control('', [Validators.required, this.matchPasswords.bind(this)])
      );
    }
  }

  matchPasswords(control: any): { [key: string]: boolean } | null {
    if (this.authForm && control.value !== this.authForm.get('password')?.value) {
      return { mismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.authForm.invalid) {
      return;
    }

    const user : UserAuth = this.authForm.value;
    this.isLoginMode? this.service.login(user) : this.service.signup(user);
  }


}
