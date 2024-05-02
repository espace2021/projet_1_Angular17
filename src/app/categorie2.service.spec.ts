import { TestBed } from '@angular/core/testing';

import { Categorie2Service } from './categorie2.service';

describe('Categorie2Service', () => {
  let service: Categorie2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Categorie2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
