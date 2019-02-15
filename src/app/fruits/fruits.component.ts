import { Component, OnInit } from '@angular/core';
import {Fruits} from '../fruits';
import {Lists} from '../fruitsList';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruit = Lists;
  selectedFruit: Fruits;

  constructor() { }
  ngOnInit() {
  }
    onSelect(selectfruit: Fruits): void {
      this.selectedFruit = selectfruit;
    }
}
