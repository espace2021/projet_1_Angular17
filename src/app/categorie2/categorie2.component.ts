import { Component, Injector, Signal, WritableSignal, effect, inject, runInInjectionContext, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categorie2Service } from '../categorie2.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Scategorie } from '../scategorie';
import { Observable, Subscription, from, interval, of, takeWhile } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorie2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './categorie2.component.html',
  styleUrl: './categorie2.component.css'
})
export class Categorie2Component {

  injector = inject(Injector);
 
  private catserv= inject(Categorie2Service)

categories= signal<any[] | []>([])
categoriess : any[] = [];

//pour add
nouvcategorie=signal({ 
  nomcategorie: "", 
  imagecategorie: ""})

  interval = 0;

  async ngOnInit() {

 /*
   runInInjectionContext(this.injector, () => {
    this.catserv.getCategories().subscribe((categories) => {
      const res = toSignal(categories, { initialValue: undefined });
      
      return this.categories.set(res()!);
    });
  
  });
*/

const source = interval(2000).pipe(
  takeWhile(() => { return true })
);
const subscription = source.subscribe(
  (x) => {
    this.interval = x;
    console.log(`child interval: ${x}`)
  },
  function (err) {
    console.log('Error: ' + err);
  },
  function () {
    console.log('Completed');
  });

 }

  addCateg(){
   
     this.catserv.addcategorie(this.nouvcategorie()).subscribe((data=>{
      // console.log(data);
       
      this.categories.update((sc) => [this.nouvcategorie(), ...sc]);
       this.nouvcategorie.set({
         nomcategorie: "", imagecategorie: ""
       });
   }))
   
   }

}
