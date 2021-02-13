/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'virat-app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sajan:string;
  constructor() { }

  ngOnInit(): void {
    this.sajan = 'sajan';
  }

}
