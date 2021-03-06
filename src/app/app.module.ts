import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { AppCharItemComponent } from './app-char-item/app-char-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    AppCharItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
