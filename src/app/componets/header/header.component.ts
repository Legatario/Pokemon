import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  canShow: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showInput(){
    this.canShow = !this.canShow
  }

  public search(value: string){
    this.emmitSearch.emit(value);
  }

}
