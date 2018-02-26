import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IContent} from '../content-upload/content';
import { ContentUploadService } from "../content-upload/content-upload.service";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  showLoadingImage:string ="none";
  publishId : number;
  encryptedKey :string;
  errorMessage: any;
  contentDetail : IContent;
  constructor(private route: ActivatedRoute, private contentUploadService : ContentUploadService 
    , private sanitizer:DomSanitizer) { 
    this.route.params.subscribe( params => {
      console.log(params);
      this.publishId = params.publishId;
      this.encryptedKey = "whatsapp://send?text=http://sellerecombuyerproduct.s3-website.ap-south-1.amazonaws.com/?value=" + params.encryptedKey
    });

  }

  ngOnInit() {
    this.getContentDetail();
  }

  getContentDetail(): void {
    this.showLoadingImage="block";
    this.contentUploadService.getContentDetail(this.publishId).subscribe(contDetail =>
      { 
        this.showLoadingImage="none";
        this.contentDetail = contDetail; 
        console.log(this.contentDetail);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    
    );
    // console.log(this.patientInfo[0].LastName);
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  

}
