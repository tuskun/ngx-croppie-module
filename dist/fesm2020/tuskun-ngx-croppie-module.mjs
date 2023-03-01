import * as i0 from '@angular/core';
import { EventEmitter, Directive, Input, Output, NgModule } from '@angular/core';
import Croppie from 'croppie/croppie';
import { CommonModule } from '@angular/common';

class CroppieDirective {
    constructor(elementRef) {
        this.element = elementRef.nativeElement;
        this.update = new EventEmitter();
    }
    ngAfterViewInit() {
        this.initCroppie();
    }
    initCroppie() {
        this.croppieOptions.update = (data) => this.update.emit(data);
        this.croppie = new Croppie(this.element, this.croppieOptions);
    }
    reInit() {
        this.croppie.destroy();
        this.initCroppie();
    }
    ngOnDestroy() {
        if (!!this.croppie) {
            this.croppie.destroy();
        }
    }
}
CroppieDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: CroppieDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
CroppieDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.0", type: CroppieDirective, selector: "img[croppieOptions]", inputs: { croppieOptions: "croppieOptions" }, outputs: { update: "update" }, exportAs: ["croppie"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: CroppieDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'img[croppieOptions]',
                    exportAs: 'croppie'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { croppieOptions: [{
                type: Input
            }], update: [{
                type: Output
            }] } });

class CroppieModule {
}
CroppieModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: CroppieModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CroppieModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.0", ngImport: i0, type: CroppieModule, declarations: [CroppieDirective], imports: [CommonModule], exports: [CroppieDirective] });
CroppieModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: CroppieModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: CroppieModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        CroppieDirective
                    ],
                    exports: [
                        CroppieDirective
                    ]
                }]
        }] });

/*
 * Public API Surface of angular-croppie-module
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CroppieDirective, CroppieModule };
//# sourceMappingURL=tuskun-ngx-croppie-module.mjs.map
