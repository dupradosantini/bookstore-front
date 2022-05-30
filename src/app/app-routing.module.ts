import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path:"", //quando o path for vazio, carrega o home component.
    component: HomeComponent
  },
  {
    path:"categorias", // quando o endpoint for categorias, renderiza pra mim o compoenente tal
    component: CategoriaReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
