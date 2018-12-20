import { Injectable } from '@angular/core';
import { Item } from '../item';
import { TextBoxComponent } from '../text-box/text-box.component';
import { ButtonComponent } from '../button/button.component';
import { TableComponent } from '../table/table.component';
import { DropDownComponent } from '../drop-down/drop-down.component';


@Injectable({
  providedIn: 'root'
})
export class DragDropService {

  constructor() { }

  getItems(): Item[] {
    return [
      new Item(TextBoxComponent, {id: 'item-text-box', name: 'TextBox'}),
      new Item(ButtonComponent, {id: 'item-button', name: 'Button'}),
      new Item(TableComponent, {id: 'item-table', name: 'Table'}),
      new Item(DropDownComponent, {id: 'item-dropdown', name: 'Dropdown'}),
    ];
  }
}
