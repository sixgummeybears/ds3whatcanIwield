import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsViewComponent } from './items-view/items-view.component';
import { ItemsViewFilterComponent } from './items-view/items-view-filter/items-view-filter.component';
import { FormsModule } from '@angular/forms';

import bootstrap from "bootstrap";
import { ItemsTableComponent } from './items-view/items-table/items-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsViewComponent,
    ItemsViewFilterComponent,
    ItemsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
