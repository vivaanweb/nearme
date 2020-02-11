/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
var GalleryVideoComponent = /** @class */ (function () {
    function GalleryVideoComponent() {
        /**
         * Stream that emits when an error occurs
         */
        this.error = new EventEmitter();
    }
    Object.defineProperty(GalleryVideoComponent.prototype, "pauseVideo", {
        set: /**
         * @param {?} shouldPause
         * @return {?}
         */
        function (shouldPause) {
            /** @type {?} */
            var video = this.video.nativeElement;
            if (shouldPause && !video.paused) {
                video.pause();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GalleryVideoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.src instanceof Array) {
            // If video has multiple sources
            this.videoSources = tslib_1.__spread(this.src);
        }
        else {
            this.videoSources = [{ url: this.src }];
        }
    };
    GalleryVideoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-video',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <video #video controls poster=\"{{poster}}\" (error)=\"error.emit($event)\">\n      <source *ngFor=\"let src of videoSources\" src=\"{{src?.url}}\" type=\"{{src?.type}}\"/>\n    </video>\n  "
                }] }
    ];
    GalleryVideoComponent.propDecorators = {
        src: [{ type: Input }],
        poster: [{ type: Input }],
        pauseVideo: [{ type: Input, args: ['pause',] }],
        error: [{ type: Output }],
        video: [{ type: ViewChild, args: ['video',] }]
    };
    return GalleryVideoComponent;
}());
export { GalleryVideoComponent };
if (false) {
    /** @type {?} */
    GalleryVideoComponent.prototype.videoSources;
    /** @type {?} */
    GalleryVideoComponent.prototype.src;
    /** @type {?} */
    GalleryVideoComponent.prototype.poster;
    /**
     * Stream that emits when an error occurs
     * @type {?}
     */
    GalleryVideoComponent.prototype.error;
    /** @type {?} */
    GalleryVideoComponent.prototype.video;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS12aWRlby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LXZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSDtJQUFBOzs7O1FBd0JZLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBWTlDLENBQUM7SUFwQkMsc0JBQW9CLDZDQUFVOzs7OztRQUE5QixVQUErQixXQUFvQjs7Z0JBQzNDLEtBQUssR0FBcUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQ3hELElBQUksV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2Y7UUFDSCxDQUFDOzs7T0FBQTs7OztJQU9ELHdDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLEdBQUcsWUFBWSxLQUFLLEVBQUU7WUFDN0IsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLG9CQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxzTUFJVDtpQkFDRjs7O3NCQUtFLEtBQUs7eUJBQ0wsS0FBSzs2QkFFTCxLQUFLLFNBQUMsT0FBTzt3QkFRYixNQUFNO3dCQUVOLFNBQVMsU0FBQyxPQUFPOztJQVVwQiw0QkFBQztDQUFBLEFBcENELElBb0NDO1NBM0JZLHFCQUFxQjs7O0lBRWhDLDZDQUE2Qzs7SUFFN0Msb0NBQXNEOztJQUN0RCx1Q0FBd0I7Ozs7O0lBVXhCLHNDQUE0Qzs7SUFFNUMsc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LXZpZGVvJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHZpZGVvICN2aWRlbyBjb250cm9scyBwb3N0ZXI9XCJ7e3Bvc3Rlcn19XCIgKGVycm9yKT1cImVycm9yLmVtaXQoJGV2ZW50KVwiPlxyXG4gICAgICA8c291cmNlICpuZ0Zvcj1cImxldCBzcmMgb2YgdmlkZW9Tb3VyY2VzXCIgc3JjPVwie3tzcmM/LnVybH19XCIgdHlwZT1cInt7c3JjPy50eXBlfX1cIi8+XHJcbiAgICA8L3ZpZGVvPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlWaWRlb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHZpZGVvU291cmNlczoge3VybDogc3RyaW5nLCB0eXBlPzogc3RyaW5nfVtdO1xyXG5cclxuICBASW5wdXQoKSBzcmM6IHN0cmluZyB8IHt1cmw6IHN0cmluZywgdHlwZT86IHN0cmluZ31bXTtcclxuICBASW5wdXQoKSBwb3N0ZXI6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdwYXVzZScpIHNldCBwYXVzZVZpZGVvKHNob3VsZFBhdXNlOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCA9IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudDtcclxuICAgIGlmIChzaG91bGRQYXVzZSAmJiAhdmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgIHZpZGVvLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBhbiBlcnJvciBvY2N1cnMgKi9cclxuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCd2aWRlbycpIHZpZGVvOiBFbGVtZW50UmVmO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnNyYyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIC8vIElmIHZpZGVvIGhhcyBtdWx0aXBsZSBzb3VyY2VzXHJcbiAgICAgIHRoaXMudmlkZW9Tb3VyY2VzID0gWy4uLnRoaXMuc3JjXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmlkZW9Tb3VyY2VzID0gW3sgdXJsOiB0aGlzLnNyYyB9XTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19