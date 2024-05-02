import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-addcategorie',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addcategorie.component.html',
  styleUrl: './addcategorie.component.css'
})
export class AddcategorieComponent {
  
  nouvcategorie=signal({ 
    nomcategorie: "", 
    imagecategorie: "" })

   nom1=signal("").set("");

   
   
    nom=signal("")

    changeName(value:any){
      this.nom.set(value);
    }

    imagecategorie=signal("")
    nomcategorie=signal("")
    /*
    updateUser(field: string, value: string) {
      this.nouvcategorie.update((data) => ({ ...data, [field]: value }));
    }
    */
    reset() {
      this.nouvcategorie.set({ nomcategorie:"",imagecategorie:"" });
    }

    addCateg(){ 
      console.log (this.nouvcategorie().nomcategorie);
      console.log (this.nouvcategorie().imagecategorie);
    }
}


  