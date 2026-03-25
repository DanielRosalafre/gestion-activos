import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  submit(): void {
    this.error = '';

    const ok = this.auth.login(this.username, this.password);

    if (!ok) {
      this.error = 'Usuario o contraseña incorrectos';
      return;
    }

    const user = this.auth.getUser();

    if (user.role === 'admin') {
      this.router.navigateByUrl('/');
      return;
    }

    if (user.role === 'employee') {
      this.router.navigateByUrl('/assignments');
      return;
    }

    this.router.navigateByUrl('/');
  }
}