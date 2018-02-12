import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {IContentList} from '../content-view/content-view';


@Injectable()
export class ContentViewService {
  
  constructor(private http: Http) { }

  ngOnInit() {
  }
  
   getContents(): Observable<any> {
    return this.http.get("http://localhost:3000/contents")
        .map((response : Response) => <IContentList[]>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
    }

 /*postSample(newContent : IContentDetail): Observable<any>{
  let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
  });
  let options = new RequestOptions({ headers: headers });
  return this.http.post("http://localhost:3000/contentDetail", JSON.stringify(newContent), options)
  .map((response : Response) => <IContentDetail[]>response.json())
  .do((x) => console.log(x)).catch((e) => this.handleError(e));
 }*/

 handleError(arg0: any): any {
  return arg0;
 }


}
