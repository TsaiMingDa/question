import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  // @Output() chooseGroup = new EventEmitter<any>();
  // @Output() chooseItem = new EventEmitter<any>();
  @Output() chooseVal = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  choose(group, item) {
    console.log(`%c one component output ${group}_${item}`, 'background:#333;color:#fff');
    const val =  {group, item};
    this.chooseVal.emit(val);
    // this.chooseGroup.emit(group);
    // this.chooseItem.emit(item);
  }

}
