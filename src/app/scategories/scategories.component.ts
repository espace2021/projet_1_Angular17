import { Component, Injector, Signal, WritableSignal, effect, inject, runInInjectionContext, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScategoriesService } from '../scategories.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Scategorie } from '../scategorie';
import { Observable, from, of } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scategories',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './scategories.component.html',
  styleUrl: './scategories.component.css'
})
export class ScategoriesComponent {
 
injector = inject(Injector);
 
private scatserv= inject(ScategoriesService)

//Cas http sans ngOnit
scateg = toSignal(this.scatserv.getscategoriesSimple());


//Cas http avec ngOnit  
//scategorie: Signal<Scategorie[] | undefined> = signal(undefined); 
//cas add rendre WritableSignal à la place de Signal
//scategorie:  WritableSignal<Scategorie[] | undefined> = signal(undefined); 
scategorie= signal<any[] | []>([])


//pour add
nouvcategorie=signal({ 
  nomscategorie: "", 
  imagescategorie: "",
  categorieID:"609a83b80c806f32e04bb484" })
  

//une solution 1 d'initialisation pour cas fetch
//scategorieFetch=signal([{"_id":"","nomscategorie":"","imagescategprie":""}])

//une solution 2 d'intialisation en utilsant la classe pour cas fetch
//scategorieFetch:  WritableSignal<Scategorie[] | undefined> = signal(undefined); 

scategorieFetch:  Signal<Scategorie[] | undefined> = signal(undefined); 

  async ngOnInit() {

    //Cas http
    /*
 runInInjectionContext(this.injector, () => {
    effect(() => {
      this.scategorie=toSignal(this.scatserv.getscategories(),
            { initialValue: undefined });
    });
    });
    */

    //avec add ça devient
   
   runInInjectionContext(this.injector, () => {
     const res = toSignal(this.scatserv.getscategoriesSimple(), { initialValue: undefined });
    
       return this.scategorie.set(res()!);
  
  });


  //avec add ça devient et Interval
/*
  runInInjectionContext(this.injector, () => {
    const res = toSignal(this.scatserv.getscategories())
    
    //return this.scategorie.set(res()!);
   
   
    })
  */ 
   
    // ****************** 
    //cas fetch
   // this.scategorieFetch.set(await this.scatserv.getallscategories())
   const observable = from(this.scatserv.getallscategories());
   runInInjectionContext(this.injector, () => {
    this.scategorieFetch = toSignal(observable,
          { initialValue: undefined });
     
  });
}

addScateg(){
 // console.log (this.nouvcategorie());
  this.scatserv.addscategorie(this.nouvcategorie()).subscribe((data=>{
   // console.log(data);
    
   this.scategorie.update((sc) => [this.nouvcategorie(), ...sc]);
    this.nouvcategorie.set({
      nomscategorie: "", imagescategorie: "",
      categorieID: '609a83b80c806f32e04bb484'
    });
}))

}

}
