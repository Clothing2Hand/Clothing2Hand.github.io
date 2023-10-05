import { Component } from '@angular/core';
import { LoaderServiceService } from './loader-service.service';

@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.css']
})
export class GlobalLoaderComponent {

constructor(public service: LoaderServiceService){}
}
