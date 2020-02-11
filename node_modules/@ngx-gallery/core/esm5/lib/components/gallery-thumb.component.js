/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, HostBinding, Output, EventEmitter } from '@angular/core';
var GalleryThumbComponent = /** @class */ (function () {
    function GalleryThumbComponent() {
        this.error = new EventEmitter();
    }
    Object.defineProperty(GalleryThumbComponent.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.index === this.currIndex;
        },
        enumerable: true,
        configurable: true
    });
    GalleryThumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-thumb',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <gallery-image [src]=\"data.thumb\" \n                   mode=\"indeterminate\"\n                   [isThumbnail]=\"true\" \n                   [loadingIcon]=\"config.thumbLoadingIcon\"\n                   [loadingError]=\"config.thumbLoadingError \"\n                   (error)=\"error.emit($event)\"></gallery-image>\n\n    <div *ngIf=\"config.thumbTemplate\" class=\"g-template g-thumb-template\">\n      <ng-container\n        *ngTemplateOutlet=\"config.thumbTemplate; context: { index: this.index, type: this.type, data: this.data }\">\n      </ng-container>\n    </div>\n  "
                }] }
    ];
    GalleryThumbComponent.propDecorators = {
        config: [{ type: Input }],
        index: [{ type: Input }],
        currIndex: [{ type: Input }],
        type: [{ type: Input }],
        data: [{ type: Input }],
        error: [{ type: Output }],
        isActive: [{ type: HostBinding, args: ['class.g-active-thumb',] }]
    };
    return GalleryThumbComponent;
}());
export { GalleryThumbComponent };
if (false) {
    /** @type {?} */
    GalleryThumbComponent.prototype.config;
    /**
     * Item's index in the gallery
     * @type {?}
     */
    GalleryThumbComponent.prototype.index;
    /**
     * Gallery current index
     * @type {?}
     */
    GalleryThumbComponent.prototype.currIndex;
    /**
     * Item's type 'image', 'video', 'youtube', 'iframe'
     * @type {?}
     */
    GalleryThumbComponent.prototype.type;
    /**
     * Item's data, this object contains the data required to display the content (e.g. src path)
     * @type {?}
     */
    GalleryThumbComponent.prototype.data;
    /** @type {?} */
    GalleryThumbComponent.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS10aHVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dhbGxlcnktdGh1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3RztJQUFBO1FBa0NZLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBTTlDLENBQUM7SUFKQyxzQkFBeUMsMkNBQVE7Ozs7UUFBakQ7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwya0JBYVQ7aUJBQ0Y7Ozt5QkFHRSxLQUFLO3dCQUdMLEtBQUs7NEJBR0wsS0FBSzt1QkFHTCxLQUFLO3VCQUdMLEtBQUs7d0JBRUwsTUFBTTsyQkFFTixXQUFXLFNBQUMsc0JBQXNCOztJQUlyQyw0QkFBQztDQUFBLEFBeENELElBd0NDO1NBdEJZLHFCQUFxQjs7O0lBRWhDLHVDQUErQjs7Ozs7SUFHL0Isc0NBQXVCOzs7OztJQUd2QiwwQ0FBMkI7Ozs7O0lBRzNCLHFDQUFzQjs7Ozs7SUFHdEIscUNBQW1COztJQUVuQixzQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSG9zdEJpbmRpbmcsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS10aHVtYicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxnYWxsZXJ5LWltYWdlIFtzcmNdPVwiZGF0YS50aHVtYlwiIFxyXG4gICAgICAgICAgICAgICAgICAgbW9kZT1cImluZGV0ZXJtaW5hdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgW2lzVGh1bWJuYWlsXT1cInRydWVcIiBcclxuICAgICAgICAgICAgICAgICAgIFtsb2FkaW5nSWNvbl09XCJjb25maWcudGh1bWJMb2FkaW5nSWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICBbbG9hZGluZ0Vycm9yXT1cImNvbmZpZy50aHVtYkxvYWRpbmdFcnJvciBcIlxyXG4gICAgICAgICAgICAgICAgICAgKGVycm9yKT1cImVycm9yLmVtaXQoJGV2ZW50KVwiPjwvZ2FsbGVyeS1pbWFnZT5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnLnRodW1iVGVtcGxhdGVcIiBjbGFzcz1cImctdGVtcGxhdGUgZy10aHVtYi10ZW1wbGF0ZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb25maWcudGh1bWJUZW1wbGF0ZTsgY29udGV4dDogeyBpbmRleDogdGhpcy5pbmRleCwgdHlwZTogdGhpcy50eXBlLCBkYXRhOiB0aGlzLmRhdGEgfVwiPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlUaHVtYkNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGNvbmZpZzogR2FsbGVyeUNvbmZpZztcclxuXHJcbiAgLyoqIEl0ZW0ncyBpbmRleCBpbiB0aGUgZ2FsbGVyeSAqL1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcblxyXG4gIC8qKiBHYWxsZXJ5IGN1cnJlbnQgaW5kZXggKi9cclxuICBASW5wdXQoKSBjdXJySW5kZXg6IG51bWJlcjtcclxuXHJcbiAgLyoqIEl0ZW0ncyB0eXBlICdpbWFnZScsICd2aWRlbycsICd5b3V0dWJlJywgJ2lmcmFtZScgKi9cclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBJdGVtJ3MgZGF0YSwgdGhpcyBvYmplY3QgY29udGFpbnMgdGhlIGRhdGEgcmVxdWlyZWQgdG8gZGlzcGxheSB0aGUgY29udGVudCAoZS5nLiBzcmMgcGF0aCkgKi9cclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcblxyXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3I+KCk7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZy1hY3RpdmUtdGh1bWInKSBnZXQgaXNBY3RpdmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmRleCA9PT0gdGhpcy5jdXJySW5kZXg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=