import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {AdminAccount} from './models/adminAccount.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {AppSetting}  from '../config/appSetting';


@Injectable()
export class AdminAccountService {
  serviceUrl: string = AppSetting.awsServiceUrl;
  handleError(arg0: any): any {
    console.log(arg0);
  }
  constructor(private http: Http) { }

  ngOnInit() {
  }


  signIn(admin: AdminAccount): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serviceUrl + "admin" , admin, options)
        .map((response : Response) => <any>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }


}
