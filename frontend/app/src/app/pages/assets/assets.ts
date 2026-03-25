import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Asset } from '../../models/asset';

@Component({
  selector: 'app-assets',
  imports: [CommonModule, FormsModule],
  templateUrl: './assets.html',
  styleUrl: './assets.css'
})
export class Assets implements OnInit {
  assets: Asset[] = [];

  form: Asset = {
    code: '',
    name: '',
    category: '',
    serialNumber: '',
    location: '',
    purchaseDate: '',
    purchaseValue: 0,
    status: 'AVAILABLE'
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadAssets();
  }

  loadAssets(): void {
    this.api.getAssets().subscribe(data => this.assets = data);
  }

  save(): void {
    this.api.createAsset(this.form).subscribe(() => {
      this.form = {
        code: '',
        name: '',
        category: '',
        serialNumber: '',
        location: '',
        purchaseDate: '',
        purchaseValue: 0,
        status: 'AVAILABLE'
      };
      this.loadAssets();
    });
  }
}