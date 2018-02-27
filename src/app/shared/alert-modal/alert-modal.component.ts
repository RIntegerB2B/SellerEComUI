import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {AlertModal} from './alertModal.model';
@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {
  @Input() alertModel: AlertModal;
  constructor() { }

  ngOnInit() {
  }

  closeModal(): void {
    this.alertModel.displayClass="displayNone";
  }

}
