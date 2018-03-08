import { Component,OnInit, Input, OnChanges }                   from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators , NgForm} from '@angular/forms';
import {ContentService} from '../../contentService';
import {SubCategory} from '../../model/subCategory.model';
import { MainCategory } from '../../model/mainCategory.model';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  subCategoryForm: FormGroup;
  subCategoryModel : SubCategory;
  mainCategories : MainCategory[];
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

  subCategorySubmit(catForm:FormGroup)  
  {  
    this.subCategoryModel= new SubCategory();
    let mainCatId : number = catForm.controls.mainCategorySelect.value;
    this.subCategoryModel.subCategoryName=catForm.controls.subCategoryName.value;
    console.log(this.subCategoryModel); 
    console.log(mainCatId); 
    this.contentService.addSubCategory(this.subCategoryModel, mainCatId).subscribe(data => {
              console.log(data);
    }, error => {
      console.log(error);
    });

  }

}
