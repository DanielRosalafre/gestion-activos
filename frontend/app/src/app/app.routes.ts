import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Assets } from './pages/assets/assets';
import { Employees } from './pages/employees/employees';
import { Assignments } from './pages/assignments/assignments';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: '',
    component: Dashboard,
    canActivate: [authGuard]
  },
  {
    path: 'assets',
    component: Assets,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'employees',
    component: Employees,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'assignments',
    component: Assignments,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin', 'employee'] }
  },
  { path: '**', redirectTo: '' }
];