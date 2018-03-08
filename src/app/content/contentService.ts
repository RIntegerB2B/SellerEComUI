import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {MainCategory} from './model/mainCategory.model';
import {SubCategory} from './model/subCategory.model';
import {Content} from './model/mainContent.model';
import {SubContent} from './model/subContent.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {AppSetting}  from '../config/appSetting';


@Injectable()
export class ContentService {
  serviceUrl: string = AppSetting.awsServiceUrl;
  handleError(arg0: any): any {
    console.log(arg0);
  }
  constructor(private http: Http) { }

  ngOnInit() {
  }

  handleContentError(arg0: any): any {
    console.log(arg0);
    let errorContent : Content = new Content();
    errorContent.errorMessage=arg0;
    return errorContent;
  }
  
  addMainCategory(category: MainCategory): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serviceUrl + "category" , category, options)
        .map((response : Response) => <any>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  addSubCategory(subCategory: SubCategory, mainCatId: number): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serviceUrl + "subCategory/" + mainCatId , subCategory, options)
        .map((response : Response) => <any>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  getMainCategory(): Observable<any> {
    return this.http.get(this.serviceUrl + "category")
        .map((response : Response) => <any>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  getSubCategory(mainCatId : number): Observable<any> {
    return this.http.get(this.serviceUrl + "subCategory/" + mainCatId )
        .map((response : Response) => <any>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  addMainContent(content: Content): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serviceUrl + "content" , content, options)
        .map((response : Response) => <Content>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleContentError(e));
  }

  addSubContent(subContent: SubContent, mainContentId : number): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serviceUrl + "content/" + mainContentId , subContent, options)
        .map((response : Response) => <Content>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleContentError(e));
  }

  getMainContentIds(): Observable<any> {
    return this.http.get(this.serviceUrl + "contentId")
        .map((response : Response) => <any>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

}
