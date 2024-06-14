import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { passwordValidator } from "../../validators/password-validator";

@Directive({
    selector: '[passwordvalidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PasswordValidatorDirective,
            multi: true
        }
    ]
})
export class PasswordValidatorDirective implements Validator {
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        return passwordValidator(control)
    }
    registerOnValidatorChange?(fn: () => void): void {
    }

}