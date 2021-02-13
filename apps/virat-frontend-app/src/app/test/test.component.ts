/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'virat-app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title:string;
  constructor() { } 

  ngOnInit(): void {
    this.title = 'sajan'
  }

}
