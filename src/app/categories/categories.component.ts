/*
import { Component, Injector, OnInit, Signal, inject, runInInjectionContext, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '../categories.service';
import { Categorie } from '../categorie';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

export class CategoriesComponent implements OnInit {

injector = inject(Injector);
categories: Signal<Categorie[] | undefined> = signal(undefined); 
 categoriesList:any
  categObserv!: Observable<Categorie[]>;
  
  constructor(private catServ : CategoriesService){}

  ngOnInit(): void { 

    //sol avec observ
    this.categObserv = this.catServ.getCategories();
    console.log(this.categObserv)

    // sol toSignal
//this.categories = toSignal(this.catServ.getCategoriesSig());

//sol response  de type Signal
 runInInjectionContext(this.injector, async () => { 
    console.log(this.catServ.getCategoriesSig())
    return   this.categories = this.catServ.getCategoriesSig()
     
  });

  //sol tosignal avec type observable
  this.categoriesList = toSignal(this.catServ.getCategories());
  }
 
}
*/
import { Component, Signal, inject, signal,Injector,WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategorieservService} from '../categories.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
/*
 private catserv= inject(CategorieservService)
 categ = toSignal(this.catserv.getcategories());
   ngOnInit(){
     
  }
  */

  injector = inject(Injector);

  private catserv= inject(CategorieservService)

  //read seulement
//categories=toSignal(this.catserv.getCategoriesInt(), { initialValue: undefined });

// read et write
categories:WritableSignal<any[]|[]|undefined> =signal([])

 constructor(){

 this.catserv.getcategories().subscribe(data => {
  this.categories.set(data)
});
 }


 //pour add
nouvcategorie=signal({ 
  nomcategorie: "", 
  imagecategorie: "" })
 
addCateg(){
  this.catserv.addcategorie(this.nouvcategorie()).subscribe((data=>{
 this.categories.update((sc:any) => [this.nouvcategorie(), ...sc]);
  this.nouvcategorie.set({
    nomcategorie: "", imagecategorie: "" });
}))
}

reset(){
  this.nouvcategorie.set({ 
    nomcategorie: "", 
    imagecategorie: "" })
}

}