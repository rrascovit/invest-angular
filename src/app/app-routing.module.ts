import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentListComponent } from './investment-list/investment-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RedeemInvestmentComponent } from './redeem-investment/redeem-investment.component';

const routes: Routes = [
  { path: 'investment-list', component: InvestmentListComponent },
  { path: 'redeem-investment', component: RedeemInvestmentComponent },
  { path: '',   redirectTo: '/investment-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
