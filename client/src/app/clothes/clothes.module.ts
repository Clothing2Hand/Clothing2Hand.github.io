import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { ClothesRoutingModule } from './clothes-routing.module';
import { CreateComponent } from './create/create.component';
import { ClothesCardComponent } from './clothes-card/clothes-card.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CatalogComponent,
    CreateComponent,
    ClothesCardComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ClothesRoutingModule,
    FormsModule,
    SharedModule,
  ],
  exports : [
    ClothesCardComponent
  ]
})
export class ClothesModule { }
