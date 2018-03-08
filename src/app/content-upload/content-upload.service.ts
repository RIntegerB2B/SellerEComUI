import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Content} from '../content-upload/content.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {AppSetting}  from '../config/appSetting';


@Injectable()
export class ContentUploadService {
  serviceUrl: string = AppSetting.awsServiceUrl;
  handleContentError(arg0: any): any {
    console.log(arg0);
    let errorContent : Content = new Content();
    errorContent.errorMessage=arg0;
    return errorContent;
  }

  handleError(arg0: any): any {
    console.log(arg0);
    let errorContent : Content = new Content();
    errorContent.errorMessage=arg0;
    return errorContent;
  }
  constructor(private http: Http) { }

  ngOnInit() {
  }

  getNewPublishId(clientId: Number): Observable<any> {
    return this.http.get(this.serviceUrl + "contents/publishId")
        .map((response : Response) => <any>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  createContent(content: Content): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serviceUrl + "contents" , content, options)
        .map((response : Response) => <Content>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleContentError(e));
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
        .map((response : Response) => <Content[]>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
    }

  getContentDetail(publishId : Number) :Observable<any>{

    return this.http.get(this.serviceUrl + "contents/contentDetail/" + publishId)
      .map((response : Response) => <any>response.json())
      .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }
  





}
