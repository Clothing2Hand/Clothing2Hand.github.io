import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { AppUsernameDirective } from './validators/username.directive';
import { MinMaxDirective } from './validators/minMax.directive';
import { ShortenPipe } from './shorten.pipe';
import { UrlDirective } from './validators/url.directive';



@NgModule({
  declarations: [
    SpinnerComponent,
    AppUsernameDirective,
    MinMaxDirective,
    ShortenPipe,
    UrlDirective
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SpinnerComponent,
    AppUsernameDirective,
    MinMaxDirective,
    ShortenPipe,
    UrlDirective
  ]
})
export class SharedModule { }
