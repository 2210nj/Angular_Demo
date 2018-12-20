import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  data: Item;
  constructor() { }

  ngOnInit() {
  }

}
