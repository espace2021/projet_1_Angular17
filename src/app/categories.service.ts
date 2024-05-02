/*
import { Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Categorie } from './categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

apiURL="http://localhost:3001/api/categories";

  constructor(private http: HttpClient) {}

  getCategoriesSig(): Signal<Categorie[] | undefined>  {
    const observable = this.http.get<Categorie[]>(this.apiURL);
    console.log(toSignal(observable));
    return toSignal(observable);
  }

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.apiURL);
  }
}
*/

import { Injectable, inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategorieservService {
  api="http://localhost:3001/api/categories"

  private http = inject(HttpClient);
 
  
  getcategories(): Observable<any[]>
  { 
 return this.http.get<any[]>(this.api);
 
  }
 
  getCategoriesInt(): Observable<any[]> {
   return interval(2000).pipe(
     switchMap(() => this.http.get<any[]>(this.api))
   );
 }
 
 addcategorie(categorie:any)
 { 
 return this.http.post(this.api+'/' , categorie)
 
 }
 
  

}