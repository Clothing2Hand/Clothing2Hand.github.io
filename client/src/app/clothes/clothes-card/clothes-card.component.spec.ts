import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesCardComponent } from './clothes-card.component';

describe('ClothesCardComponent', () => {
  let component: ClothesCardComponent;
  let fixture: ComponentFixture<ClothesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClothesCardComponent]
    });
    fixture = TestBed.createComponent(ClothesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
