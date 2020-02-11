/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, HostBinding, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
export class GalleryCoreComponent {
    constructor() {
        this.action = new EventEmitter();
        this.itemClick = new EventEmitter();
        this.thumbClick = new EventEmitter();
        this.error = new EventEmitter();
    }
    /**
     * Set thumbnails position
     * @return {?}
     */
    get thumbPosition() {
        return this.config.thumbPosition;
    }
    /**
     * Set sliding direction
     * @return {?}
     */
    get slidingDirection() {
        return this.config.slidingDirection;
    }
    /**
     * Disable thumbnails clicks
     * @return {?}
     */
    get disableThumb() {
        return this.config.disableThumb;
    }
    /**
     * Set gallery image size
     * @return {?}
     */
    get imageSize() {
        return this.config.imageSize;
    }
    /**
     * Set gallery dots position
     * @return {?}
     */
    get dotsPosition() {
        return this.config.dotsPosition;
    }
    /**
     * Set gallery counter position
     * @return {?}
     */
    get counterPosition() {
        return this.config.counterPosition;
    }
}
GalleryCoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-core',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <gallery-thumbs *ngIf="config.thumb"
                    [state]="state"
                    [config]="config"
                    (action)="action.emit($event)"
                    (thumbClick)="thumbClick.emit($event)">
    </gallery-thumbs>
    <div class="g-box">
      <gallery-slider [state]="state"
                      [config]="config"
                      (action)="action.emit($event)"
                      (itemClick)="itemClick.emit($event)"
                      (error)="error.emit($event)">

        <gallery-nav *ngIf="config.nav && state.items.length > 1"
                     [state]="state"
                     [config]="config"
                     (action)="action.emit($event)">
        </gallery-nav>

      </gallery-slider>

      <gallery-dots *ngIf="config.dots"
                    [state]="state"
                    [config]="config"
                    (action)="action.emit($event)">
      </gallery-dots>

      <gallery-counter *ngIf="config.counter"
                       [state]="state">
      </gallery-counter>
    </div>
  `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1jb3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ2FsbGVyeS1jb3JlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUF5QzdHLE1BQU0sT0FBTyxvQkFBb0I7SUFyQ2pDO1FBeUNZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUM3QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN2QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7SUFnQ3JELENBQUM7Ozs7O0lBN0JDLElBQXVDLGFBQWE7UUFDbEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUdELElBQTBDLGdCQUFnQjtRQUN4RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFHRCxJQUFzQyxZQUFZO1FBQ2hELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFHRCxJQUFtQyxTQUFTO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFHRCxJQUFzQyxZQUFZO1FBQ2hELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFHRCxJQUF5QyxlQUFlO1FBQ3RELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDckMsQ0FBQzs7O1lBMUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQ1Q7YUFDRjs7O29CQUdFLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxNQUFNO3dCQUNOLE1BQU07eUJBQ04sTUFBTTtvQkFDTixNQUFNOzRCQUdOLFdBQVcsU0FBQyxvQkFBb0I7K0JBS2hDLFdBQVcsU0FBQyx1QkFBdUI7MkJBS25DLFdBQVcsU0FBQyxtQkFBbUI7d0JBSy9CLFdBQVcsU0FBQyxnQkFBZ0I7MkJBSzVCLFdBQVcsU0FBQyxtQkFBbUI7OEJBSy9CLFdBQVcsU0FBQyxzQkFBc0I7Ozs7SUFqQ25DLHFDQUE2Qjs7SUFDN0Isc0NBQStCOztJQUMvQixzQ0FBdUQ7O0lBQ3ZELHlDQUFpRDs7SUFDakQsMENBQWtEOztJQUNsRCxxQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEhvc3RCaW5kaW5nLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlFcnJvciwgR2FsbGVyeVN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL2dhbGxlcnkubW9kZWwnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Q29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZy5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dhbGxlcnktY29yZScsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxnYWxsZXJ5LXRodW1icyAqbmdJZj1cImNvbmZpZy50aHVtYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0YXRlXT1cInN0YXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImNvbmZpZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKGFjdGlvbik9XCJhY3Rpb24uZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAodGh1bWJDbGljayk9XCJ0aHVtYkNsaWNrLmVtaXQoJGV2ZW50KVwiPlxyXG4gICAgPC9nYWxsZXJ5LXRodW1icz5cclxuICAgIDxkaXYgY2xhc3M9XCJnLWJveFwiPlxyXG4gICAgICA8Z2FsbGVyeS1zbGlkZXIgW3N0YXRlXT1cInN0YXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiY29uZmlnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChhY3Rpb24pPVwiYWN0aW9uLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoaXRlbUNsaWNrKT1cIml0ZW1DbGljay5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGVycm9yKT1cImVycm9yLmVtaXQoJGV2ZW50KVwiPlxyXG5cclxuICAgICAgICA8Z2FsbGVyeS1uYXYgKm5nSWY9XCJjb25maWcubmF2ICYmIHN0YXRlLml0ZW1zLmxlbmd0aCA+IDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbc3RhdGVdPVwic3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImNvbmZpZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIChhY3Rpb24pPVwiYWN0aW9uLmVtaXQoJGV2ZW50KVwiPlxyXG4gICAgICAgIDwvZ2FsbGVyeS1uYXY+XHJcblxyXG4gICAgICA8L2dhbGxlcnktc2xpZGVyPlxyXG5cclxuICAgICAgPGdhbGxlcnktZG90cyAqbmdJZj1cImNvbmZpZy5kb3RzXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3RhdGVdPVwic3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiY29uZmlnXCJcclxuICAgICAgICAgICAgICAgICAgICAoYWN0aW9uKT1cImFjdGlvbi5lbWl0KCRldmVudClcIj5cclxuICAgICAgPC9nYWxsZXJ5LWRvdHM+XHJcblxyXG4gICAgICA8Z2FsbGVyeS1jb3VudGVyICpuZ0lmPVwiY29uZmlnLmNvdW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtzdGF0ZV09XCJzdGF0ZVwiPlxyXG4gICAgICA8L2dhbGxlcnktY291bnRlcj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlDb3JlQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgc3RhdGU6IEdhbGxlcnlTdGF0ZTtcclxuICBASW5wdXQoKSBjb25maWc6IEdhbGxlcnlDb25maWc7XHJcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBpdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgdGh1bWJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8R2FsbGVyeUVycm9yPigpO1xyXG5cclxuICAvKiogU2V0IHRodW1ibmFpbHMgcG9zaXRpb24gKi9cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGh1bWJQb3NpdGlvbicpIGdldCB0aHVtYlBvc2l0aW9uKCk6ICd0b3AnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy50aHVtYlBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNldCBzbGlkaW5nIGRpcmVjdGlvbiAqL1xyXG4gIEBIb3N0QmluZGluZygnYXR0ci5zbGlkaW5nRGlyZWN0aW9uJykgZ2V0IHNsaWRpbmdEaXJlY3Rpb24oKTogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuc2xpZGluZ0RpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKiBEaXNhYmxlIHRodW1ibmFpbHMgY2xpY2tzICovXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRpc2FibGVUaHVtYicpIGdldCBkaXNhYmxlVGh1bWIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZGlzYWJsZVRodW1iO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNldCBnYWxsZXJ5IGltYWdlIHNpemUgKi9cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuaW1hZ2VTaXplJykgZ2V0IGltYWdlU2l6ZSgpOiAnY292ZXInIHwgJ2NvbnRhaW4nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5pbWFnZVNpemU7XHJcbiAgfVxyXG5cclxuICAvKiogU2V0IGdhbGxlcnkgZG90cyBwb3NpdGlvbiAqL1xyXG4gIEBIb3N0QmluZGluZygnYXR0ci5kb3RzUG9zaXRpb24nKSBnZXQgZG90c1Bvc2l0aW9uKCk6ICd0b3AnIHwgJ2JvdHRvbScge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmRvdHNQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKiBTZXQgZ2FsbGVyeSBjb3VudGVyIHBvc2l0aW9uICovXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmNvdW50ZXJQb3NpdGlvbicpIGdldCBjb3VudGVyUG9zaXRpb24oKTogJ3RvcCcgfCAnYm90dG9tJyB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuY291bnRlclBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbn1cclxuIl19