import { Component,OnInit, Input, OnChanges }                   from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators , NgForm} from '@angular/forms';
import {ContentService} from '../../contentService';
import {MainCategory} from '../../model/mainCategory.model';
import {HeaderCategory} from '../../model/headerCategory.model';
import {AlertModal} from '../../../shared/alert-modal/alertModal.model';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css']
})
export class MainCategoryComponent implements OnInit {
  headCatSelected:HeaderCategory;
  categoryForm: FormGroup;
  mainCategoryModel : MainCategory;
  headerCategory:HeaderCategory;
  headerCategories : Array<HeaderCategory> = new Array();
  headerCatSelectedData: string;
  alertModal : AlertModal;
  alertModalAdded : AlertModal;
  alertModalError : AlertModal;
  constructor(private fb: FormBuilder, private contentService : ContentService) { }

  ngOnInit() {
    this.createForm();
    this.loadHeaderCategory();
  }

  createForm() {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required ]
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

  loadHeaderCategory():void{
    this.headerCategory= new HeaderCategory();
    this.headerCategory.key=1;
    this.headerCategory.value="Women";
    this.headerCatSelectedData= "Please Select";
    this.headerCategories.push(this.headerCategory);
    this.headerCategory= new HeaderCategory();
    this.headerCategory.key=2;
    this.headerCategory.value="Men";
    this.headerCategories.push(this.headerCategory);
    this.headerCategory= new HeaderCategory();
    this.headerCategory.key=3;
    this.headerCategory.value="Kids";
    this.headerCategories.push(this.headerCategory);
    this.headerCategory= new HeaderCategory();
    this.headerCategory.key=4;
    this.headerCategory.value="Home & Living";
    this.headerCategories.push(this.headerCategory);
    
  }

  categorySubmit(catForm:FormGroup):void  
  {  
    this.mainCategoryModel= new MainCategory();
    this.mainCategoryModel.categoryName=catForm.controls.categoryName.value;
    this.mainCategoryModel.categoryId = this.headCatSelected.key;
    console.log(this.mainCategoryModel); 

    this.contentService.addMainCategory(this.mainCategoryModel).subscribe(data => {
              console.log(data);
              this.alertModalAdded.displayClass = "displayBlock";
        this.alertModal = this.alertModalAdded;
    }, error => {
      this.alertModalError.displayClass = "displayBlock";
        this.alertModal = this.alertModalError;
      console.log(error);
    });

  }

  onHeaderCategoryChange(headCat):void {
    this.headerCatSelectedData= headCat.value;
    this.headCatSelected=headCat;
  }

}
