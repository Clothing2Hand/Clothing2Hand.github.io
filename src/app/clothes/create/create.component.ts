import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ClothesService } from '../clothes.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/error.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  name: string = ''
  file: any
  options: Array<String> = ["S", "M", "L"]

  get apiError() {
    return this.errorService.apiError
  }

  constructor(private clothesService: ClothesService, private router: Router, private errorService: ErrorService) { }

  createHandler(form: NgForm) {
    if (form.invalid) { return }

    const { type, brand, price, sizeClothing, color, description, imageUrl, contactInfo, adress } = form.value

    this.clothesService.addClothing(type, brand, price, sizeClothing, color, description, imageUrl, contactInfo, adress).subscribe({
      next: (clothing) => {
        this.router.navigate(['/clothes/catalog'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  //-----------------------------------------

  // getFile(event: any) {
  //   console.log(event.target.files[0])
  //   this.file = event.target.files[0]
  // }

  // getName(name: string) {
  //   this.name = name
  //   console.log(this.name)
  // }

  //-------------------------------------------------------
}
