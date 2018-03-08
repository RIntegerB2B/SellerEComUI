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
  selector: 'app-upload-main-content',
  templateUrl: './upload-main-content.component.html',
  styleUrls: ['./upload-main-content.component.css']
})
export class UploadMainContentComponent implements OnInit {
  alertModal : AlertModal;
  alertModalUploaded : AlertModal;
  alertModalError : AlertModal;
  subCatSelectedData:string;
  mainCatSelectedData : string;
  currentDateTime : Date= new Date();
  content : Content = new Content();
  fileToUpload: File = null;
  uploadMainContentForm: FormGroup;
  mainCategories : MainCategory[];
  subCategories : SubCategory[];
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
    this.mainCatSelectedData ="Please Select";
    this.subCatSelectedData ="Please Select";
    this.nav.show();
    this.createForm();
    this.getMainCategories();
    this.getSubCategories(1);
  }

  createForm() {
    this.uploadMainContentForm = this.fb.group({
      mainContentName: ['', Validators.required ],
      mainCategorySelect: [''],
      subCategorySelect:['']
    });
  }

  getMainCategories():void{
    this.contentService.getMainCategory().subscribe(mainCats =>
      { 
        this.mainCategories = mainCats; 
        console.log(this.mainCategories);
      },
      error => {
        console.log(<any>error);
      }
    
    );
  }

  onMainCategoryChange(selectedMainCat) : void {
    this.mainCatSelectedData = selectedMainCat.categoryName
    this.getSubCategories(selectedMainCat._id);
  }

  onSubCategoryChange(selectedSubCat) : void {
    this.subCatSelectedData = selectedSubCat.subCategoryName
  }

  getSubCategories(mainCatSelectedValue: number):void{
    this.contentService.getSubCategory(mainCatSelectedValue).subscribe(subCats =>
      { 
        this.subCategories = subCats; 
        console.log(this.mainCategories);
      },
      error => {
        console.log(<any>error);
      }
    
    );
  }

  mainContentImageUpload(files: FileList) {
    this.fileToUpload = files[0];
    let reader = new FileReader();
    let file = this.fileToUpload;
    reader.readAsDataURL(file);
    reader.onload = () => {
      
      this.content.mainContentImage=reader.result;
      this.content.contentDescription="Sample File";
      this.content.mainContentFileName=this.fileToUpload.name;
      this.content.createdDate=this.currentDateTime;
    }; 
  }

  uploadMainContentSubmit(mainContForm:FormGroup):void{
    this.content.mainContentName = mainContForm.controls.mainContentName.value,
    this.contentService.addMainContent(this.content).subscribe(response =>
      { 
        this.alertModalUploaded.displayClass = "displayBlock";
        this.alertModal = this.alertModalUploaded;
        this.content=new Content();
      },
      error => {
        this.alertModalError.displayClass = "displayBlock";
        this.alertModal = this.alertModalError;
        console.log(<any>error);
      }
    
    );
  }
}
