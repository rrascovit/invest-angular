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
  isValid: boolean = true;
  msg: any[] = [];
  isValueValid: boolean = true;

  ngOnInit(): void {
    this.investment = history.state;
  }

  open(isValid: boolean, msg: string[]) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.msg = msg;
    modalRef.componentInstance.isValid = isValid;
  }

  validateRedeem() {
    this.isValid = true;
    this.msg = [];
    if (this.redeemShares.length === 0 || this.totalValue === 0) {
      this.isValid = false;
      this.msg.push({
        id: 0,
        text: 'Você deve indicar ao menos um valor a resgatar.',
      });
      return this.open(this.isValid, this.msg);
    }

    this.isValueValid = this.redeemShares.every(
      (item) =>
        item.value <=
        (
          (item.acao.percentual * this.investment.saldoTotalDisponivel) /
          100
        ).toFixed(2)
    );

    this.createMessage();

    if (this.isValueValid) {
      this.msg.push({
        id: 0,
        text: 'O valor solicitado estará em sua conta em até 5 dias úteis.',
      });
      this.open(this.isValid, this.msg);
    } else {
      this.isValid = false;
      this.open(this.isValid, this.msg);
    }
  }

  createMessage() {
    this.redeemShares.forEach((item) => {
      const shareValue = (
        (item.acao.percentual * this.investment.saldoTotalDisponivel) /
        100
      ).toFixed(2);
      if (item.value > shareValue) {
        this.msg.push({
          id: item.acao.id,
          text: `Valor invalido da ação ${item.acao.nome}, o máximo disponível é ${shareValue}`,
        });
      }
    });
  }

  onKey(acao: any, event: any) {
    const value = +event.target.value
      .replace(/[^0-9.,]+/, '')
      .replace(/\./g, '')
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
