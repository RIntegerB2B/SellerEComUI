import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Buyer} from './buyer.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {AppSetting}  from '../config/appSetting';


@Injectable()
export class BuyerAccountService {
  serviceUrl: string = AppSetting.awsServiceUrl;
  handleError(errors: any): any {
    console.log(errors);
  }
  constructor(private http: Http) { }

  ngOnInit() {
      
  }


  getBuyerList() :Observable<any>{

    return this.http.get(this.serviceUrl + "buyer/approvalList/")
      .map((response : Response) => <Buyer[]>response.json())
      .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  getApprovedBuyerList() :Observable<any>{

    return this.http.get(this.serviceUrl + "buyer/approvedList/")
      .map((response : Response) => <Buyer[]>response.json())
      .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  approveBuyer(buyer: Buyer): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serviceUrl + "buyer/approve" , buyer, options)
        .map((response : Response) => <any>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  rejectBuyer(buyer: Buyer): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serviceUrl + "buyer/approve" , buyer, options)
        .map((response : Response) => <any>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

}
