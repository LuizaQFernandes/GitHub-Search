import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaComponent } from './busca/busca.component'
import { HomeComponent } from './home/home.component'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'busca', component: BuscaComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes), HttpClientModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
