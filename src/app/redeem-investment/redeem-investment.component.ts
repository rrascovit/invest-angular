import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../components/modal.component';

@Component({
  selector: 'app-redeem-investment',
  templateUrl: './redeem-investment.component.html',
  styleUrls: ['./redeem-investment.component.scss'],
})
export class RedeemInvestmentComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  investment: any = {};
  totalValue: number = 0;
  redeemShares: any[] = [];

  ngOnInit(): void {
    this.investment = history.state;
  }

  open(isValid: boolean, msg: string) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.msg = msg;
    modalRef.componentInstance.isValid = isValid;
  }

  validateRedeem() {
    if (this.redeemShares.length === 0 || this.totalValue === 0) {
      const msg = 'Você deve indicar ao menos um valor a resgatar.';
      return this.open(false, msg);
    }

    this.redeemShares.forEach((item) => {
      if (
        item.value >
        (
          (item.acao.percentual * this.investment.saldoTotalDisponivel) /
          100
        ).toFixed(2)
      ) {
        const shareValue = (
          (item.acao.percentual * this.investment.saldoTotalDisponivel) /
          100
        ).toFixed(2);
        const msg = `Valor invalida da ação ${item.acao.nome}, o máximo disponível é ${shareValue}`;
        return this.open(false, msg);
      }
      const msg = 'O valor solicitado estará em sua conta em até 5 dias úteis.';
      return this.open(true, msg);
    });
  }

  onKey(acao: any, event: any) {
    const value = +event.target.value
      .replace(/[^0-9.,]+/, '')
      .replace(/\s/g, '')
      .replace('.', '')
      .replace(',', '.');

    const index = this.redeemShares.findIndex(
      (item) => item.acao.id === acao.id
    );

    if (index >= 0) {
      this.redeemShares[index] = {
        acao,
        value: value,
      };
    } else {
      this.redeemShares.push({
        acao,
        value: value,
      });
    }

    this.calculateTotal();
  }

  calculateTotal() {
    this.totalValue = 0;
    this.redeemShares.forEach((item) => {
      this.totalValue += item.value;
    });
  }
}
