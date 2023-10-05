import { Component } from '@angular/core';
import { ClothesService } from '../clothes.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  options: Array<String> = ["S", "M", "L"]

  get clothing() {
    return this.clothesService.clothing
  }

  constructor(private clothesService: ClothesService, private router: Router, private activatedRoute: ActivatedRoute) {}

  editeHandler(form: NgForm) {
    if (form.invalid) { return }

    const { type, brand, price, sizeClothing, color, description, imageUrl, contactInfo, adress } = form.value
    const id = this.activatedRoute.snapshot.params['id']

    this.clothesService.editClothing(type, brand, price, sizeClothing, color, description, imageUrl, contactInfo, adress, id).subscribe({
      next: (clothing) => {
        this.router.navigate(['/clothes/' + id])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
