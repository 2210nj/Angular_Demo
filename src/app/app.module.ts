import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { ButtonComponent } from './button/button.component';
import { HelperDirective } from './directives/helper.directive';
import { TableComponent } from './table/table.component';
import { DropDownComponent } from './drop-down/drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    TextBoxComponent,
    ButtonComponent,
    HelperDirective,
    TableComponent,
    DropDownComponent,
  ],
  entryComponents: [ TextBoxComponent, ButtonComponent, TableComponent, DropDownComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
