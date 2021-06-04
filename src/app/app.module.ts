import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FloatingCardComponent } from './floating-card/floating-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FloatingCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
