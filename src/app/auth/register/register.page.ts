import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Registering user:', this.fullName, this.email);
    // Tambahkan logika registrasi di sini
  }

  goToLogin() {
    this.router.navigate(['/login']); // Navigasi ke halaman login
  }
}
