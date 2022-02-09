
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UniquenessValidator{
    static shouldbeUnique(control:AbstractControl) : Promise<ValidationErrors> |null{
        return null;
    }
}