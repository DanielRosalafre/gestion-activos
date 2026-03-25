import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  summary: any = {};

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getSummary().subscribe(data => {
      this.summary = data;
    });
  }
}