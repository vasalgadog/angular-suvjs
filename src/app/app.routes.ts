import { Routes } from '@angular/router';
import { EncuestaPruebaComponent } from './encuesta-prueba/encuesta-prueba.component';

export const routes: Routes = [
    {path:'encuesta', component:EncuestaPruebaComponent},
    {path:'', redirectTo:'encuesta', pathMatch:'full'}
];
