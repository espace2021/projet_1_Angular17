import { HttpClient } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Observable, concatMap, defer, exhaustMap, interval, map, mergeMap, shareReplay, switchMap, tap, timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {

  api="http://localhost:3001/api/scategories"
  
  private http = inject(HttpClient);
  
 /* getscategories(): Observable<any[]>
  { 
 return this.http.get<any[]>(this.api);
 
  }*/

  getscategoriesSimple(): Observable<any[]>
  { 
 
 return this.http.get<any[]>(this.api)
 
  }


  private intervalTime = 3000; 
 
/*
  getscategories(): Observable<any[]> {
    console.log("INTERVAL / ", defer(() => this.http.get<any[]>(this.api)).pipe(
      mergeMap(() => interval(this.intervalTime).pipe(
        mergeMap(() => this.http.get<any[]>(this.api))
      )),
      shareReplay(1)
    ))
    return  defer(() => this.http.get<any[]>(this.api)).pipe(
      mergeMap(() => interval(this.intervalTime).pipe(
        mergeMap(() => this.http.get<any[]>(this.api))
      )),
      shareReplay(1)
    );
  }
   */

  getscategories(): Observable<any> {

    return interval(this.intervalTime).pipe(
      exhaustMap (() => this.http.get<any[]>(this.api))
    );
  }


  addscategorie(scategorie:any)
  { 
return this.http.post(this.api+'/' , scategorie)

  }

  async getallscategories() {
    return  await fetch(this.api).then(res=>res.json())

  }

 
}
