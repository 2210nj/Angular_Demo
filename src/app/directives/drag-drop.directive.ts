import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
