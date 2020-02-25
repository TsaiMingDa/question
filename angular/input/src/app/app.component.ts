import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input';
  appChooseVal;
  // chooseGroupVal;
  // chooseItemVal;
  // appChooseGroup(val) {
  //   if (val) {
  //     console.log('%c app get one input group' + val, 'background:#04c504;color:#fff');
  //     this.chooseGroupVal = val;
  //   }
  // }
  // appChooseItem(val) {
  //   if (val) {
  //     console.log('%c app get one input item' + val, 'background:#04c504;color:#fff');
  //     this.chooseItemVal = val;
  //   }
  // }
  appChoose(val) {
    if (val) {
      console.log(`%c app get one input  ${val.group}_${val.item}`, 'background:#04c504;color:#fff');
      this.appChooseVal = val;
      // this.chooseItemVal = val;
    }
  }
}
