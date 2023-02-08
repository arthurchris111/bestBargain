import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class apiService {
  constructor(private http: HttpClient) {}

  url = '';
  newsHeader() {
    return this.http.get<any>(this.url);
  }
}
