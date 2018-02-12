import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';



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

@NgModule({
  declarations: [
    AppComponent,
    ContentUploadComponent,
    ContentViewComponent,
    ContentUploadViewComponent,
    HeaderComponent,
    NavHeaderComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    Routing
  ],
  providers: [
    ContentUploadService,
    ContentViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
