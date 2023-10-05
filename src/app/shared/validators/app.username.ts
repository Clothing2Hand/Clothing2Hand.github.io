import { ValidatorFn } from "@angular/forms";

export function appUsernameValidator(): ValidatorFn {
    return (control) => {
        return (control.value == '' || /^(?=.*\d).{6,}$/.test(control.value)) ? null : { appUsernameError: true }
    }
}