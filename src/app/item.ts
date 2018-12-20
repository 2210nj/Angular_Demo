import { Type } from '@angular/core';

export class Item {
   constructor(public component: Type<any>, public data: any) {}
// constructor( public data: any) {}
}