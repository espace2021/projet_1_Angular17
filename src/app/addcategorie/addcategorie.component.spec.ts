import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcategorieComponent } from './addcategorie.component';

describe('AddcategorieComponent', () => {
  let component: AddcategorieComponent;
  let fixture: ComponentFixture<AddcategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcategorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
