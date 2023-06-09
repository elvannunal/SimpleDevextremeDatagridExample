import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import {
  DxCheckBoxModule,
  DxDataGridModule,
  DxFormModule,
  DxNumberBoxModule,
  DxSelectBoxModule,
  DxTextBoxModule
} from "devextreme-angular";
import { NewAccountComponent } from './new-account/new-account.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxFormModule,
    MatButtonModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
