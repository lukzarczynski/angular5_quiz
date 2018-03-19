import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';


@Directive({
  selector: '[appObjectSelected]',
  providers: [{provide: NG_VALIDATORS, useExisting: ObjectSelectedDirective, multi: true}]
})
export class ObjectSelectedDirective implements Validator {

  validate(c: AbstractControl): ValidationErrors | null {
    return c.value && typeof c.value === 'string' ? {'objectSelected': 'Please pick a value from list'} : null;
  }

}

