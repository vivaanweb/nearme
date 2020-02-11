/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Lightbox } from './lightbox.service';
var LightboxDirective = /** @class */ (function () {
    function LightboxDirective(_lightbox, _el, _renderer) {
        this._lightbox = _lightbox;
        this._el = _el;
        this._renderer = _renderer;
        this.clickEvent = Subscription.EMPTY;
        this.index = 0;
        this.id = 'root';
    }
    /**
     * @return {?}
     */
    LightboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setStyle(this._el.nativeElement, 'cursor', 'pointer');
        this.clickEvent = fromEvent(this._el.nativeElement, 'click').pipe(tap(function () { return _this._lightbox.open(_this.index, _this.id); })).subscribe();
    };
    /**
     * @return {?}
     */
    LightboxDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clickEvent.unsubscribe();
    };
    LightboxDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lightbox]'
                },] }
    ];
    /** @nocollapse */
    LightboxDirective.ctorParameters = function () { return [
        { type: Lightbox },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    LightboxDirective.propDecorators = {
        index: [{ type: Input, args: ['lightbox',] }],
        id: [{ type: Input, args: ['gallery',] }]
    };
    return LightboxDirective;
}());
export { LightboxDirective };
if (false) {
    /** @type {?} */
    LightboxDirective.prototype.clickEvent;
    /** @type {?} */
    LightboxDirective.prototype.index;
    /** @type {?} */
    LightboxDirective.prototype.id;
    /**
     * @type {?}
     * @private
     */
    LightboxDirective.prototype._lightbox;
    /**
     * @type {?}
     * @private
     */
    LightboxDirective.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LightboxDirective.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2xpZ2h0Ym94LyIsInNvdXJjZXMiOlsibGliL2xpZ2h0Ym94LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsU0FBUyxFQUFvQixZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QztJQVVFLDJCQUFvQixTQUFtQixFQUFVLEdBQWUsRUFBVSxTQUFvQjtRQUExRSxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFMOUYsZUFBVSxHQUFxQixZQUFZLENBQUMsS0FBSyxDQUFDO1FBRS9CLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDWCxPQUFFLEdBQUcsTUFBTSxDQUFDO0lBRzlCLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQy9ELEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsRUFBRSxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FDcEQsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFKUSxRQUFRO2dCQUhHLFVBQVU7Z0JBQTRCLFNBQVM7Ozt3QkFZaEUsS0FBSyxTQUFDLFVBQVU7cUJBQ2hCLEtBQUssU0FBQyxTQUFTOztJQWVsQix3QkFBQztDQUFBLEFBdkJELElBdUJDO1NBcEJZLGlCQUFpQjs7O0lBRTVCLHVDQUFrRDs7SUFFbEQsa0NBQTZCOztJQUM3QiwrQkFBOEI7Ozs7O0lBRWxCLHNDQUEyQjs7Ozs7SUFBRSxnQ0FBdUI7Ozs7O0lBQUUsc0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbkxpa2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IExpZ2h0Ym94IH0gZnJvbSAnLi9saWdodGJveC5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2xpZ2h0Ym94XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIExpZ2h0Ym94RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBjbGlja0V2ZW50OiBTdWJzY3JpcHRpb25MaWtlID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICBASW5wdXQoJ2xpZ2h0Ym94JykgaW5kZXggPSAwO1xyXG4gIEBJbnB1dCgnZ2FsbGVyeScpIGlkID0gJ3Jvb3QnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9saWdodGJveDogTGlnaHRib3gsIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCAncG9pbnRlcicpO1xyXG4gICAgdGhpcy5jbGlja0V2ZW50ID0gZnJvbUV2ZW50KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdjbGljaycpLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB0aGlzLl9saWdodGJveC5vcGVuKHRoaXMuaW5kZXgsIHRoaXMuaWQpKVxyXG4gICAgKS5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jbGlja0V2ZW50LnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==