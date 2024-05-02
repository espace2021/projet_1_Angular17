import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CategoriesComponent } from "./categories/categories.component";
import { AddcategorieComponent } from './addcategorie/addcategorie.component';
import { ScategoriesComponent } from './scategories/scategories.component';
import { Categorie2Component } from './categorie2/categorie2.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CategoriesComponent,AddcategorieComponent,ScategoriesComponent,Categorie2Component]
})
export class AppComponent {
  title = 'projet';
}