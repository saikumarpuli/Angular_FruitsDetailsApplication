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
  selectFruit: Fruits;

  constructor() { }
  ngOnInit() {
  }
    onSelect(hero: Fruits): void {
      this.selectFruit = hero;
    }
}
