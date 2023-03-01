import { Directive, AfterViewInit, OnDestroy, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import Croppie from 'croppie/croppie';

@Directive({
  selector: 'img[croppieOptions]',
  exportAs: 'croppie'
})
export class CroppieDirective implements AfterViewInit, OnDestroy {

  private element: HTMLImageElement;

  public croppie: Croppie;

  @Input()
  public croppieOptions: Croppie.CroppieOptions;

  @Output()
  public update: EventEmitter<Croppie>;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
    this.update = new EventEmitter();
  }

  public ngAfterViewInit() {
    this.initCroppie();
  }

  initCroppie() {
    (this.croppieOptions as any).update = (data) => this.update.emit(data);
    this.croppie = new Croppie(
        this.element,
        this.croppieOptions
    );
  }

  public reInit() {
    this.croppie.destroy();
    this.initCroppie();
  }

  public ngOnDestroy() {
    if (!!this.croppie) {
      this.croppie.destroy();
    }
  }

}
