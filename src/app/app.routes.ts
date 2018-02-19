import { RouterModule, Routes } from '@angular/router';
import { ContentUploadComponent } from './content-upload/content-upload.component';
import { ContentViewComponent } from './content-view/content-view.component';
import {ContentDetailComponent} from './content-detail/content-detail.component';


const routes: Routes = [
    { path: 'ContentUpload', component: ContentUploadComponent },
    { path: 'ContentView', component: ContentViewComponent },
    { path: 'ContentDetail/:publishId/:encryptedKey', component: ContentDetailComponent },
    { path: '', redirectTo: 'ContentUpload', pathMatch: 'full' },
    { path: '**', redirectTo: 'ContentUpload', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes);