import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../contentService';
import { FormArray, FormBuilder, FormGroup, Validators , NgForm} from '@angular/forms';
import {SubCategory} from '../../model/subCategory.model';
import { MainCategory } from '../../model/mainCategory.model';
import  {NavHeaderService} from '../../../shared/nav-header/nav-header.service';
import {Content} from '../../model/mainContent.model';
import {SubContent} from '../../model/subContent.model';
import {AlertModal} from '../../../shared/alert-modal/alertModal.model';

@Component({
  selector: 'app-upload-sub-content',
  templateUrl: './upload-sub-content.component.html',
  styleUrls: ['./upload-sub-content.component.css']
})
export class UploadSubContentComponent implements OnInit {
  alertModal : AlertModal;
  alertModalUploaded : AlertModal;
  alertModalError : AlertModal;
  mainContentSelectedData : string;
  mainContentSelectedId : number;
  currentDateTime : Date= new Date();
  subContent : SubContent = new SubContent();
  fileToUpload: File = null;
  uploadSubContentForm: FormGroup;
  mainContents : Content[];
  constructor(private fb: FormBuilder, private contentService : ContentService,
    private nav: NavHeaderService) { }

  ngOnInit() {
    this.alertModalUploaded = new AlertModal(
      "displayNone",
      "Uploaded",
      "Image Uploaded!"
    );
    this.alertModal = new AlertModal(
      "displayNone",
      "",
      ""
    );
    this.alertModalError = new AlertModal(
      "displayNone",
      "Error",
      "Server Down. Please try after some time"
    );
    this.mainContentSelectedData ="Please Select";
    this.nav.show();
    this.createForm();
    this.getMainContents();
  }

  createForm() {
    this.uploadSubContentForm = this.fb.group({
      subContentName: ['', Validators.required ],
      mainContentSelect: ['']
    });
  }

  getMainContents():void{
    this.contentService.getMainContentIds().subscribe(mainConts =>
      { 
        this.mainContents = mainConts; 
        console.log(this.mainContents);
      },
      error => {
        console.log(<any>error);
      }
    
    );
  }

  onMainContentChange(selectedMainContent) : void {
    this.mainContentSelectedData = selectedMainContent.mainContentName;
    this.mainContentSelectedId = selectedMainContent._id;
  }

  subContentImageUpload(files: FileList) {
    this.fileToUpload = files[0];
    let reader = new FileReader();
    let file = this.fileToUpload;
    reader.readAsDataURL(file);
    reader.onload = () => {
      
      this.subContent.subContentDetailImage=reader.result;
      this.subContent.subContentDescription="Sample File";
      this.subContent.subContentDetailFileName=this.fileToUpload.name;
      this.subContent.createdDate=this.currentDateTime;
    }; 
  }

  uploadSubContentSubmit(subContForm:FormGroup):void{
    this.subContent.subContentName = subContForm.controls.subContentName.value,
    this.contentService.addSubContent(this.subContent, this.mainContentSelectedId).subscribe(response =>
      { 
        this.alertModalUploaded.displayClass = "displayBlock";
        this.alertModal = this.alertModalUploaded;
        this.subContent=new SubContent();
      },
      error => {
        this.alertModalError.displayClass = "displayBlock";
        this.alertModal = this.alertModalError;
        console.log(<any>error);
      }
    
    );
  }
}
