import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UpdateService } from './update.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UpdateService]

})
export class AppComponent  {
 

  
  constructor(private sw: UpdateService) {
    // check the service worker for updates
    this.sw.checkForUpdates();
  }
  


}
