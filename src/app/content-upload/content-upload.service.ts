import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {IContent} from '../content-upload/content';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {AppSetting}  from '../config/appSetting';


@Injectable()
export class ContentUploadService {
  serviceUrl: string = AppSetting.local3000ServiceUrl;
  handleError(arg0: any): any {
    return false;
  }
  constructor(private http: Http) { }

  ngOnInit() {
  }

  getNewPublishId(clientId: Number): Observable<any> {
    return this.http.get(this.serviceUrl + "contents/publishId/" + clientId)
        .map((response : Response) => <any>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  createContent(contents: IContent): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serviceUrl + "contents" , contents, options)
        .map((response : Response) => <any>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  postFile(fileToUpload: any): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
      return this.http.post(this.serviceUrl + "contents/contentDetail", fileToUpload, options)
      .map((response : Response) => <any>response.json())
      .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  getContents(): Observable<any> {
    return this.http.get(this.serviceUrl + "contents/1")
        .map((response : Response) => <IContent[]>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
    }

  getContentDetail(publishId : Number) :Observable<any>{

    return this.http.get(this.serviceUrl + "contents/contentDetail/" + publishId)
      .map((response : Response) => <any>response.json())
      .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }
  





}
