import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {}
  
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
   console.log('Email:', this.email);
   console.log('Password:', this.password);
    // Logika login di sini
    this.router.navigate(['/tabs/tab1']);
  }

  goToForgotPassword() {
    this.router.navigate(['/forgot-password']); // Rute menuju halaman Forgot Password
  }

  goToRegister() {
    this.router.navigate(['/register']); // Rute menuju halaman Register
  }
}
