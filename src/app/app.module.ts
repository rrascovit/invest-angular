import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentListComponent } from './investment-list/investment-list.component';
import { InvestmentService } from './investment.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RedeemInvestmentComponent } from './redeem-investment/redeem-investment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './components/modal.component';
import { NgxMaskModule } from 'ngx-mask';
import { PipesModule } from 'src/pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentListComponent,
    RedeemInvestmentComponent,
    PageNotFoundComponent,
    NgbdModalContent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxMaskModule.forRoot(),
    PipesModule,
  ],
  providers: [InvestmentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
