/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { GridService } from './grid.service';

@Component({
    selector:'virat-app-grid',
    templateUrl: './grid.component.html',
    styleUrls:['grid.component.scss'],
    providers:[GridService]
})
export class GridComponent implements OnInit,OnChanges{
    title: string
    @Input() headers: [];
    @Input() data: [];
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    @Input() isSearchEnable : boolean = false;
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    @Output() onSortCallBack = new EventEmitter()
    @Output() onSearchCallBack = new EventEmitter()
    
    sortIcon = 'SORT'
    ngOnChanges(changes: SimpleChanges): void {
        if (changes) {
          if (changes['headers'] && changes['headers'].currentValue) {
            this.headers = changes['headers'].currentValue;
          } else if (changes['data'] && changes['data'].currentValue) {
            this.data = changes['data'].currentValue;
          } 
        }
      }

    ngOnInit(){
      
        console.log(this.headers)
        console.log(this.data)
    }

    sort(type){
      if(type === 0){
        this.sortIcon = 'Asa-Sort';
        this.onSortCallBack.emit(type);
      }else if(type === 'asa'){
        this.sortIcon = 'Desc-Sort';
        this.onSortCallBack.emit(type);
      }else{
        this.sortIcon = 'SORT';
        this.onSortCallBack.emit(type);
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    searchKeyWord(){
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const searchBox = document.getElementById('search-box') as HTMLInputElement;
      this.onSearchCallBack.emit(searchBox.value);
    }
}