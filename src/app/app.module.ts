import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ResultTableComponent } from './components/result-table/result-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
