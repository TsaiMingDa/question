import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  opt = {
    A : ['1', '2', '3'],
    B : ['4', '5', '6'],
    C : ['7', '8', '9']
  };
  formData = this.fb.group({
    option: ['B'],
    subOption: ['1']
  });
  // @Input() set chooseGroupAns(val) {
  //   if (val) {
  //     console.log('%c two component get input group' + val, 'background:#e2e22e;');
  //     this.formData.get('option').setValue(val);
  //     console.log(this.formData.get('option').value);
  //   }
  // }
  // @Input() set chooseItemAns(val) {
  //   if (val) {
  //     console.log('%c two component get input item' + val , 'background:#e2e22e;');
  //     this.formData.get('subOption').setValue(val);
  //     console.log(this.formData.get('subOption').value);
  //   }
  // }
  @Input() set chooseAns(val) {
    if (val) {
      console.log(`%c two component get input' ${val.group}_${val.item}` , 'background:#e2e22e;');
      this.formData.get('option').setValue(val.group);
      this.formData.get('subOption').setValue(val.item);
      console.log(this.formData.get('option').value);
      console.log(this.formData.get('subOption').value);
    }
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
