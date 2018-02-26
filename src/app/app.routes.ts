import { RouterModule, Routes } from '@angular/router';
import { ContentUploadComponent } from './content-upload/content-upload.component';
import { ContentViewComponent } from './content-view/content-view.component';
import {ContentDetailComponent} from './content-detail/content-detail.component';
import {BuyerApprovalRequestComponent} from './buyerAccount/buyer-approval-request/buyer-approval-request.component'
import { BuyerApprovedComponent } from './buyerAccount/buyer-approved/buyer-approved.component';
import { AdminSigninComponent } from './adminAccount/admin-signin/admin-signin.component';


const routes: Routes = [
    { path: 'ContentUpload', component: ContentUploadComponent },
    { path: 'ContentView', component: ContentViewComponent },
    { path: 'ContentDetail/:publishId/:encryptedKey', component: ContentDetailComponent },
    { path: 'Buyer/ApprovalRequest', component: BuyerApprovalRequestComponent },
    { path: 'Buyer/Approved', component: BuyerApprovedComponent },
    { path: 'Login', component: AdminSigninComponent },
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: '**', redirectTo: 'Login', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes);