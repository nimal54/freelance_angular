import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tiles: Tile[] = [

    { text: "One", cols: 3, rows: 2, color: "rgb(245, 245, 234)" },
    { text: "Two", cols: 1, rows: 3, color: "rgb(245, 245, 234)" },
    { text: "Three", cols: 3, rows: 1, color: "rgb(245, 245, 234)" }
  ];
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
  }

}
