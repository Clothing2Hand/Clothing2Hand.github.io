import { Component, OnInit } from '@angular/core';
import { IClothing } from 'src/app/interfaces';
import { ClothesService } from '../clothes.service';
import { LoaderServiceService } from 'src/app/core/global-loader/loader-service.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  clothes?: IClothing[] = []

  constructor(private clothesService: ClothesService, private loaderService: LoaderServiceService) { }

  ngOnInit(): void {
    this.loaderService.showLoader('Loading..')
    this.clothesService.getAllClothes().subscribe((c) => {
      this.loaderService.hideLoader()
      this.clothes = c
    })
  }
}
