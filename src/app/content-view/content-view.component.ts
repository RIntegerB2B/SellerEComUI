import { Component, OnInit } from '@angular/core';
import {IContentList} from '../content-view/content-view';
import {ContentViewService} from './content-view.service';
import { Observable } from 'rxjs/Observable';
import { ContentUploadService } from "../content-upload/content-upload.service";
import {Content} from '../content-upload/content.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {
  contents: Content[];
  errorMessage: string;
  constructor(private contentUploadService: ContentUploadService ,
    private router: Router) { }

  ngOnInit(): void {
    this.getContents();
  }  
  getContents(): void {
    this.contentUploadService.getContents().subscribe(contDetail =>
      { 
        this.contents = contDetail; 
        console.log(this.contents);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    
    );
    // console.log(this.patientInfo[0].LastName);
  }

  getContentDetail(publishId : Number, encryptedKey : String): void {
      this.router.navigate(['/ContentDetail',publishId, encryptedKey ]);

  }
}
