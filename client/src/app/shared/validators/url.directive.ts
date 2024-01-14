import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
    selector: '[urlValidate]',
    providers: [  //vurzvame direktivata kum samata form i kazvame che tq trqbva da se vuzpriema kato validator
        {
            provide: NG_VALIDATORS,
            useExisting: UrlDirective, //ne iskame da suzdavame nva instanciq na tazi direktiva a iskame da izpolzvame veche suzdadenata
            multi: true //moje da providnem poveche ot edno neshto - poluchavame masiv ot vs stoinosti koito sa providnati
        }
    ]
})
export class UrlDirective implements Validator {

    constructor() { }
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const regex = /https?:\/\/.*/
        return ((regex.test(control.value) ) || control.value == '')  ? null : {urlError: true};
    }
    
}