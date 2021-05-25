import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuscaComponent } from './busca/busca.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultadoBuscaComponent } from './resultado-busca/resultado-busca.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscaComponent,
    ResultadoBuscaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
