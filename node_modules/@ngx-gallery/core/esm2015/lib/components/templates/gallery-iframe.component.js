/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class GalleryIframeComponent {
    /**
     * @param {?} _sanitizer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?} shouldPause
     * @return {?}
     */
    set pauseVideo(shouldPause) {
        /** @type {?} */
        const iframe = this.iframe.nativeElement;
        if (shouldPause) {
            /** @type {?} */
            const src = iframe.src;
            iframe.src = src;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.iframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(this.src);
    }
}
GalleryIframeComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-iframe',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <iframe #iframe
            frameborder="0"
            allowfullscreen
            [src]="iframeSrc">
    </iframe>
  `
            }] }
];
/** @nocollapse */
GalleryIframeComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
GalleryIframeComponent.propDecorators = {
    src: [{ type: Input }],
    pauseVideo: [{ type: Input, args: ['pause',] }],
    iframe: [{ type: ViewChild, args: ['iframe',] }]
};
if (false) {
    /** @type {?} */
    GalleryIframeComponent.prototype.iframeSrc;
    /** @type {?} */
    GalleryIframeComponent.prototype.src;
    /** @type {?} */
    GalleryIframeComponent.prototype.iframe;
    /**
     * @type {?}
     * @private
     */
    GalleryIframeComponent.prototype._sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pZnJhbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90ZW1wbGF0ZXMvZ2FsbGVyeS1pZnJhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxZQUFZLEVBQW1CLE1BQU0sMkJBQTJCLENBQUM7QUFhMUUsTUFBTSxPQUFPLHNCQUFzQjs7OztJQWdCakMsWUFBb0IsVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYztJQUM1QyxDQUFDOzs7OztJQVhELElBQW9CLFVBQVUsQ0FBQyxXQUFvQjs7Y0FDM0MsTUFBTSxHQUFzQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWE7UUFDM0QsSUFBSSxXQUFXLEVBQUU7O2tCQUNULEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRztZQUN0QixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7SUFPRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7OztHQU1UO2FBQ0Y7Ozs7WUFaUSxZQUFZOzs7a0JBaUJsQixLQUFLO3lCQUVMLEtBQUssU0FBQyxPQUFPO3FCQVFiLFNBQVMsU0FBQyxRQUFROzs7O0lBWm5CLDJDQUEyQjs7SUFFM0IscUNBQXFCOztJQVVyQix3Q0FBd0M7Ozs7O0lBRTVCLDRDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LWlmcmFtZScsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpZnJhbWUgI2lmcmFtZVxyXG4gICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW5cclxuICAgICAgICAgICAgW3NyY109XCJpZnJhbWVTcmNcIj5cclxuICAgIDwvaWZyYW1lPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlJZnJhbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBpZnJhbWVTcmM6IFNhZmVSZXNvdXJjZVVybDtcclxuXHJcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgncGF1c2UnKSBzZXQgcGF1c2VWaWRlbyhzaG91bGRQYXVzZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCA9IHRoaXMuaWZyYW1lLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBpZiAoc2hvdWxkUGF1c2UpIHtcclxuICAgICAgY29uc3Qgc3JjID0gaWZyYW1lLnNyYztcclxuICAgICAgaWZyYW1lLnNyYyA9IHNyYztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2lmcmFtZScpIGlmcmFtZTogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pZnJhbWVTcmMgPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHRoaXMuc3JjKTtcclxuICB9XHJcbn1cclxuIl19