import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {IContent} from '../content-upload/content';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class ContentUploadService {
  handleError(arg0: any): any {
    return false;
  }
  constructor(private http: Http) { }

  ngOnInit() {
  }

  createContent(content: IContent): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://ec2-13-127-168-120.ap-south-1.compute.amazonaws.com:4200/contents" , content, options)
        .map((response : Response) => <any>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  postFile(fileToUpload: any): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
      return this.http.post("http://ec2-13-127-168-120.ap-south-1.compute.amazonaws.com:4200/contents/contentDetail", fileToUpload, options)
      .map((response : Response) => <any>response.json())
      .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  getContents(): Observable<any> {
    return this.http.get("http://ec2-13-127-168-120.ap-south-1.compute.amazonaws.com:4200/contents")
        .map((response : Response) => <IContent[]>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
    }

  getContentDetail(contentId : Number) :Observable<any>{

    return this.http.get("http://ec2-13-127-168-120.ap-south-1.compute.amazonaws.com:4200/contents/contentDetail/" + contentId)
      .map((response : Response) => <any>response.json())
      .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }
  





}
