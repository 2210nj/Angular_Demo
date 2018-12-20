import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-helper]'
})
export class HelperDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
