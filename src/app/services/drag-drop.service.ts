import { Injectable } from '@angular/core';
import { Item } from '../item';
import { TextBoxComponent } from '../text-box/text-box.component';
import { ButtonComponent } from '../button/button.component';


@Injectable({
  providedIn: 'root'
})
export class DragDropService {

  constructor() { }

  getItems(): Item[] {
    return [
      new Item(TextBoxComponent, {id: 'item-text-box', name: 'TextBox'}),
      new Item(ButtonComponent, {id: 'item-button', name: 'Button'}),
    ];
  }
}
