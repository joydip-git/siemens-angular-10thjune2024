import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const val = control.value
    if (val) {

        let length = false
        if (val.length >= 6 && val.length <= 12) {
            length = true
        }
        if (!length)
            return { lengthError: 'length should be between 6 and 12, whereas current length is ' + val.length }

        let upper = false
        for (const char of val) {
            if (char >= 'A' && char <= 'Z') {
                upper = true
                break;
            }
        }

        if (!upper)
            return { upperError: 'at least one uppercase must be present' }

        let lower = false
        for (const char of val) {
            if (char >= 'a' && char <= 'z') {
                lower = true
                break;
            }
        }

        if (!lower)
            return { lowerError: 'at least one lowercase must be present' }

        let digit = false
        for (const char of val) {
            if (char >= '0' && char <= '9') {
                digit = true
                break;
            }
        }

        if (!digit)
            return { digitError: 'at least one digit must be present' }

        return null
    } else
        return null
}