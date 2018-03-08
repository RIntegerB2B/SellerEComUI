import { RouterModule, Routes } from '@angular/router';
import { ContentUploadComponent } from './content-upload/content-upload.component';
import { ContentViewComponent } from './content-view/content-view.component';
import {ContentDetailComponent} from './content-detail/content-detail.component';
import {BuyerApprovalRequestComponent} from './buyerAccount/buyer-approval-request/buyer-approval-request.component'
import { BuyerApprovedComponent } from './buyerAccount/buyer-approved/buyer-approved.component';
import { AdminSigninComponent } from './adminAccount/admin-signin/admin-signin.component';
import { MainCategoryComponent } from './content/category/main-category/main-category.component';
import { SubCategoryComponent } from './content/category/sub-category/sub-category.component';
import { UploadMainContentComponent } from './content/contentUpload/upload-main-content/upload-main-content.component';
import { UploadSubContentComponent } from './content/contentUpload/upload-sub-content/upload-sub-content.component';


const routes: Routes = [
    { path: 'MainContentUpload', component: UploadMainContentComponent },
    { path: 'SubContentUpload', component: UploadSubContentComponent },
    { path: 'ContentView', component: ContentViewComponent },
    { path: 'ContentDetail/:publishId/:encryptedKey', component: ContentDetailComponent },
    { path: 'Buyer/ApprovalRequest', component: BuyerApprovalRequestComponent },
    { path: 'Buyer/Approved', component: BuyerApprovedComponent },
    { path: 'Category', component: MainCategoryComponent },
    { path: 'SubCategory', component: SubCategoryComponent },
    { path: 'Login', component: AdminSigninComponent },
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: '**', redirectTo: 'Login', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes);