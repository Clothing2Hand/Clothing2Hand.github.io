import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
    selector: '[appUsername]',
    providers: [  //vurzvame direktivata kum samata form i kazvame che tq trqbva da se vuzpriema kato validator
        {
            provide: NG_VALIDATORS,
            useExisting: AppUsernameDirective, //ne iskame da suzdavame nva instanciq na tazi direktiva a iskame da izpolzvame veche suzdadenata
            multi: true //moje da providnem poveche ot edno neshto - poluchavame masiv ot vs stoinosti koito sa providnati
        }
    ]
})
export class AppUsernameDirective implements Validator {

    constructor() { }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const regex = /^(?=.*\d).{6,}$/
        return (control.value == '' || regex.test(control.value)) ? null : { appUsernameError: true }
    }
}