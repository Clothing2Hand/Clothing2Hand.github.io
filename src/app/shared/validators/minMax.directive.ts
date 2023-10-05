import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
    selector: '[minMax]',
    providers: [  //vurzvame direktivata kum samata form i kazvame che tq trqbva da se vuzpriema kato validator
        {
            provide: NG_VALIDATORS,
            useExisting: MinMaxDirective, //ne iskame da suzdavame nva instanciq na tazi direktiva a iskame da izpolzvame veche suzdadenata
            multi: true //moje da providnem poveche ot edno neshto - poluchavame masiv ot vs stoinosti koito sa providnati
        }
    ]
})
export class MinMaxDirective implements Validator {

    constructor() { }
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        return ((control.value > 0.1 && control.value< 1000 ) || control.value == '')  ? null : {minMaxError: true};
    }
    
}