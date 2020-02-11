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
var TapClick = /** @class */ (function () {
    function TapClick(_el) {
        this._el = _el;
        this.clickListener = Subscription.EMPTY;
        this.tapClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TapClick.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.activateClickEvent();
    };
    /**
     * @return {?}
     */
    TapClick.prototype.activateClickEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof Hammer !== 'undefined') {
            // Use Hammer.js tap event
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.on('tap', function () {
                if (!_this.tapClickDisabled) {
                    _this.tapClick.emit(null);
                }
            });
        }
        else {
            // Use normal click event
            this.clickListener = fromEvent(this._el.nativeElement, 'click').pipe(filter(function () { return !_this.tapClickDisabled; }), tap(function () { return _this.tapClick.emit(null); })).subscribe();
        }
    };
    /**
     * @return {?}
     */
    TapClick.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._hammer) {
            this._hammer.destroy();
        }
        this.clickListener.unsubscribe();
    };
    TapClick.decorators = [
        { type: Directive, args: [{
                    selector: '[tapClick]'
                },] }
    ];
    /** @nocollapse */
    TapClick.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    TapClick.propDecorators = {
        tapClickDisabled: [{ type: Input }],
        tapClick: [{ type: Output }]
    };
    return TapClick;
}());
export { TapClick };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFwLWNsaWNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90YXAtY2xpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTzdDO0lBVUUsa0JBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBSm5DLGtCQUFhLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUV6QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUd4QyxDQUFDOzs7O0lBRUQsMkJBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELHFDQUFrQjs7O0lBQWxCO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDakMsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzFCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMxQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLHlCQUF5QjtZQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ2xFLE1BQU0sQ0FBQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQXRCLENBQXNCLENBQUMsRUFDcEMsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUNwQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7O0lBRUQsOEJBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQVhxRCxVQUFVOzs7bUNBZ0I3RCxLQUFLOzJCQUNMLE1BQU07O0lBaUNULGVBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXRDWSxRQUFROzs7Ozs7SUFFbkIsMkJBQXFCOztJQUNyQixpQ0FBbUM7O0lBQ25DLG9DQUFtQzs7SUFDbkMsNEJBQXdDOzs7OztJQUU1Qix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IEhhbW1lcjogYW55O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIHVzZXMgdGFwIGV2ZW50IGlmIEhhbW1lckpTIGlzIGxvYWRlZCwgb3RoZXJ3aXNlIGl0IGZhbGxzIGJhY2sgdG8gbm9ybWFsIGNsaWNrIGV2ZW50XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1t0YXBDbGlja10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYXBDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfaGFtbWVyOiBhbnk7XHJcbiAgY2xpY2tMaXN0ZW5lciA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBASW5wdXQoKSB0YXBDbGlja0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSB0YXBDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZUNsaWNrRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlQ2xpY2tFdmVudCgpIHtcclxuICAgIGlmICh0eXBlb2YgSGFtbWVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBVc2UgSGFtbWVyLmpzIHRhcCBldmVudFxyXG4gICAgICB0aGlzLl9oYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl9oYW1tZXIub24oJ3RhcCcsICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMudGFwQ2xpY2tEaXNhYmxlZCkge1xyXG4gICAgICAgICAgdGhpcy50YXBDbGljay5lbWl0KG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBVc2Ugbm9ybWFsIGNsaWNrIGV2ZW50XHJcbiAgICAgIHRoaXMuY2xpY2tMaXN0ZW5lciA9IGZyb21FdmVudCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnY2xpY2snKS5waXBlKFxyXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy50YXBDbGlja0Rpc2FibGVkKSxcclxuICAgICAgICB0YXAoKCkgPT4gdGhpcy50YXBDbGljay5lbWl0KG51bGwpKVxyXG4gICAgICApLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5faGFtbWVyKSB7XHJcbiAgICAgIHRoaXMuX2hhbW1lci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsaWNrTGlzdGVuZXIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19