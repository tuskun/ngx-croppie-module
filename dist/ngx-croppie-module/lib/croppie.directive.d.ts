import { AfterViewInit, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import * as Croppie from 'croppie';
import * as i0 from "@angular/core";
/**
 * Basic directive for creating Coppie instance on `<img>` tag.
 */
export declare class CroppieDirective implements AfterViewInit, OnDestroy {
    private element;
    croppie: Croppie;
    croppieOptions: Croppie.CroppieOptions;
    update: EventEmitter<Croppie>;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CroppieDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CroppieDirective, "img[croppieOptions]", ["croppie"], { "croppieOptions": "croppieOptions"; }, { "update": "update"; }, never, never, false, never>;
}
