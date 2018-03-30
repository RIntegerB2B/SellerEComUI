import { Component, OnInit } from '@angular/core';
import { ContentUploadService } from './content-upload.service';
import {ContentUploadViewComponent} from '../content-upload-view/content-upload-view.component';
import {Content} from '../content-upload/content.model';
import * as randKeyGen from 'random-key';
import  {NavHeaderService} from '../shared/nav-header/nav-header.service';

@Component({
  selector: 'app-content-upload',
  templateUrl: './content-upload.component.html',
  styleUrls: ['./content-upload.component.css']
})
export class ContentUploadComponent implements OnInit {
  // TODO: Code Clean Up has to be done
  mainCategories : Array<number>;
  showLoadingImage:string ="none";
  fileToUpload: File = null;
  fileBase64Value: any;
  fileStream: any;
  fileStreamArray: Array<string> = new Array();
  contents:Array<Content> = new Array();
  content = new Content(); 
  check1:any;
  byteArrayConverted : any;
  errorMessage:any;
  currentDateTime : Date= new Date();

  constructor(private contentUploadService: ContentUploadService,  private nav : NavHeaderService ) {}

  ngOnInit() {
    this.nav.show();
  }

    BASE64_MARKER:any = ';base64,';

convertDataURIToBinary(dataURI) {
  var base64Index = dataURI.indexOf(this.BASE64_MARKER) + this.BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for(var i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}

  handleFileInput(files: FileList) {
    this.fileToUpload = files[0];
    //let _formData : FormData = new FormData();
    let reader = new FileReader();
      let file = this.fileToUpload;
      
      reader.readAsDataURL(file);
      reader.onload = () => {
      /*  this.check1 = reader.result;
        console.log( this.check1 );
        this.byteArrayConverted = this.convertDataURIToBinary(this.check1);
        console.log( this.byteArrayConverted );
        this.content = new IContent();
     //   _formData.append("Name",  this.fileToUpload.name);
     //   _formData.append("MyFile",  reader.result);
        var byteArray = new Uint8Array(reader.result); */
        
       /* this.fileBase64Value = btoa(String.fromCharCode.apply(null, byteArray));
        this.fileStream= "data:" + this.fileToUpload.type + ";base64," + this.fileBase64Value;
        this.fileStreamArray.push(this.fileStream);*/
        this.content = new Content();
        this.content.contentImage=reader.result;
        this.content.contentDescription="Sample File";
        this.content.contentFileName=this.fileToUpload.name;
        this.content.createdDate=this.currentDateTime;
        this.contents.push(this.content);
      }; 
   
  } 

  handleFileInputBinary(files: FileList) {
    this.fileToUpload = files[0];
    //let _formData : FormData = new FormData();
    let reader = new FileReader();
      let file = this.fileToUpload;
      
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.check1 = reader.result;
        console.log( this.check1 );
        this.byteArrayConverted = this.convertDataURIToBinary(this.check1);
        console.log( this.byteArrayConverted );
        this.content = new Content();
     //   _formData.append("Name",  this.fileToUpload.name);
     //   _formData.append("MyFile",  reader.result);
        var byteArray = new Uint8Array(reader.result);
        
       /* this.fileBase64Value = btoa(String.fromCharCode.apply(null, byteArray));
        this.fileStream= "data:" + this.fileToUpload.type + ";base64," + this.fileBase64Value;
        this.fileStreamArray.push(this.fileStream);*/
        this.content.contentImage=reader.result;
        this.content.contentDescription="Sample File";
        this.content.fileName=this.fileToUpload.name;
        this.contents.push(this.content);
       // var x ={publishId :1, contentData: this.fileStream, fileName : this.fileToUpload.name};
        
      }; 
   
  } 

  uploadFileToActivity() {
    this.showLoadingImage="block";
      this.contentUploadService.getNewPublishId(1).subscribe(data =>
      { 
        this.showLoadingImage="none";
        console.log(data.publishId);
        for(var i =0; i< this.contents.length;i++){
          this.contents[i].publishId=data.publishId;
        }
        for(var i =0; i< this.contents.length;i++){
          this.contentUploadService.createContent(this.contents[i]).subscribe(data => {
              
          }, error => {
            this.errorMessage = <any>error;
          console.log(this.errorMessage);
          });
        }
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    
    );

    
    
  }

  
}
