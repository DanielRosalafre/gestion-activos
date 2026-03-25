import { Injectable } from '@angular/core';

type UserRole = 'admin' | 'employee' | 'viewer';

interface AppUser {
  username: string;
  password: string;
  role: UserRole;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: AppUser[] = [
    {
      username: 'admin',
      password: 'admin123',
      role: 'admin',
      name: 'Administrador'
    },
    {
      username: 'empleado',
      password: 'empleado123',
      role: 'employee',
      name: 'Empleado'
    },
    {
      username: 'consulta',
      password: 'consulta123',
      role: 'viewer',
      name: 'Consulta'
    }
  ];

  login(username: string, password: string): boolean {
    const user = this.users.find(
      u => u.username === username && u.password === password
    );

    if (!user) {
      return false;
    }

    localStorage.setItem('user', JSON.stringify(user));
    return true;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  getUser(): any {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  hasRole(roles: UserRole[]): boolean {
    const user = this.getUser();
    return !!user && roles.includes(user.role);
  }
}