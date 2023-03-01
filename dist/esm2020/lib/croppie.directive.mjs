import { Directive, Input, Output, EventEmitter } from '@angular/core';
import Croppie from 'croppie/croppie';
import * as i0 from "@angular/core";
export class CroppieDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcHBpZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2Nyb3BwaWUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTRCLEtBQUssRUFBRSxNQUFNLEVBQWMsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sT0FBTyxNQUFNLGlCQUFpQixDQUFDOztBQU10QyxNQUFNLE9BQU8sZ0JBQWdCO0lBWTNCLFlBQVksVUFBc0I7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU0sZUFBZTtRQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDUixJQUFJLENBQUMsY0FBc0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLGNBQWMsQ0FDdEIsQ0FBQztJQUNKLENBQUM7SUFFTSxNQUFNO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7NkdBdENVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBSjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLFNBQVM7aUJBQ3BCO2lHQVFRLGNBQWM7c0JBRHBCLEtBQUs7Z0JBSUMsTUFBTTtzQkFEWixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IENyb3BwaWUgZnJvbSAnY3JvcHBpZS9jcm9wcGllJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW1nW2Nyb3BwaWVPcHRpb25zXScsXG4gIGV4cG9ydEFzOiAnY3JvcHBpZSdcbn0pXG5leHBvcnQgY2xhc3MgQ3JvcHBpZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gIHB1YmxpYyBjcm9wcGllOiBDcm9wcGllO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjcm9wcGllT3B0aW9uczogQ3JvcHBpZS5Dcm9wcGllT3B0aW9ucztcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHVwZGF0ZTogRXZlbnRFbWl0dGVyPENyb3BwaWU+O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy51cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuaW5pdENyb3BwaWUoKTtcbiAgfVxuXG4gIGluaXRDcm9wcGllKCkge1xuICAgICh0aGlzLmNyb3BwaWVPcHRpb25zIGFzIGFueSkudXBkYXRlID0gKGRhdGEpID0+IHRoaXMudXBkYXRlLmVtaXQoZGF0YSk7XG4gICAgdGhpcy5jcm9wcGllID0gbmV3IENyb3BwaWUoXG4gICAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgICAgdGhpcy5jcm9wcGllT3B0aW9uc1xuICAgICk7XG4gIH1cblxuICBwdWJsaWMgcmVJbml0KCkge1xuICAgIHRoaXMuY3JvcHBpZS5kZXN0cm95KCk7XG4gICAgdGhpcy5pbml0Q3JvcHBpZSgpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIGlmICghIXRoaXMuY3JvcHBpZSkge1xuICAgICAgdGhpcy5jcm9wcGllLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxufVxuIl19