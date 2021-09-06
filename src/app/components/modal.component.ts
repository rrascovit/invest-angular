import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './modal.component.html',
})
export class NgbdModalContent {
  @Input() msg: any;
  @Input() isValid: any;

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private router: Router
  ) {}

  successMessage: string = 'Resgate efetuado com sucesso!';
  errorMessage: string = 'Erro na tentativa de resgate!';

  success() {
    this.router.navigate(['/investment-list']);
    this.modalService.dismissAll();
  }
}
