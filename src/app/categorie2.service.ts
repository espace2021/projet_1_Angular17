import { HttpClient } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Observable, concatMap, defer, exhaustMap, interval, map, mergeMap, shareReplay, switchMap, tap, timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Categorie2Service {

  constructor() { }

  api="http://localhost:3001/api/categories"
  
  private http = inject(HttpClient);
  
 getcategoriesSimple(): Observable<any[]>
  { 
 return this.http.get<any[]>(this.api);
 
  }


  getCategories(): Observable<any[]> {
    return interval(3000).pipe(
      switchMap(() => this.http.get<any[]>(this.api))
    );
  }

  addcategorie(categorie:any)
  { 
return this.http.post(this.api+'/' , categorie)

  }
}


