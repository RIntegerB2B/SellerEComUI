import { Component,OnInit, Input, OnChanges }                   from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators , NgForm} from '@angular/forms';
import {ContentService} from '../../contentService';
import {SubCategory} from '../../model/subCategory.model';
import { MainCategory } from '../../model/mainCategory.model';
import {AlertModal} from '../../../shared/alert-modal/alertModal.model';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  subCategoryForm: FormGroup;
  subCategoryModel : SubCategory;
  mainCategories : MainCategory[];
  mainCatSelectedData : string;
  selectedMainCatId:number;
  alertModal : AlertModal;
  alertModalAdded : AlertModal;
  alertModalError : AlertModal;
  constructor(private fb: FormBuilder, private contentService : ContentService) { }

  ngOnInit() {
    this.createForm();
    this.getMainCategories();
  }

  createForm() {
    this.subCategoryForm = this.fb.group({
      subCategoryName: ['', Validators.required ],
      mainCategorySelect: ''
    });
    this.alertModalAdded = new AlertModal(
      "displayNone",
      "Added",
      "Category Added!"
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
    this.mainCatSelectedData ="Please Select";
  }

  onMainCategoryChange(selectedMainCat) : void {
    this.mainCatSelectedData = selectedMainCat.categoryName;
    this.selectedMainCatId=selectedMainCat._id;
  }

  subCategorySubmit(catForm:FormGroup)  
  {  
    this.subCategoryModel= new SubCategory();
    let mainCatId : number = this.selectedMainCatId;
    this.subCategoryModel.subCategoryName=catForm.controls.subCategoryName.value;
    console.log(this.subCategoryModel); 
    console.log(mainCatId); 
    this.contentService.addSubCategory(this.subCategoryModel, mainCatId).subscribe(data => {
              console.log(data);
              this.alertModalAdded.displayClass = "displayBlock";
        this.alertModal = this.alertModalAdded;
    }, error => {
      console.log(error);
      this.alertModalError.displayClass = "displayBlock";
        this.alertModal = this.alertModalError;
    });

  }

}
