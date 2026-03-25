import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-assignments',
  imports: [CommonModule, FormsModule],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css'
})
export class Assignments implements OnInit {
  assignments: any[] = [];
  assets: any[] = [];
  employees: any[] = [];

  form = {
    assetId: '',
    employeeId: '',
    assignedAt: '',
    notes: ''
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.api.getAssignments().subscribe(data => this.assignments = data);
    this.api.getAssets().subscribe(data => this.assets = data);
    this.api.getEmployees().subscribe(data => this.employees = data);
  }

  save(): void {
    const payload = {
      assetId: Number(this.form.assetId),
      employeeId: Number(this.form.employeeId),
      assignedAt: this.form.assignedAt,
      notes: this.form.notes
    };

    this.api.assignAsset(payload).subscribe(() => {
      this.form = {
        assetId: '',
        employeeId: '',
        assignedAt: '',
        notes: ''
      };
      this.loadAll();
    });
  }

  returnAsset(id: number): void {
    this.api.returnAsset(id).subscribe(() => this.loadAll());
  }
}