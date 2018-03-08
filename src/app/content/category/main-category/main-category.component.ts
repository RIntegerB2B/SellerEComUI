import { Component,OnInit, Input, OnChanges }                   from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators , NgForm} from '@angular/forms';
import {ContentService} from '../../contentService'
import {MainCategory} from '../../model/mainCategory.model'

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css']
})
export class MainCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  mainCategoryModel : MainCategory
  constructor(private fb: FormBuilder, private contentService : ContentService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required ]
    });
  }

  categorySubmit(catForm:FormGroup)  
  {  
    this.mainCategoryModel= new MainCategory();
    this.mainCategoryModel.categoryName=catForm.controls.categoryName.value;
    console.log(this.mainCategoryModel); 

    this.contentService.addMainCategory(this.mainCategoryModel).subscribe(data => {
              console.log(data);
    }, error => {
      console.log(error);
    });

  }

}
