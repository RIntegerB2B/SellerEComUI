import { Component, OnInit } from '@angular/core';
import {Buyer} from '../buyer.model';
import {BuyerAccountService} from '../buyerAccountService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-approved',
  templateUrl: './buyer-approved.component.html',
  styleUrls: ['./buyer-approved.component.css']
})
export class BuyerApprovedComponent implements OnInit {
  buyers:Buyer[];
  
  errorMessage : string;
  constructor(private buyerAccountService : BuyerAccountService, private router : Router) { }

  ngOnInit() {
    this.getApprovedBuyerList();
  }

  getApprovedBuyerList(): void {
    this.buyerAccountService.getApprovedBuyerList().subscribe(buyerList =>
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

}
