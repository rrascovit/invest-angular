import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  constructor(private http: HttpClient) {}

  investmentsUrl = 'http://www.mocky.io/v2/5e76797e2f0000f057986099';

  getInvestmentsList() {
    return this.http.get<any>(this.investmentsUrl);
  }
}
