import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-content-upload-view',
  templateUrl: './content-upload-view.component.html',
  styleUrls: ['./content-upload-view.component.css']
})
export class ContentUploadViewComponent implements OnInit {
  @Input() filePath: string;
  constructor() { }

  ngOnInit() {
  }

}
