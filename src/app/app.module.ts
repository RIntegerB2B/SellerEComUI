import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { ContentUploadComponent } from './content-upload/content-upload.component';
import { ContentUploadService } from './content-upload/content-upload.service';
import { ContentViewService } from './content-view/content-view.service';
import { ContentViewComponent } from './content-view/content-view.component';
import { ContentUploadViewComponent } from '../app/content-upload-view/content-upload-view.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavHeaderComponent } from './shared/nav-header/nav-header.component';
import { Routing } from './app.routes';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { BuyerApprovalRequestComponent } from './buyerAccount/buyer-approval-request/buyer-approval-request.component';
import {BuyerAccountService} from './buyerAccount/buyerAccountService';
import { BuyerApprovedComponent } from './buyerAccount/buyer-approved/buyer-approved.component';
import { AdminSigninComponent } from './adminAccount/admin-signin/admin-signin.component';
import  {AdminAccountService} from './adminAccount/adminAccount.service';
import  {NavHeaderService} from './shared/nav-header/nav-header.service';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { MainCategoryComponent } from './content/category/main-category/main-category.component';
import { SubCategoryComponent } from './content/category/sub-category/sub-category.component';
import {ContentService} from './content/contentService';
import { UploadMainContentComponent } from './content/contentUpload/upload-main-content/upload-main-content.component';
import { UploadSubContentComponent } from './content/contentUpload/upload-sub-content/upload-sub-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentUploadComponent,
    ContentViewComponent,
    ContentUploadViewComponent,
    HeaderComponent,
    NavHeaderComponent,
    ContentDetailComponent,
    BuyerApprovalRequestComponent,
    BuyerApprovedComponent,
    AdminSigninComponent,
    AlertModalComponent,
    MainCategoryComponent,
    SubCategoryComponent,
    UploadMainContentComponent,
    UploadSubContentComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    Routing,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot()
  ],
  providers: [
    ContentUploadService,
    ContentViewService,
    BuyerAccountService,
    AdminAccountService,
    NavHeaderService,
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
