import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  summary: any = {};

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getSummary().subscribe(data => {
      this.summary = data;
    });
  }
}
