/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, HostBinding, NgZone, ElementRef, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThumbnailsPosition, ThumbnailsMode } from '../models/constants';
var GalleryThumbsComponent = /** @class */ (function () {
    function GalleryThumbsComponent(_el, _zone) {
        var _this = this;
        this._el = _el;
        this._zone = _zone;
        /**
         * Sliding worker
         */
        this._slidingWorker$ = new BehaviorSubject({ value: 0, active: false });
        /**
         * Current slider position in free sliding mode
         */
        this._freeModeCurrentOffset = 0;
        /**
         * Stream that emits when the active item should change
         */
        this.action = new EventEmitter();
        /**
         * Stream that emits when thumb is clicked
         */
        this.thumbClick = new EventEmitter();
        /**
         * Stream that emits when an error occurs
         */
        this.error = new EventEmitter();
        // Activate sliding worker
        this.sliderState$ = this._slidingWorker$.pipe(map(function (state) { return ({
            style: _this.getSliderStyles(state),
            active: state.active
        }); }));
    }
    /**
     * @return {?}
     */
    GalleryThumbsComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Refresh the slider
        this.updateSlider({ value: 0, active: false });
        this._freeModeCurrentOffset = 0;
    };
    /**
     * @return {?}
     */
    GalleryThumbsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.gestures && !this.config.disableThumb && typeof Hammer !== 'undefined') {
            /** @type {?} */
            var direction = void 0;
            switch (this.config.thumbPosition) {
                case ThumbnailsPosition.Right:
                case ThumbnailsPosition.Left:
                    direction = Hammer.DIRECTION_VERTICAL;
                    break;
                case ThumbnailsPosition.Top:
                case ThumbnailsPosition.Bottom:
                    direction = Hammer.DIRECTION_HORIZONTAL;
                    break;
            }
            // Activate gestures
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.get('pan').set({ direction: direction });
            this._zone.runOutsideAngular(function () {
                // Move the slider
                switch (_this.config.thumbMode) {
                    case ThumbnailsMode.Strict:
                        _this._hammer.on('pan', function (e) { return _this.strictMode(e); });
                        break;
                    case ThumbnailsMode.Free:
                        _this._hammer.on('pan', function (e) { return _this.freeMode(e); });
                }
            });
        }
    };
    /**
     * @return {?}
     */
    GalleryThumbsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._hammer) {
            this._hammer.destroy();
        }
    };
    /**
     * Sliding strict mode
     */
    /**
     * Sliding strict mode
     * @private
     * @param {?} e
     * @return {?}
     */
    GalleryThumbsComponent.prototype.strictMode = /**
     * Sliding strict mode
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Right:
            case ThumbnailsPosition.Left:
                this.updateSlider({ value: e.deltaY, active: true });
                if (e.isFinal) {
                    this.updateSlider({ value: 0, active: false });
                    this.verticalPan(e);
                }
                break;
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.updateSlider({ value: e.deltaX, active: true });
                if (e.isFinal) {
                    this.updateSlider({ value: 0, active: false });
                    this.horizontalPan(e);
                }
        }
    };
    /**
     * Sliding free mode
     */
    /**
     * Sliding free mode
     * @private
     * @param {?} e
     * @return {?}
     */
    GalleryThumbsComponent.prototype.freeMode = /**
     * Sliding free mode
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Right:
            case ThumbnailsPosition.Left:
                this.updateSlider({ value: this._freeModeCurrentOffset + e.deltaY, active: true });
                if (e.isFinal) {
                    if (this.minFreeScrollExceeded(e.deltaY, this.config.thumbWidth, this.config.thumbHeight)) {
                        this._freeModeCurrentOffset = -(this.state.items.length - 1 - this.state.currIndex) * this.config.thumbHeight;
                    }
                    else if (this.maxFreeScrollExceeded(e.deltaY, this.config.thumbHeight, this.config.thumbWidth)) {
                        this._freeModeCurrentOffset = this.state.currIndex * this.config.thumbHeight;
                    }
                    else {
                        this._freeModeCurrentOffset += e.deltaY;
                    }
                    this.updateSlider({ value: this._freeModeCurrentOffset, active: false });
                }
                break;
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.updateSlider({ value: this._freeModeCurrentOffset + e.deltaX, active: true });
                if (e.isFinal) {
                    if (this.minFreeScrollExceeded(e.deltaX, this.config.thumbHeight, this.config.thumbWidth)) {
                        this._freeModeCurrentOffset = -(this.state.items.length - 1 - this.state.currIndex) * this.config.thumbWidth;
                    }
                    else if (this.maxFreeScrollExceeded(e.deltaX, this.config.thumbWidth, this.config.thumbHeight)) {
                        this._freeModeCurrentOffset = this.state.currIndex * this.config.thumbWidth;
                    }
                    else {
                        this._freeModeCurrentOffset += e.deltaX;
                    }
                    this.updateSlider({ value: this._freeModeCurrentOffset, active: false });
                }
        }
    };
    /**
     * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
     */
    /**
     * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
     * @private
     * @param {?} delta
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    GalleryThumbsComponent.prototype.minFreeScrollExceeded = /**
     * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
     * @private
     * @param {?} delta
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (delta, width, height) {
        return -(this._freeModeCurrentOffset + delta - width / 2) > (this.state.items.length - this.state.currIndex) * height;
    };
    /**
     * Check if the maximum free scroll is exceeded (used in Top, Right directions)
     */
    /**
     * Check if the maximum free scroll is exceeded (used in Top, Right directions)
     * @private
     * @param {?} delta
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    GalleryThumbsComponent.prototype.maxFreeScrollExceeded = /**
     * Check if the maximum free scroll is exceeded (used in Top, Right directions)
     * @private
     * @param {?} delta
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (delta, width, height) {
        return this._freeModeCurrentOffset + delta > (this.state.currIndex * width) + (height / 2);
    };
    /**
     * Convert sliding state to styles
     */
    /**
     * Convert sliding state to styles
     * @private
     * @param {?} state
     * @return {?}
     */
    GalleryThumbsComponent.prototype.getSliderStyles = /**
     * Convert sliding state to styles
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var value;
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.width = '100%';
                this.height = this.config.thumbHeight + 'px';
                value = -(this.state.currIndex * this.config.thumbWidth) - (this.config.thumbWidth / 2 - state.value);
                return {
                    transform: "translate3d(" + value + "px, 0, 0)",
                    width: this.state.items.length * this.config.thumbWidth + 'px',
                    height: '100%'
                };
            case ThumbnailsPosition.Left:
            case ThumbnailsPosition.Right:
                this.width = this.config.thumbWidth + 'px';
                this.height = '100%';
                value = -(this.state.currIndex * this.config.thumbHeight) - (this.config.thumbHeight / 2 - state.value);
                return {
                    transform: "translate3d(0, " + value + "px, 0)",
                    width: '100%',
                    height: this.state.items.length * this.config.thumbHeight + 'px'
                };
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    GalleryThumbsComponent.prototype.verticalPan = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!(e.direction & Hammer.DIRECTION_UP && e.offsetDirection & Hammer.DIRECTION_VERTICAL)) {
            return;
        }
        if (e.velocityY > 0.3) {
            this.prev();
        }
        else if (e.velocityY < -0.3) {
            this.next();
        }
        else {
            if (e.deltaY / 2 <= -this.config.thumbHeight * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaY / 2 >= this.config.thumbHeight * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    GalleryThumbsComponent.prototype.horizontalPan = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!(e.direction & Hammer.DIRECTION_HORIZONTAL && e.offsetDirection & Hammer.DIRECTION_HORIZONTAL)) {
            return;
        }
        if (e.velocityX > 0.3) {
            this.prev();
        }
        else if (e.velocityX < -0.3) {
            this.next();
        }
        else {
            if (e.deltaX / 2 <= -this.config.thumbWidth * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaX / 2 >= this.config.thumbWidth * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    GalleryThumbsComponent.prototype.next = /**
     * @private
     * @return {?}
     */
    function () {
        this.action.emit('next');
    };
    /**
     * @private
     * @return {?}
     */
    GalleryThumbsComponent.prototype.prev = /**
     * @private
     * @return {?}
     */
    function () {
        this.action.emit('prev');
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    GalleryThumbsComponent.prototype.updateSlider = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var newState = tslib_1.__assign({}, this._slidingWorker$.value, state);
        this._slidingWorker$.next(newState);
    };
    GalleryThumbsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-thumbs',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <div *ngIf=\"sliderState$ | async; let sliderState\"\n         class=\"g-thumbs-container\">\n      <div class=\"g-slider\"\n           [class.g-no-transition]=\"sliderState.active\"\n           [ngStyle]=\"sliderState.style\">\n\n        <gallery-thumb *ngFor=\"let item of state.items;let i = index\"\n                       [type]=\"item.type\"\n                       [config]=\"config\"\n                       [data]=\"item.data\"\n                       [currIndex]=\"state.currIndex\"\n                       [index]=\"i\"\n                       [tapClickDisabled]=\"config.disableThumb\"\n                       (tapClick)=\"thumbClick.emit(i)\"\n                       (error)=\"error.emit({itemIndex: i, error: $event})\"></gallery-thumb>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryThumbsComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    GalleryThumbsComponent.propDecorators = {
        state: [{ type: Input }],
        config: [{ type: Input }],
        action: [{ type: Output }],
        thumbClick: [{ type: Output }],
        error: [{ type: Output }],
        height: [{ type: HostBinding, args: ['style.height',] }],
        width: [{ type: HostBinding, args: ['style.width',] }]
    };
    return GalleryThumbsComponent;
}());
export { GalleryThumbsComponent };
if (false) {
    /**
     * Sliding worker
     * @type {?}
     * @private
     */
    GalleryThumbsComponent.prototype._slidingWorker$;
    /**
     * HammerJS instance
     * @type {?}
     * @private
     */
    GalleryThumbsComponent.prototype._hammer;
    /**
     * Current slider position in free sliding mode
     * @type {?}
     * @private
     */
    GalleryThumbsComponent.prototype._freeModeCurrentOffset;
    /**
     * Stream that emits sliding state
     * @type {?}
     */
    GalleryThumbsComponent.prototype.sliderState$;
    /**
     * Gallery state
     * @type {?}
     */
    GalleryThumbsComponent.prototype.state;
    /**
     * Gallery config
     * @type {?}
     */
    GalleryThumbsComponent.prototype.config;
    /**
     * Stream that emits when the active item should change
     * @type {?}
     */
    GalleryThumbsComponent.prototype.action;
    /**
     * Stream that emits when thumb is clicked
     * @type {?}
     */
    GalleryThumbsComponent.prototype.thumbClick;
    /**
     * Stream that emits when an error occurs
     * @type {?}
     */
    GalleryThumbsComponent.prototype.error;
    /**
     * Host height
     * @type {?}
     */
    GalleryThumbsComponent.prototype.height;
    /**
     * Host width
     * @type {?}
     */
    GalleryThumbsComponent.prototype.width;
    /**
     * @type {?}
     * @private
     */
    GalleryThumbsComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    GalleryThumbsComponent.prototype._zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS10aHVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nYWxsZXJ5LXRodW1icy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBSU4sV0FBVyxFQUNYLE1BQU0sRUFDTixVQUFVLEVBQ1YsWUFBWSxFQUNaLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLekU7SUEwREUsZ0NBQW9CLEdBQWUsRUFBVSxLQUFhO1FBQTFELGlCQU9DO1FBUG1CLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFROzs7O1FBaEN6QyxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFjLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQzs7OztRQU12RiwyQkFBc0IsR0FBRyxDQUFDLENBQUM7Ozs7UUFZekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDOzs7O1FBRzdDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDOzs7O1FBR3hDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQVVqRCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFrQixJQUFLLE9BQUEsQ0FBQztZQUN6RSxLQUFLLEVBQUUsS0FBSSxDQUFDLGVBQWUs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QUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTyxxQ0FBSTs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRU8sNkNBQVk7Ozs7O0lBQXBCLFVBQXFCLEtBQWtCOztZQUMvQixRQUFRLHdCQUFvQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBSyxLQUFLLENBQUM7UUFDdkUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBdFFGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLG94QkFrQlQ7aUJBQ0Y7Ozs7Z0JBbkNDLFVBQVU7Z0JBRFYsTUFBTTs7O3dCQW9ETCxLQUFLO3lCQUdMLEtBQUs7eUJBR0wsTUFBTTs2QkFHTixNQUFNO3dCQUdOLE1BQU07eUJBR04sV0FBVyxTQUFDLGNBQWM7d0JBRzFCLFdBQVcsU0FBQyxhQUFhOztJQStNNUIsNkJBQUM7Q0FBQSxBQXZRRCxJQXVRQztTQWhQWSxzQkFBc0I7Ozs7Ozs7SUFHakMsaURBQStGOzs7Ozs7SUFHL0YseUNBQXFCOzs7Ozs7SUFHckIsd0RBQW1DOzs7OztJQUduQyw4Q0FBc0M7Ozs7O0lBR3RDLHVDQUE2Qjs7Ozs7SUFHN0Isd0NBQStCOzs7OztJQUcvQix3Q0FBdUQ7Ozs7O0lBR3ZELDRDQUFrRDs7Ozs7SUFHbEQsdUNBQW1EOzs7OztJQUduRCx3Q0FBNEM7Ozs7O0lBRzVDLHVDQUEwQzs7Ozs7SUFFOUIscUNBQXVCOzs7OztJQUFFLHVDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBIb3N0QmluZGluZyxcclxuICBOZ1pvbmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5U3RhdGUsIEdhbGxlcnlFcnJvciB9IGZyb20gJy4uL21vZGVscy9nYWxsZXJ5Lm1vZGVsJztcclxuaW1wb3J0IHsgVGh1bWJuYWlsc1Bvc2l0aW9uLCBUaHVtYm5haWxzTW9kZSB9IGZyb20gJy4uL21vZGVscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBTbGlkZXJTdGF0ZSwgV29ya2VyU3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvc2xpZGVyLm1vZGVsJztcclxuXHJcbmRlY2xhcmUgY29uc3QgSGFtbWVyOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dhbGxlcnktdGh1bWJzJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiAqbmdJZj1cInNsaWRlclN0YXRlJCB8IGFzeW5jOyBsZXQgc2xpZGVyU3RhdGVcIlxyXG4gICAgICAgICBjbGFzcz1cImctdGh1bWJzLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZy1zbGlkZXJcIlxyXG4gICAgICAgICAgIFtjbGFzcy5nLW5vLXRyYW5zaXRpb25dPVwic2xpZGVyU3RhdGUuYWN0aXZlXCJcclxuICAgICAgICAgICBbbmdTdHlsZV09XCJzbGlkZXJTdGF0ZS5zdHlsZVwiPlxyXG5cclxuICAgICAgICA8Z2FsbGVyeS10aHVtYiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdGF0ZS5pdGVtcztsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJpdGVtLnR5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiY29uZmlnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJpdGVtLmRhdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtjdXJySW5kZXhdPVwic3RhdGUuY3VyckluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgW3RhcENsaWNrRGlzYWJsZWRdPVwiY29uZmlnLmRpc2FibGVUaHVtYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKHRhcENsaWNrKT1cInRodW1iQ2xpY2suZW1pdChpKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKT1cImVycm9yLmVtaXQoe2l0ZW1JbmRleDogaSwgZXJyb3I6ICRldmVudH0pXCI+PC9nYWxsZXJ5LXRodW1iPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlUaHVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgLyoqIFNsaWRpbmcgd29ya2VyICovXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfc2xpZGluZ1dvcmtlciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFdvcmtlclN0YXRlPih7dmFsdWU6IDAsIGFjdGl2ZTogZmFsc2V9KTtcclxuXHJcbiAgLyoqIEhhbW1lckpTIGluc3RhbmNlICovXHJcbiAgcHJpdmF0ZSBfaGFtbWVyOiBhbnk7XHJcblxyXG4gIC8qKiBDdXJyZW50IHNsaWRlciBwb3NpdGlvbiBpbiBmcmVlIHNsaWRpbmcgbW9kZSAqL1xyXG4gIHByaXZhdGUgX2ZyZWVNb2RlQ3VycmVudE9mZnNldCA9IDA7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBzbGlkaW5nIHN0YXRlICovXHJcbiAgc2xpZGVyU3RhdGUkOiBPYnNlcnZhYmxlPFNsaWRlclN0YXRlPjtcclxuXHJcbiAgLyoqIEdhbGxlcnkgc3RhdGUgKi9cclxuICBASW5wdXQoKSBzdGF0ZTogR2FsbGVyeVN0YXRlO1xyXG5cclxuICAvKiogR2FsbGVyeSBjb25maWcgKi9cclxuICBASW5wdXQoKSBjb25maWc6IEdhbGxlcnlDb25maWc7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHRoZSBhY3RpdmUgaXRlbSBzaG91bGQgY2hhbmdlICovXHJcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyPigpO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiB0aHVtYiBpcyBjbGlja2VkICovXHJcbiAgQE91dHB1dCgpIHRodW1iQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gYW4gZXJyb3Igb2NjdXJzICovXHJcbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxHYWxsZXJ5RXJyb3I+KCk7XHJcblxyXG4gIC8qKiBIb3N0IGhlaWdodCAqL1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBIb3N0IHdpZHRoICovXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpIHdpZHRoOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF96b25lOiBOZ1pvbmUpIHtcclxuXHJcbiAgICAvLyBBY3RpdmF0ZSBzbGlkaW5nIHdvcmtlclxyXG4gICAgdGhpcy5zbGlkZXJTdGF0ZSQgPSB0aGlzLl9zbGlkaW5nV29ya2VyJC5waXBlKG1hcCgoc3RhdGU6IFdvcmtlclN0YXRlKSA9PiAoe1xyXG4gICAgICBzdHlsZTogdGhpcy5nZXRTbGlkZXJTdHlsZXMoc3RhdGUpLFxyXG4gICAgICBhY3RpdmU6IHN0YXRlLmFjdGl2ZVxyXG4gICAgfSkpKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgLy8gUmVmcmVzaCB0aGUgc2xpZGVyXHJcbiAgICB0aGlzLnVwZGF0ZVNsaWRlcih7dmFsdWU6IDAsIGFjdGl2ZTogZmFsc2V9KTtcclxuICAgIHRoaXMuX2ZyZWVNb2RlQ3VycmVudE9mZnNldCA9IDA7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5nZXN0dXJlcyAmJiAhdGhpcy5jb25maWcuZGlzYWJsZVRodW1iICYmIHR5cGVvZiBIYW1tZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcblxyXG4gICAgICBsZXQgZGlyZWN0aW9uOiBudW1iZXI7XHJcblxyXG4gICAgICBzd2l0Y2ggKHRoaXMuY29uZmlnLnRodW1iUG9zaXRpb24pIHtcclxuICAgICAgICBjYXNlIFRodW1ibmFpbHNQb3NpdGlvbi5SaWdodDpcclxuICAgICAgICBjYXNlIFRodW1ibmFpbHNQb3NpdGlvbi5MZWZ0OlxyXG4gICAgICAgICAgZGlyZWN0aW9uID0gSGFtbWVyLkRJUkVDVElPTl9WRVJUSUNBTDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVGh1bWJuYWlsc1Bvc2l0aW9uLlRvcDpcclxuICAgICAgICBjYXNlIFRodW1ibmFpbHNQb3NpdGlvbi5Cb3R0b206XHJcbiAgICAgICAgICBkaXJlY3Rpb24gPSBIYW1tZXIuRElSRUNUSU9OX0hPUklaT05UQUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQWN0aXZhdGUgZ2VzdHVyZXNcclxuICAgICAgdGhpcy5faGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgdGhpcy5faGFtbWVyLmdldCgncGFuJykuc2V0KHtkaXJlY3Rpb259KTtcclxuXHJcbiAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIC8vIE1vdmUgdGhlIHNsaWRlclxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jb25maWcudGh1bWJNb2RlKSB7XHJcbiAgICAgICAgICBjYXNlIFRodW1ibmFpbHNNb2RlLlN0cmljdDpcclxuICAgICAgICAgICAgdGhpcy5faGFtbWVyLm9uKCdwYW4nLCAoZSkgPT4gdGhpcy5zdHJpY3RNb2RlKGUpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFRodW1ibmFpbHNNb2RlLkZyZWU6XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbW1lci5vbigncGFuJywgKGUpID0+IHRoaXMuZnJlZU1vZGUoZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLl9oYW1tZXIpIHtcclxuICAgICAgdGhpcy5faGFtbWVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNsaWRpbmcgc3RyaWN0IG1vZGVcclxuICAgKi9cclxuICBwcml2YXRlIHN0cmljdE1vZGUoZSkge1xyXG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZy50aHVtYlBvc2l0aW9uKSB7XHJcbiAgICAgIGNhc2UgVGh1bWJuYWlsc1Bvc2l0aW9uLlJpZ2h0OlxyXG4gICAgICBjYXNlIFRodW1ibmFpbHNQb3NpdGlvbi5MZWZ0OlxyXG4gICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKHt2YWx1ZTogZS5kZWx0YVksIGFjdGl2ZTogdHJ1ZX0pO1xyXG4gICAgICAgIGlmIChlLmlzRmluYWwpIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKHt2YWx1ZTogMCwgYWN0aXZlOiBmYWxzZX0pO1xyXG4gICAgICAgICAgdGhpcy52ZXJ0aWNhbFBhbihlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVGh1bWJuYWlsc1Bvc2l0aW9uLlRvcDpcclxuICAgICAgY2FzZSBUaHVtYm5haWxzUG9zaXRpb24uQm90dG9tOlxyXG4gICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKHt2YWx1ZTogZS5kZWx0YVgsIGFjdGl2ZTogdHJ1ZX0pO1xyXG4gICAgICAgIGlmIChlLmlzRmluYWwpIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKHt2YWx1ZTogMCwgYWN0aXZlOiBmYWxzZX0pO1xyXG4gICAgICAgICAgdGhpcy5ob3Jpem9udGFsUGFuKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNsaWRpbmcgZnJlZSBtb2RlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBmcmVlTW9kZShlKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnLnRodW1iUG9zaXRpb24pIHtcclxuICAgICAgY2FzZSBUaHVtYm5haWxzUG9zaXRpb24uUmlnaHQ6XHJcbiAgICAgIGNhc2UgVGh1bWJuYWlsc1Bvc2l0aW9uLkxlZnQ6XHJcbiAgICAgICAgdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiB0aGlzLl9mcmVlTW9kZUN1cnJlbnRPZmZzZXQgKyBlLmRlbHRhWSwgYWN0aXZlOiB0cnVlfSk7XHJcbiAgICAgICAgaWYgKGUuaXNGaW5hbCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMubWluRnJlZVNjcm9sbEV4Y2VlZGVkKGUuZGVsdGFZLCB0aGlzLmNvbmZpZy50aHVtYldpZHRoLCB0aGlzLmNvbmZpZy50aHVtYkhlaWdodCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZnJlZU1vZGVDdXJyZW50T2Zmc2V0ID0gLSh0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAtIDEgLSB0aGlzLnN0YXRlLmN1cnJJbmRleCkgKiB0aGlzLmNvbmZpZy50aHVtYkhlaWdodDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXhGcmVlU2Nyb2xsRXhjZWVkZWQoZS5kZWx0YVksIHRoaXMuY29uZmlnLnRodW1iSGVpZ2h0LCB0aGlzLmNvbmZpZy50aHVtYldpZHRoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9mcmVlTW9kZUN1cnJlbnRPZmZzZXQgPSB0aGlzLnN0YXRlLmN1cnJJbmRleCAqIHRoaXMuY29uZmlnLnRodW1iSGVpZ2h0O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZnJlZU1vZGVDdXJyZW50T2Zmc2V0ICs9IGUuZGVsdGFZO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiB0aGlzLl9mcmVlTW9kZUN1cnJlbnRPZmZzZXQsIGFjdGl2ZTogZmFsc2V9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVGh1bWJuYWlsc1Bvc2l0aW9uLlRvcDpcclxuICAgICAgY2FzZSBUaHVtYm5haWxzUG9zaXRpb24uQm90dG9tOlxyXG4gICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKHt2YWx1ZTogdGhpcy5fZnJlZU1vZGVDdXJyZW50T2Zmc2V0ICsgZS5kZWx0YVgsIGFjdGl2ZTogdHJ1ZX0pO1xyXG4gICAgICAgIGlmIChlLmlzRmluYWwpIHtcclxuICAgICAgICAgIGlmICh0aGlzLm1pbkZyZWVTY3JvbGxFeGNlZWRlZChlLmRlbHRhWCwgdGhpcy5jb25maWcudGh1bWJIZWlnaHQsIHRoaXMuY29uZmlnLnRodW1iV2lkdGgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZyZWVNb2RlQ3VycmVudE9mZnNldCA9IC0odGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGggLSAxIC0gdGhpcy5zdGF0ZS5jdXJySW5kZXgpICogdGhpcy5jb25maWcudGh1bWJXaWR0aDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXhGcmVlU2Nyb2xsRXhjZWVkZWQoZS5kZWx0YVgsIHRoaXMuY29uZmlnLnRodW1iV2lkdGgsIHRoaXMuY29uZmlnLnRodW1iSGVpZ2h0KSkge1xyXG4gICAgICAgICAgICB0aGlzLl9mcmVlTW9kZUN1cnJlbnRPZmZzZXQgPSB0aGlzLnN0YXRlLmN1cnJJbmRleCAqIHRoaXMuY29uZmlnLnRodW1iV2lkdGg7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9mcmVlTW9kZUN1cnJlbnRPZmZzZXQgKz0gZS5kZWx0YVg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcih7dmFsdWU6IHRoaXMuX2ZyZWVNb2RlQ3VycmVudE9mZnNldCwgYWN0aXZlOiBmYWxzZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHRoZSBtaW5pbXVtIGZyZWUgc2Nyb2xsIGlzIGV4Y2VlZGVkICh1c2VkIGluIEJvdHRvbSwgTGVmdCBkaXJlY3Rpb25zKVxyXG4gICAqL1xyXG4gIHByaXZhdGUgbWluRnJlZVNjcm9sbEV4Y2VlZGVkKGRlbHRhOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gLSh0aGlzLl9mcmVlTW9kZUN1cnJlbnRPZmZzZXQgKyBkZWx0YSAtIHdpZHRoIC8gMikgPiAodGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGggLSB0aGlzLnN0YXRlLmN1cnJJbmRleCkgKiBoZWlnaHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiB0aGUgbWF4aW11bSBmcmVlIHNjcm9sbCBpcyBleGNlZWRlZCAodXNlZCBpbiBUb3AsIFJpZ2h0IGRpcmVjdGlvbnMpXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBtYXhGcmVlU2Nyb2xsRXhjZWVkZWQoZGVsdGE6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9mcmVlTW9kZUN1cnJlbnRPZmZzZXQgKyBkZWx0YSA+ICh0aGlzLnN0YXRlLmN1cnJJbmRleCAqIHdpZHRoKSArIChoZWlnaHQgLyAyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgc2xpZGluZyBzdGF0ZSB0byBzdHlsZXNcclxuICAgKi9cclxuICBwcml2YXRlIGdldFNsaWRlclN0eWxlcyhzdGF0ZTogV29ya2VyU3RhdGUpOiBhbnkge1xyXG4gICAgbGV0IHZhbHVlOiBudW1iZXI7XHJcbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnLnRodW1iUG9zaXRpb24pIHtcclxuICAgICAgY2FzZSBUaHVtYm5haWxzUG9zaXRpb24uVG9wOlxyXG4gICAgICBjYXNlIFRodW1ibmFpbHNQb3NpdGlvbi5Cb3R0b206XHJcbiAgICAgICAgdGhpcy53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY29uZmlnLnRodW1iSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB2YWx1ZSA9IC0odGhpcy5zdGF0ZS5jdXJySW5kZXggKiB0aGlzLmNvbmZpZy50aHVtYldpZHRoKSAtICh0aGlzLmNvbmZpZy50aHVtYldpZHRoIC8gMiAtIHN0YXRlLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHt2YWx1ZX1weCwgMCwgMClgLFxyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoICogdGhpcy5jb25maWcudGh1bWJXaWR0aCArICdweCcsXHJcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgVGh1bWJuYWlsc1Bvc2l0aW9uLkxlZnQ6XHJcbiAgICAgIGNhc2UgVGh1bWJuYWlsc1Bvc2l0aW9uLlJpZ2h0OlxyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNvbmZpZy50aHVtYldpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICB2YWx1ZSA9IC0odGhpcy5zdGF0ZS5jdXJySW5kZXggKiB0aGlzLmNvbmZpZy50aHVtYkhlaWdodCkgLSAodGhpcy5jb25maWcudGh1bWJIZWlnaHQgLyAyIC0gc3RhdGUudmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAke3ZhbHVlfXB4LCAwKWAsXHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAqIHRoaXMuY29uZmlnLnRodW1iSGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZlcnRpY2FsUGFuKGU6IGFueSkge1xyXG4gICAgaWYgKCEoZS5kaXJlY3Rpb24gJiBIYW1tZXIuRElSRUNUSU9OX1VQICYmIGUub2Zmc2V0RGlyZWN0aW9uICYgSGFtbWVyLkRJUkVDVElPTl9WRVJUSUNBTCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGUudmVsb2NpdHlZID4gMC4zKSB7XHJcbiAgICAgIHRoaXMucHJldigpO1xyXG4gICAgfSBlbHNlIGlmIChlLnZlbG9jaXR5WSA8IC0wLjMpIHtcclxuICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoZS5kZWx0YVkgLyAyIDw9IC10aGlzLmNvbmZpZy50aHVtYkhlaWdodCAqIHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIC8gdGhpcy5jb25maWcucGFuU2Vuc2l0aXZpdHkpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgfSBlbHNlIGlmIChlLmRlbHRhWSAvIDIgPj0gdGhpcy5jb25maWcudGh1bWJIZWlnaHQgKiB0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAvIHRoaXMuY29uZmlnLnBhblNlbnNpdGl2aXR5KSB7XHJcbiAgICAgICAgdGhpcy5wcmV2KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24uZW1pdCh0aGlzLnN0YXRlLmN1cnJJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaG9yaXpvbnRhbFBhbihlOiBhbnkpIHtcclxuICAgIGlmICghKGUuZGlyZWN0aW9uICYgSGFtbWVyLkRJUkVDVElPTl9IT1JJWk9OVEFMICYmIGUub2Zmc2V0RGlyZWN0aW9uICYgSGFtbWVyLkRJUkVDVElPTl9IT1JJWk9OVEFMKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZS52ZWxvY2l0eVggPiAwLjMpIHtcclxuICAgICAgdGhpcy5wcmV2KCk7XHJcbiAgICB9IGVsc2UgaWYgKGUudmVsb2NpdHlYIDwgLTAuMykge1xyXG4gICAgICB0aGlzLm5leHQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChlLmRlbHRhWCAvIDIgPD0gLXRoaXMuY29uZmlnLnRodW1iV2lkdGggKiB0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAvIHRoaXMuY29uZmlnLnBhblNlbnNpdGl2aXR5KSB7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5kZWx0YVggLyAyID49IHRoaXMuY29uZmlnLnRodW1iV2lkdGggKiB0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAvIHRoaXMuY29uZmlnLnBhblNlbnNpdGl2aXR5KSB7XHJcbiAgICAgICAgdGhpcy5wcmV2KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24uZW1pdCh0aGlzLnN0YXRlLmN1cnJJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmV4dCgpIHtcclxuICAgIHRoaXMuYWN0aW9uLmVtaXQoJ25leHQnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJldigpIHtcclxuICAgIHRoaXMuYWN0aW9uLmVtaXQoJ3ByZXYnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlU2xpZGVyKHN0YXRlOiBXb3JrZXJTdGF0ZSkge1xyXG4gICAgY29uc3QgbmV3U3RhdGU6IFdvcmtlclN0YXRlID0gey4uLnRoaXMuX3NsaWRpbmdXb3JrZXIkLnZhbHVlLCAuLi5zdGF0ZX07XHJcbiAgICB0aGlzLl9zbGlkaW5nV29ya2VyJC5uZXh0KG5ld1N0YXRlKTtcclxuICB9XHJcbn1cclxuIl19