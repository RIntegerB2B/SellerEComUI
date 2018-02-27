import { Component, OnInit } from '@angular/core';
import {Buyer} from '../buyer.model';
import {BuyerAccountService} from '../buyerAccountService';
import { Router } from '@angular/router';
import {AlertModal} from '../../shared/alert-modal/alertModal.model';

@Component({
  selector: 'app-buyer-approval-request',
  templateUrl: './buyer-approval-request.component.html',
  styleUrls: ['./buyer-approval-request.component.css']
})
export class BuyerApprovalRequestComponent implements OnInit {
  buyers:Buyer[];
  showApproveSpinner:boolean=false;
  errorMessage : string;
  alertModal : AlertModal;
  alertModalApproved : AlertModal;
  alertModalRejected : AlertModal;
  alertModalError : AlertModal;
  constructor(private buyerAccountService : BuyerAccountService, private router : Router) { }

  ngOnInit() {
    this.getBuyerList();
    this.alertModalError = new AlertModal(
      "displayNone",
      "Error",
      "Server Down. Please try after some time"
    );
    this.alertModalApproved = new AlertModal(
      "displayNone",
      "Aproved",
      "Buyer Approved!"
    );
    this.alertModalRejected = new AlertModal(
      "displayNone",
      "Rejected",
      "Buyer Rejected!"
    );
    this.alertModal = new AlertModal(
      "displayNone",
      "",
      ""
    );
  }
  getBuyerList(): void {
    this.buyerAccountService.getBuyerList().subscribe(buyerList =>
      { 
        this.buyers = buyerList; 
        console.log(this.buyers);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    
    );
  }

  showBuyerDetail(id : number): void {
    this.buyers.forEach(function(buyer: Buyer){
      if(buyer._id==id){
        buyer.showDetail=!buyer.showDetail;
      }
      else{
        buyer.showDetail=false;
      }
    });

  }

  approveBuyer(id : number): void {
    let buyerData = new  Buyer();
    buyerData._id=id;
    buyerData.approvedBySeller = 1;
    this.showApproveSpinner=true;
    this.buyerAccountService.approveBuyer(buyerData).subscribe(data =>
      { 
        this.showApproveSpinner=false;
        this.alertModalApproved.displayClass = "displayBlock";
        this.alertModal = this.alertModalApproved;
        console.log(data);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
        this.alertModalError.displayClass = "displayBlock";
        this.alertModal = this.alertModalError;
      }
    
    );

  }
  rejectBuyer(id : number): void {
    let buyerData = new  Buyer();
    buyerData._id=id;
    buyerData.approvedBySeller = 0;
    this.buyerAccountService.approveBuyer(buyerData).subscribe(data =>
      { 
        this.alertModalRejected.displayClass = "displayBlock";
        this.alertModal = this.alertModalRejected;
        console.log(data);
      },
      error => {
        this.errorMessage = <any>error;
        this.alertModalError.displayClass = "displayBlock";
        this.alertModal = this.alertModalError;
        console.log(this.errorMessage);
      }
    
    );

  }
}
