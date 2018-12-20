import { Component, OnInit, Input,ViewChild, ComponentFactoryResolver } from '@angular/core';
import { empty } from 'rxjs';

import { DragDropService } from '../services/drag-drop.service';
import { Item } from '../item';
import { TextBoxComponent } from '../text-box/text-box.component';

import { DragDropDirective } from '../directives/drag-drop.directive';
import { DraggableComponent } from './draggablecomponent';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {
  //@ViewChild(DragDropDirective) dragDropHost: DragDropDirective;
  //@ViewChild(TextBoxDirective) dragdropHost: TextBoxDirective;
  @ViewChild(DragDropDirective) adHost: DragDropDirective;
  counter: number = 1;
  draggedItemId: string;
  components: DraggableComponent[];
  items: Item[];
  selectedItem: Item;


  constructor(private componentFactoryResolver: ComponentFactoryResolver, private dragDropService: DragDropService ) { 
    this.components = [
      {id: 'item-text-box',itemName: 'Text Box', index: 0}
      ,{id: 'item-button',itemName: 'Button', index: 1}
    ];
  }
  
  ngOnInit() {
    this.items = this.dragDropService.getItems();
  }

  createComponent(dragItem) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(dragItem.component);
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<TextBoxComponent>componentRef.instance).data = dragItem.data;
  }

  allowDrop(event) {
    event.preventDefault();
  }

  drag(event) {
    this.draggedItemId = event.target.id;
  }

  drop(event) {
    event.preventDefault();
    for(let i = 0; i< this.items.length; i++)
    {
      if(this.draggedItemId == this.items[i].data.id)
      {
        this.selectedItem = this.items[i];
        this.createComponent(this.selectedItem);
        return;
      }
    }
  }
}
