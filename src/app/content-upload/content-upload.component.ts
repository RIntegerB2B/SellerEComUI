import { Component, OnInit } from '@angular/core';
import { ContentUploadService } from './content-upload.service';
import {ContentUploadViewComponent} from '../content-upload-view/content-upload-view.component';
import {IContent} from '../content-upload/content';
@Component({
  selector: 'app-content-upload',
  templateUrl: './content-upload.component.html',
  styleUrls: ['./content-upload.component.css']
})
export class ContentUploadComponent implements OnInit {
  fileToUpload: File = null;
  fileBase64Value: any;
  fileStream: any;
  fileStreamArray: Array<string> = new Array();
  contents:Array<IContent> = new Array();
  content = new IContent(); 
  check1:any;
  byteArrayConverted : any;
  errorMessage:any;
  constructor(private contentUploadService: ContentUploadService ) {}

  ngOnInit() {
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
        this.check1 = reader.result;
        console.log( this.check1 );
        this.byteArrayConverted = this.convertDataURIToBinary(this.check1);
        console.log( this.byteArrayConverted );
        this.content = new IContent();
     //   _formData.append("Name",  this.fileToUpload.name);
     //   _formData.append("MyFile",  reader.result);
        var byteArray = new Uint8Array(reader.result);
        
       /* this.fileBase64Value = btoa(String.fromCharCode.apply(null, byteArray));
        this.fileStream= "data:" + this.fileToUpload.type + ";base64," + this.fileBase64Value;
        this.fileStreamArray.push(this.fileStream);*/
        this.content.clientId=1;
        this.content.contentData=reader.result;
        this.content.contentDescription="Sample File";
        this.content.fileName=this.fileToUpload.name;
        this.contents.push(this.content);
       // var x ={publishId :1, contentData: this.fileStream, fileName : this.fileToUpload.name};
        
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
        this.content = new IContent();
     //   _formData.append("Name",  this.fileToUpload.name);
     //   _formData.append("MyFile",  reader.result);
        var byteArray = new Uint8Array(reader.result);
        
       /* this.fileBase64Value = btoa(String.fromCharCode.apply(null, byteArray));
        this.fileStream= "data:" + this.fileToUpload.type + ";base64," + this.fileBase64Value;
        this.fileStreamArray.push(this.fileStream);*/
        this.content.clientId=1;
        this.content.contentData=reader.result;
        this.content.contentDescription="Sample File";
        this.content.fileName=this.fileToUpload.name;
        this.contents.push(this.content);
       // var x ={publishId :1, contentData: this.fileStream, fileName : this.fileToUpload.name};
        
      }; 
   
  } 

  uploadFileToActivity() {
      this.contentUploadService.createContent(this.contents[0]).subscribe(data =>
      { 
        console.log(data.lastInsertedValue);
        for(var i =0; i< this.contents.length;i++){
          this.contents[i].contentId=data.lastInsertedValue;
        }
        for(var i =0; i< this.contents.length;i++){
          this.contentUploadService.postFile(JSON.stringify(this.contents[i])).subscribe(data => {
              
          }, error => {
            console.log(error);
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
