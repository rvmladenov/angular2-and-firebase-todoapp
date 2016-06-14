import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({ 
    selector: '[labelToInput]',
     
})
export class DirectiveName implements OnInit {
    constructor(private _el: ElementRef) {}
    
    ngOnInit(): void {
        
    }
}