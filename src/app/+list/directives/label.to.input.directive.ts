import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({ 
    selector: '[labelToInput]',
     
})
export class DirectiveName implements OnInit {
    constructor(private _el: ElementRef) {}
    
    ngOnInit(): void {
        // TODO: Remove this directive as it is no longer needed
    }
}