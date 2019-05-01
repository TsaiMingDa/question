import { Directive, Input } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  NG_ASYNC_VALIDATORS
} from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Directive({
  selector: '[appValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: ValidatorDirective,
      multi: true
    }
  ]
})
export class ValidatorDirective implements AsyncValidator {
  @Input('appValidator') compareValue;
  validate(control: AbstractControl) {
    console.log(control.value);
    if (control.value !== this.compareValue) {

      return of({ invalidCode: control.value }).pipe(delay(1500));
    }

    return of(null).pipe(delay(1500));
  }
  constructor() { }

}
