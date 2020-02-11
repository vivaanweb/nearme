/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, HostBinding, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
var GalleryCoreComponent = /** @class */ (function () {
    function GalleryCoreComponent() {
        this.action = new EventEmitter();
        this.itemClick = new EventEmitter();
        this.thumbClick = new EventEmitter();
        this.error = new EventEmitter();
    }
    Object.defineProperty(GalleryCoreComponent.prototype, "thumbPosition", {
        /** Set thumbnails position */
        get: /**
         * Set thumbnails position
         * @return {?}
         */
        function () {
            return this.config.thumbPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "slidingDirection", {
        /** Set sliding direction */
        get: /**
         * Set sliding direction
         * @return {?}
         */
        function () {
            return this.config.slidingDirection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "disableThumb", {
        /** Disable thumbnails clicks */
        get: /**
         * Disable thumbnails clicks
         * @return {?}
         */
        function () {
            return this.config.disableThumb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "imageSize", {
        /** Set gallery image size */
        get: /**
         * Set gallery image size
         * @return {?}
         */
        function () {
            return this.config.imageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "dotsPosition", {
        /** Set gallery dots position */
        get: /**
         * Set gallery dots position
         * @return {?}
         */
        function () {
            return this.config.dotsPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "counterPosition", {
        /** Set gallery counter position */
        get: /**
         * Set gallery counter position
         * @return {?}
         */
        function () {
            return this.config.counterPosition;
        },
        enumerable: true,
        configurable: true
    });
    GalleryCoreComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-core',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <gallery-thumbs *ngIf=\"config.thumb\"\n                    [state]=\"state\"\n                    [config]=\"config\"\n                    (action)=\"action.emit($event)\"\n                    (thumbClick)=\"thumbClick.emit($event)\">\n    </gallery-thumbs>\n    <div class=\"g-box\">\n      <gallery-slider [state]=\"state\"\n                      [config]=\"config\"\n                      (action)=\"action.emit($event)\"\n                      (itemClick)=\"itemClick.emit($event)\"\n                      (error)=\"error.emit($event)\">\n\n        <gallery-nav *ngIf=\"config.nav && state.items.length > 1\"\n                     [state]=\"state\"\n                     [config]=\"config\"\n                     (action)=\"action.emit($event)\">\n        </gallery-nav>\n\n      </gallery-slider>\n\n      <gallery-dots *ngIf=\"config.dots\"\n                    [state]=\"state\"\n                    [config]=\"config\"\n                    (action)=\"action.emit($event)\">\n      </gallery-dots>\n\n      <gallery-counter *ngIf=\"config.counter\"\n                       [state]=\"state\">\n      </gallery-counter>\n    </div>\n  "
                }] }
    ];
    GalleryCoreComponent.propDecorators = {
        state: [{ type: Input }],
        config: [{ type: Input }],
        action: [{ type: Output }],
        itemClick: [{ type: Output }],
        thumbClick: [{ type: Output }],
        error: [{ type: Output }],
        thumbPosition: [{ type: HostBinding, args: ['attr.thumbPosition',] }],
        slidingDirection: [{ type: HostBinding, args: ['attr.slidingDirection',] }],
        disableThumb: [{ type: HostBinding, args: ['attr.disableThumb',] }],
        imageSize: [{ type: HostBinding, args: ['attr.imageSize',] }],
        dotsPosition: [{ type: HostBinding, args: ['attr.dotsPosition',] }],
        counterPosition: [{ type: HostBinding, args: ['attr.counterPosition',] }]
    };
    return GalleryCoreComponent;
}());
export { GalleryCoreComponent };
if (false) {
    /** @type {?} */
    GalleryCoreComponent.prototype.state;
    /** @type {?} */
    GalleryCoreComponent.prototype.config;
    /** @type {?} */
    GalleryCoreComponent.prototype.action;
    /** @type {?} */
    GalleryCoreComponent.prototype.itemClick;
    /** @type {?} */
    GalleryCoreComponent.prototype.thumbClick;
    /** @type {?} */
    GalleryCoreComponent.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1jb3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ2FsbGVyeS1jb3JlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0c7SUFBQTtRQXlDWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDN0MsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDdkMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDeEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO0lBZ0NyRCxDQUFDO0lBN0JDLHNCQUF1QywrQ0FBYTtRQURwRCw4QkFBOEI7Ozs7O1FBQzlCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUdELHNCQUEwQyxrREFBZ0I7UUFEMUQsNEJBQTRCOzs7OztRQUM1QjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUdELHNCQUFzQyw4Q0FBWTtRQURsRCxnQ0FBZ0M7Ozs7O1FBQ2hDO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUdELHNCQUFtQywyQ0FBUztRQUQ1Qyw2QkFBNkI7Ozs7O1FBQzdCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUdELHNCQUFzQyw4Q0FBWTtRQURsRCxnQ0FBZ0M7Ozs7O1FBQ2hDO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUdELHNCQUF5QyxpREFBZTtRQUR4RCxtQ0FBbUM7Ozs7O1FBQ25DO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTs7Z0JBMUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSw2bkNBZ0NUO2lCQUNGOzs7d0JBR0UsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLE1BQU07NEJBQ04sTUFBTTs2QkFDTixNQUFNO3dCQUNOLE1BQU07Z0NBR04sV0FBVyxTQUFDLG9CQUFvQjttQ0FLaEMsV0FBVyxTQUFDLHVCQUF1QjsrQkFLbkMsV0FBVyxTQUFDLG1CQUFtQjs0QkFLL0IsV0FBVyxTQUFDLGdCQUFnQjsrQkFLNUIsV0FBVyxTQUFDLG1CQUFtQjtrQ0FLL0IsV0FBVyxTQUFDLHNCQUFzQjs7SUFJckMsMkJBQUM7Q0FBQSxBQTVFRCxJQTRFQztTQXZDWSxvQkFBb0I7OztJQUUvQixxQ0FBNkI7O0lBQzdCLHNDQUErQjs7SUFDL0Isc0NBQXVEOztJQUN2RCx5Q0FBaUQ7O0lBQ2pELDBDQUFrRDs7SUFDbEQscUNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5RXJyb3IsIEdhbGxlcnlTdGF0ZSB9IGZyb20gJy4uL21vZGVscy9nYWxsZXJ5Lm1vZGVsJztcclxuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LWNvcmUnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Z2FsbGVyeS10aHVtYnMgKm5nSWY9XCJjb25maWcudGh1bWJcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdGF0ZV09XCJzdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJjb25maWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIChhY3Rpb24pPVwiYWN0aW9uLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKHRodW1iQ2xpY2spPVwidGh1bWJDbGljay5lbWl0KCRldmVudClcIj5cclxuICAgIDwvZ2FsbGVyeS10aHVtYnM+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZy1ib3hcIj5cclxuICAgICAgPGdhbGxlcnktc2xpZGVyIFtzdGF0ZV09XCJzdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImNvbmZpZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoYWN0aW9uKT1cImFjdGlvbi5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGl0ZW1DbGljayk9XCJpdGVtQ2xpY2suZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJlcnJvci5lbWl0KCRldmVudClcIj5cclxuXHJcbiAgICAgICAgPGdhbGxlcnktbmF2ICpuZ0lmPVwiY29uZmlnLm5hdiAmJiBzdGF0ZS5pdGVtcy5sZW5ndGggPiAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgW3N0YXRlXT1cInN0YXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJjb25maWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAoYWN0aW9uKT1cImFjdGlvbi5lbWl0KCRldmVudClcIj5cclxuICAgICAgICA8L2dhbGxlcnktbmF2PlxyXG5cclxuICAgICAgPC9nYWxsZXJ5LXNsaWRlcj5cclxuXHJcbiAgICAgIDxnYWxsZXJ5LWRvdHMgKm5nSWY9XCJjb25maWcuZG90c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0YXRlXT1cInN0YXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImNvbmZpZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKGFjdGlvbik9XCJhY3Rpb24uZW1pdCgkZXZlbnQpXCI+XHJcbiAgICAgIDwvZ2FsbGVyeS1kb3RzPlxyXG5cclxuICAgICAgPGdhbGxlcnktY291bnRlciAqbmdJZj1cImNvbmZpZy5jb3VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbc3RhdGVdPVwic3RhdGVcIj5cclxuICAgICAgPC9nYWxsZXJ5LWNvdW50ZXI+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5Q29yZUNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHN0YXRlOiBHYWxsZXJ5U3RhdGU7XHJcbiAgQElucHV0KCkgY29uZmlnOiBHYWxsZXJ5Q29uZmlnO1xyXG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHRodW1iQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEdhbGxlcnlFcnJvcj4oKTtcclxuXHJcbiAgLyoqIFNldCB0aHVtYm5haWxzIHBvc2l0aW9uICovXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRodW1iUG9zaXRpb24nKSBnZXQgdGh1bWJQb3NpdGlvbigpOiAndG9wJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYm90dG9tJyB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcudGh1bWJQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKiBTZXQgc2xpZGluZyBkaXJlY3Rpb24gKi9cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuc2xpZGluZ0RpcmVjdGlvbicpIGdldCBzbGlkaW5nRGlyZWN0aW9uKCk6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnNsaWRpbmdEaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuICAvKiogRGlzYWJsZSB0aHVtYm5haWxzIGNsaWNrcyAqL1xyXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlVGh1bWInKSBnZXQgZGlzYWJsZVRodW1iKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmRpc2FibGVUaHVtYjtcclxuICB9XHJcblxyXG4gIC8qKiBTZXQgZ2FsbGVyeSBpbWFnZSBzaXplICovXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmltYWdlU2l6ZScpIGdldCBpbWFnZVNpemUoKTogJ2NvdmVyJyB8ICdjb250YWluJyB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuaW1hZ2VTaXplO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNldCBnYWxsZXJ5IGRvdHMgcG9zaXRpb24gKi9cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZG90c1Bvc2l0aW9uJykgZ2V0IGRvdHNQb3NpdGlvbigpOiAndG9wJyB8ICdib3R0b20nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5kb3RzUG9zaXRpb247XHJcbiAgfVxyXG5cclxuICAvKiogU2V0IGdhbGxlcnkgY291bnRlciBwb3NpdGlvbiAqL1xyXG4gIEBIb3N0QmluZGluZygnYXR0ci5jb3VudGVyUG9zaXRpb24nKSBnZXQgY291bnRlclBvc2l0aW9uKCk6ICd0b3AnIHwgJ2JvdHRvbScge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvdW50ZXJQb3NpdGlvbjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==