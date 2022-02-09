import { AbstractControl, ValidationErrors } from '@angular/forms';


export class passwordValidators {
  static oldPassword(control: AbstractControl): ValidationErrors | null {
    if (control.value != '123') return ({ oldPassword: true });

    return null;
  }
  static passwordShouldBeMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');
    if (newPassword.value !== confirmPassword.value)
      return { passwordShouldBeMatch: true };

    return null;
  }
}
