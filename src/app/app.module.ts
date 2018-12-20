import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { ButtonComponent } from './button/button.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { HelperDirective } from './directives/helper.directive';

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    TextBoxComponent,
    ButtonComponent,
    DragDropDirective,
    HelperDirective,
  ],
  entryComponents: [ TextBoxComponent, ButtonComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
