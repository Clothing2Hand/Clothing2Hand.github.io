import { Component, Input } from '@angular/core';
import { IClothing } from 'src/app/interfaces';


@Component({
  selector: 'app-clothes-card',
  templateUrl: './clothes-card.component.html',
  styleUrls: ['./clothes-card.component.css']
})
export class ClothesCardComponent {
  @Input() clothing!: IClothing
}
