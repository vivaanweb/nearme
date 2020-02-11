/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
/**
 * This directive uses tap event if HammerJS is loaded, otherwise it falls back to normal click event
 */
export class TapClick {
    /**
     * @param {?} _el
     */
    constructor(_el) {
        this._el = _el;
        this.clickListener = Subscription.EMPTY;
        this.tapClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.activateClickEvent();
    }
    /**
     * @return {?}
     */
    activateClickEvent() {
        if (typeof Hammer !== 'undefined') {
            // Use Hammer.js tap event
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.on('tap', () => {
                if (!this.tapClickDisabled) {
                    this.tapClick.emit(null);
                }
            });
        }
        else {
            // Use normal click event
            this.clickListener = fromEvent(this._el.nativeElement, 'click').pipe(filter(() => !this.tapClickDisabled), tap(() => this.tapClick.emit(null))).subscribe();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._hammer) {
            this._hammer.destroy();
        }
        this.clickListener.unsubscribe();
    }
}
TapClick.decorators = [
    { type: Directive, args: [{
                selector: '[tapClick]'
            },] }
];
/** @nocollapse */
TapClick.ctorParameters = () => [
    { type: ElementRef }
];
TapClick.propDecorators = {
    tapClickDisabled: [{ type: Input }],
    tapClick: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TapClick.prototype._hammer;
    /** @type {?} */
    TapClick.prototype.clickListener;
    /** @type {?} */
    TapClick.prototype.tapClickDisabled;
    /** @type {?} */
    TapClick.prototype.tapClick;
    /**
     * @type {?}
     * @private
     */
    TapClick.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFwLWNsaWNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90YXAtY2xpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBVTdDLE1BQU0sT0FBTyxRQUFROzs7O0lBT25CLFlBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBSm5DLGtCQUFhLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUV6QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUd4QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDakMsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCx5QkFBeUI7WUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNsRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFDcEMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3BDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFYcUQsVUFBVTs7OytCQWdCN0QsS0FBSzt1QkFDTCxNQUFNOzs7Ozs7O0lBSFAsMkJBQXFCOztJQUNyQixpQ0FBbUM7O0lBQ25DLG9DQUFtQzs7SUFDbkMsNEJBQXdDOzs7OztJQUU1Qix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IEhhbW1lcjogYW55O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIHVzZXMgdGFwIGV2ZW50IGlmIEhhbW1lckpTIGlzIGxvYWRlZCwgb3RoZXJ3aXNlIGl0IGZhbGxzIGJhY2sgdG8gbm9ybWFsIGNsaWNrIGV2ZW50XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1t0YXBDbGlja10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYXBDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfaGFtbWVyOiBhbnk7XHJcbiAgY2xpY2tMaXN0ZW5lciA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBASW5wdXQoKSB0YXBDbGlja0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSB0YXBDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZUNsaWNrRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlQ2xpY2tFdmVudCgpIHtcclxuICAgIGlmICh0eXBlb2YgSGFtbWVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBVc2UgSGFtbWVyLmpzIHRhcCBldmVudFxyXG4gICAgICB0aGlzLl9oYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl9oYW1tZXIub24oJ3RhcCcsICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMudGFwQ2xpY2tEaXNhYmxlZCkge1xyXG4gICAgICAgICAgdGhpcy50YXBDbGljay5lbWl0KG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBVc2Ugbm9ybWFsIGNsaWNrIGV2ZW50XHJcbiAgICAgIHRoaXMuY2xpY2tMaXN0ZW5lciA9IGZyb21FdmVudCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnY2xpY2snKS5waXBlKFxyXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy50YXBDbGlja0Rpc2FibGVkKSxcclxuICAgICAgICB0YXAoKCkgPT4gdGhpcy50YXBDbGljay5lbWl0KG51bGwpKVxyXG4gICAgICApLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5faGFtbWVyKSB7XHJcbiAgICAgIHRoaXMuX2hhbW1lci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsaWNrTGlzdGVuZXIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19