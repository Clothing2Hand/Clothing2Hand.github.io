import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordGroupValidator(controlName1: string, controlName2: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup
        const v1 = group.get(controlName1)
        const v2 = group.get(controlName2)
        return v1?.value == v2?.value ? null : { sameValueGroupValidator: true}
    }
}