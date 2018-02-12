import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IContent} from '../content-upload/content';
import { ContentUploadService } from "../content-upload/content-upload.service";

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  contentId : Number;
  errorMessage: any;
  contentDetail : IContent;
  constructor(private route: ActivatedRoute, private contentUploadService : ContentUploadService) { 
    this.route.params.subscribe( params => {
      console.log(params);
      this.contentId = params.contentId;
    });

  }

  ngOnInit() {
    this.getContentDetail();
  }

  getContentDetail(): void {
    this.contentUploadService.getContentDetail(this.contentId).subscribe(contDetail =>
      { 
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

}
