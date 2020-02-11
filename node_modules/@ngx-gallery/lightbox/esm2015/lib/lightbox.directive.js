/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Lightbox } from './lightbox.service';
export class LightboxDirective {
    /**
     * @param {?} _lightbox
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(_lightbox, _el, _renderer) {
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
    ngOnInit() {
        this._renderer.setStyle(this._el.nativeElement, 'cursor', 'pointer');
        this.clickEvent = fromEvent(this._el.nativeElement, 'click').pipe(tap(() => this._lightbox.open(this.index, this.id))).subscribe();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clickEvent.unsubscribe();
    }
}
LightboxDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lightbox]'
            },] }
];
/** @nocollapse */
LightboxDirective.ctorParameters = () => [
    { type: Lightbox },
    { type: ElementRef },
    { type: Renderer2 }
];
LightboxDirective.propDecorators = {
    index: [{ type: Input, args: ['lightbox',] }],
    id: [{ type: Input, args: ['gallery',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2xpZ2h0Ym94LyIsInNvdXJjZXMiOlsibGliL2xpZ2h0Ym94LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsU0FBUyxFQUFvQixZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUs5QyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFPNUIsWUFBb0IsU0FBbUIsRUFBVSxHQUFlLEVBQVUsU0FBb0I7UUFBMUUsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBTDlGLGVBQVUsR0FBcUIsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUUvQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsT0FBRSxHQUFHLE1BQU0sQ0FBQztJQUc5QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQy9ELEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNwRCxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBSlEsUUFBUTtZQUhHLFVBQVU7WUFBNEIsU0FBUzs7O29CQVloRSxLQUFLLFNBQUMsVUFBVTtpQkFDaEIsS0FBSyxTQUFDLFNBQVM7Ozs7SUFIaEIsdUNBQWtEOztJQUVsRCxrQ0FBNkI7O0lBQzdCLCtCQUE4Qjs7Ozs7SUFFbEIsc0NBQTJCOzs7OztJQUFFLGdDQUF1Qjs7Ozs7SUFBRSxzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uTGlrZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTGlnaHRib3ggfSBmcm9tICcuL2xpZ2h0Ym94LnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbGlnaHRib3hdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlnaHRib3hEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIGNsaWNrRXZlbnQ6IFN1YnNjcmlwdGlvbkxpa2UgPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIEBJbnB1dCgnbGlnaHRib3gnKSBpbmRleCA9IDA7XHJcbiAgQElucHV0KCdnYWxsZXJ5JykgaWQgPSAncm9vdCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xpZ2h0Ym94OiBMaWdodGJveCwgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsICdwb2ludGVyJyk7XHJcbiAgICB0aGlzLmNsaWNrRXZlbnQgPSBmcm9tRXZlbnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NsaWNrJykucGlwZShcclxuICAgICAgdGFwKCgpID0+IHRoaXMuX2xpZ2h0Ym94Lm9wZW4odGhpcy5pbmRleCwgdGhpcy5pZCkpXHJcbiAgICApLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNsaWNrRXZlbnQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19