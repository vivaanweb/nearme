/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
export class GalleryVideoComponent {
    constructor() {
        /**
         * Stream that emits when an error occurs
         */
        this.error = new EventEmitter();
    }
    /**
     * @param {?} shouldPause
     * @return {?}
     */
    set pauseVideo(shouldPause) {
        /** @type {?} */
        const video = this.video.nativeElement;
        if (shouldPause && !video.paused) {
            video.pause();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.src instanceof Array) {
            // If video has multiple sources
            this.videoSources = [...this.src];
        }
        else {
            this.videoSources = [{ url: this.src }];
        }
    }
}
GalleryVideoComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-video',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <video #video controls poster="{{poster}}" (error)="error.emit($event)">
      <source *ngFor="let src of videoSources" src="{{src?.url}}" type="{{src?.type}}"/>
    </video>
  `
            }] }
];
GalleryVideoComponent.propDecorators = {
    src: [{ type: Input }],
    poster: [{ type: Input }],
    pauseVideo: [{ type: Input, args: ['pause',] }],
    error: [{ type: Output }],
    video: [{ type: ViewChild, args: ['video',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS12aWRlby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LXZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVy9ILE1BQU0sT0FBTyxxQkFBcUI7SUFUbEM7Ozs7UUF3QlksVUFBSyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFZOUMsQ0FBQzs7Ozs7SUFwQkMsSUFBb0IsVUFBVSxDQUFDLFdBQW9COztjQUMzQyxLQUFLLEdBQXFCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYTtRQUN4RCxJQUFJLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7O0lBT0QsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEdBQUcsWUFBWSxLQUFLLEVBQUU7WUFDN0IsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7OztHQUlUO2FBQ0Y7OztrQkFLRSxLQUFLO3FCQUNMLEtBQUs7eUJBRUwsS0FBSyxTQUFDLE9BQU87b0JBUWIsTUFBTTtvQkFFTixTQUFTLFNBQUMsT0FBTzs7OztJQWZsQiw2Q0FBNkM7O0lBRTdDLG9DQUFzRDs7SUFDdEQsdUNBQXdCOzs7OztJQVV4QixzQ0FBNEM7O0lBRTVDLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS12aWRlbycsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDx2aWRlbyAjdmlkZW8gY29udHJvbHMgcG9zdGVyPVwie3twb3N0ZXJ9fVwiIChlcnJvcik9XCJlcnJvci5lbWl0KCRldmVudClcIj5cclxuICAgICAgPHNvdXJjZSAqbmdGb3I9XCJsZXQgc3JjIG9mIHZpZGVvU291cmNlc1wiIHNyYz1cInt7c3JjPy51cmx9fVwiIHR5cGU9XCJ7e3NyYz8udHlwZX19XCIvPlxyXG4gICAgPC92aWRlbz5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5VmlkZW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICB2aWRlb1NvdXJjZXM6IHt1cmw6IHN0cmluZywgdHlwZT86IHN0cmluZ31bXTtcclxuXHJcbiAgQElucHV0KCkgc3JjOiBzdHJpbmcgfCB7dXJsOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmd9W107XHJcbiAgQElucHV0KCkgcG9zdGVyOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgncGF1c2UnKSBzZXQgcGF1c2VWaWRlbyhzaG91bGRQYXVzZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQgPSB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBpZiAoc2hvdWxkUGF1c2UgJiYgIXZpZGVvLnBhdXNlZCkge1xyXG4gICAgICB2aWRlby5wYXVzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gYW4gZXJyb3Igb2NjdXJzICovXHJcbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgndmlkZW8nKSB2aWRlbzogRWxlbWVudFJlZjtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5zcmMgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAvLyBJZiB2aWRlbyBoYXMgbXVsdGlwbGUgc291cmNlc1xyXG4gICAgICB0aGlzLnZpZGVvU291cmNlcyA9IFsuLi50aGlzLnNyY107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZpZGVvU291cmNlcyA9IFt7IHVybDogdGhpcy5zcmMgfV07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==