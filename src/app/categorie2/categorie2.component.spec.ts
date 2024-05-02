import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorie2Component } from './categorie2.component';

describe('Categorie2Component', () => {
  let component: Categorie2Component;
  let fixture: ComponentFixture<Categorie2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorie2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Categorie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
