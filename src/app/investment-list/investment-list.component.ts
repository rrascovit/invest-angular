import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestmentService } from '../../app/investment.service';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss'],
})
export class InvestmentListComponent implements OnInit {
  constructor(
    private investmentService: InvestmentService,
    private router: Router
  ) {}

  investments: any = [];
  loading: boolean = true;
  showError: boolean = false;

  ngOnInit(): void {
    this.getInvestments();
  }

  getInvestments() {
    this.investmentService.getInvestmentsList().subscribe(
      (res) => {
        this.investments = res.response.data.listaInvestimentos;
        this.loading = false;
      },
      (error: any) => {
        console.log('error', error);
        this.showError = true;
        this.loading = false;
      }
    );
  }

  invDetails(data: any) {
    this.router.navigate(['/redeem-investment'], { state: data });
  }
}
