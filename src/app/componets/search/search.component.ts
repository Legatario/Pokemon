import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() public emmitSearch: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {


  }

  // emitindo informação de input para pokemon-lis

  public search(value: any){
    this.emmitSearch.emit(value)
  }

}
