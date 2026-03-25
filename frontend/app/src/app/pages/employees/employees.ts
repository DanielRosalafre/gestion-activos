import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees implements OnInit {
  employees: Employee[] = [];

  form: Employee = {
    fullName: '',
    email: '',
    department: ''
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.api.getEmployees().subscribe(data => this.employees = data);
  }

  save(): void {
    this.api.createEmployee(this.form).subscribe(() => {
      this.form = {
        fullName: '',
        email: '',
        department: ''
      };
      this.loadEmployees();
    });
  }
}