import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asset } from '../models/asset';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(`${this.baseUrl}/assets`);
  }

  createAsset(asset: Asset): Observable<Asset> {
    return this.http.post<Asset>(`${this.baseUrl}/assets`, asset);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}/employees`, employee);
  }

  getAssignments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/assignments`);
  }

  assignAsset(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/assignments`, payload);
  }

  returnAsset(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/assignments/${id}/return`, {});
  }

  getSummary(): Observable<any> {
    return this.http.get(`${this.baseUrl}/reports/summary`);
  }
}
