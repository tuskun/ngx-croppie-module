import { AfterViewInit, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import Croppie from 'croppie/croppie';
import * as i0 from "@angular/core";
export declare class CroppieDirective implements AfterViewInit, OnDestroy {
    private element;
    croppie: Croppie;
    croppieOptions: Croppie.CroppieOptions;
    update: EventEmitter<Croppie>;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    initCroppie(): void;
    reInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CroppieDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CroppieDirective, "img[croppieOptions]", ["croppie"], { "croppieOptions": "croppieOptions"; }, { "update": "update"; }, never, never, false, never>;
}
