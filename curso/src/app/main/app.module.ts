import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HelloComponent } from './components/hello/hello.component';
import { FrutaComponent } from './components/fruta/fruta.component';

@NgModule({
  declarations: [
    HelloComponent,
    FrutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule { }