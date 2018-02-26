import { Component, OnInit } from '@angular/core';
import {Buyer} from '../buyer.model';
import {BuyerAccountService} from '../buyerAccountService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-approval-request',
  templateUrl: './buyer-approval-request.component.html',
  styleUrls: ['./buyer-approval-request.component.css']
})
export class BuyerApprovalRequestComponent implements OnInit {
  buyers:Buyer[];
  
  errorMessage : string;
  constructor(private buyerAccountService : BuyerAccountService, private router : Router) { }

  ngOnInit() {
    this.getBuyerList();
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
        buyer.showDetail=true;
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
    this.buyerAccountService.approveBuyer(buyerData).subscribe(data =>
      { 
        console.log(data);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    
    );

  }
  rejectBuyer(id : number): void {
    let buyerData = new  Buyer();
    buyerData._id=id;
    buyerData.approvedBySeller = 0;
    this.buyerAccountService.approveBuyer(buyerData).subscribe(data =>
      { 
        console.log(data);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    
    );

  }
}
