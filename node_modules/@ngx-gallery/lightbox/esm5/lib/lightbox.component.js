/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Optional, ChangeDetectionStrategy, ElementRef, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { lightboxAnimation } from './lightbox.animation';
var LightboxComponent = /** @class */ (function () {
    function LightboxComponent(_document, _focusTrapFactory, _elementRef, sanitizer) {
        this._document = _document;
        this._focusTrapFactory = _focusTrapFactory;
        this._elementRef = _elementRef;
        this.sanitizer = sanitizer;
        /**
         * State of the lightbox animation.
         */
        this.state = 'enter';
        this._savePreviouslyFocusedElement();
    }
    /** Callback, invoked whenever an animation on the host completes. */
    /**
     * Callback, invoked whenever an animation on the host completes.
     * @param {?} event
     * @return {?}
     */
    LightboxComponent.prototype.onAnimationDone = /**
     * Callback, invoked whenever an animation on the host completes.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'enter') {
            this._trapFocus();
        }
        else {
            this.overlayRef.dispose();
            this._restoreFocus();
        }
    };
    /** Moves the focus inside the focus trap. */
    /**
     * Moves the focus inside the focus trap.
     * @private
     * @return {?}
     */
    LightboxComponent.prototype._trapFocus = /**
     * Moves the focus inside the focus trap.
     * @private
     * @return {?}
     */
    function () {
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        }
        // If were to attempt to focus immediately, then the content of the lightbox would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        this._focusTrap.focusInitialElementWhenReady();
    };
    /** Saves a reference to the element that was focused before the lightbox was opened. */
    /**
     * Saves a reference to the element that was focused before the lightbox was opened.
     * @private
     * @return {?}
     */
    LightboxComponent.prototype._savePreviouslyFocusedElement = /**
     * Saves a reference to the element that was focused before the lightbox was opened.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = (/** @type {?} */ (this._document.activeElement));
            // Note that there is no focus method when rendering on the server.
            if (this._elementRef.nativeElement.focus) {
                // Move focus onto the lightbox immediately in order to prevent the user from accidentally
                // opening multiple dialogs at the same time. Needs to be async, because the element
                // may not be focusable immediately.
                Promise.resolve().then(function () { return _this._elementRef.nativeElement.focus(); });
            }
        }
    };
    /** Restores focus to the element that was focused before the lightbox opened. */
    /**
     * Restores focus to the element that was focused before the lightbox opened.
     * @private
     * @return {?}
     */
    LightboxComponent.prototype._restoreFocus = /**
     * Restores focus to the element that was focused before the lightbox opened.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var toFocus = this._elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    };
    LightboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lightbox',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [lightboxAnimation],
                    template: "\n    <gallery [id]=\"id\" [destroyRef]=\"false\" [skipInitConfig]=\"true\">\n      <i class=\"g-btn-close\" aria-label=\"Close\" (click)=\"overlayRef.detach()\"\n         [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(closeIcon)\"></i>\n    </gallery>\n  ",
                    host: {
                        'tabindex': '-1',
                        'aria-modal': 'true',
                        '[attr.id]': '"lightbox-" + id',
                        '[attr.role]': 'role',
                        '[attr.aria-labelledby]': 'ariaLabel ? null : ariaLabelledBy',
                        '[attr.aria-label]': 'ariaLabel',
                        '[attr.aria-describedby]': 'ariaDescribedBy || null',
                        '[@lightbox]': 'state',
                        '(@lightbox.done)': 'onAnimationDone($event)',
                    },
                    styles: [".cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}::ng-deep lightbox{position:relative;display:block;width:1100px;height:800px;max-width:94vw;max-height:90vh;border-radius:4px;overflow:hidden;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}::ng-deep lightbox:focus{outline:0}::ng-deep lightbox gallery{overflow:hidden;margin:0;display:block;width:100%;height:100%}::ng-deep .g-backdrop{background-color:rgba(0,0,0,.32)}::ng-deep .fullscreen{width:100%}::ng-deep .fullscreen ::ng-deep lightbox{max-width:unset;max-height:unset;position:fixed;top:0;left:0;bottom:0;right:0;height:100%;width:100%;border-radius:0}::ng-deep .g-overlay{margin:auto}@media only screen and (max-width:480px){::ng-deep .g-overlay{width:100%}::ng-deep .g-overlay ::ng-deep lightbox{max-width:unset;max-height:unset;position:fixed;top:0;left:0;bottom:0;right:0;height:100%;width:100%;border-radius:0}}::ng-deep .g-btn-close{position:absolute;right:.9em;top:.9em;z-index:60;cursor:pointer;width:20px;height:20px}@media only screen and (max-width:480px){::ng-deep .g-btn-close{right:.7em;top:.7em}}"]
                }] }
    ];
    /** @nocollapse */
    LightboxComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: FocusTrapFactory },
        { type: ElementRef },
        { type: DomSanitizer }
    ]; };
    return LightboxComponent;
}());
export { LightboxComponent };
if (false) {
    /**
     * Gallery ref id
     * @type {?}
     */
    LightboxComponent.prototype.id;
    /**
     * Overlay ref to close the lightbox
     * @type {?}
     */
    LightboxComponent.prototype.overlayRef;
    /**
     * Close button svg data
     * @type {?}
     */
    LightboxComponent.prototype.closeIcon;
    /**
     * State of the lightbox animation.
     * @type {?}
     */
    LightboxComponent.prototype.state;
    /**
     * The ARIA role of the lightbox element.
     * @type {?}
     */
    LightboxComponent.prototype.role;
    /**
     * Aria label to assign to the lightbox element
     * @type {?}
     */
    LightboxComponent.prototype.ariaLabel;
    /**
     * ID of the element that should be considered as the lightbox's label.
     * @type {?}
     */
    LightboxComponent.prototype.ariaLabelledBy;
    /**
     * ID of the element that describes the lightbox.
     * @type {?}
     */
    LightboxComponent.prototype.ariaDescribedBy;
    /**
     * The class that traps and manages focus within the lightbox.
     * @type {?}
     * @private
     */
    LightboxComponent.prototype._focusTrap;
    /**
     * Element that was focused before the lightbox was opened. Save this to restore upon close.
     * @type {?}
     * @private
     */
    LightboxComponent.prototype._elementFocusedBeforeDialogWasOpened;
    /**
     * @type {?}
     * @private
     */
    LightboxComponent.prototype._document;
    /**
     * @type {?}
     * @private
     */
    LightboxComponent.prototype._focusTrapFactory;
    /**
     * @type {?}
     * @private
     */
    LightboxComponent.prototype._elementRef;
    /** @type {?} */
    LightboxComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2xpZ2h0Ym94LyIsInNvdXJjZXMiOlsibGliL2xpZ2h0Ym94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzNDLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpEO0lBdURFLDJCQUFrRCxTQUFjLEVBQzVDLGlCQUFtQyxFQUNuQyxXQUF1QixFQUN4QixTQUF1QjtRQUhRLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFDNUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFjOzs7O1FBdkIxQyxVQUFLLEdBQThCLE9BQU8sQ0FBQztRQXdCekMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELHFFQUFxRTs7Ozs7O0lBQ3JFLDJDQUFlOzs7OztJQUFmLFVBQWdCLEtBQXFCO1FBQ25DLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCw2Q0FBNkM7Ozs7OztJQUNyQyxzQ0FBVTs7Ozs7SUFBbEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqRjtRQUNELDZGQUE2RjtRQUM3RiwyRkFBMkY7UUFDM0YsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsd0ZBQXdGOzs7Ozs7SUFDaEYseURBQTZCOzs7OztJQUFyQztRQUFBLGlCQVlDO1FBWEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxvQ0FBb0MsR0FBRyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBZSxDQUFDO1lBRXhGLG1FQUFtRTtZQUNuRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtnQkFDeEMsMEZBQTBGO2dCQUMxRixvRkFBb0Y7Z0JBQ3BGLG9DQUFvQztnQkFDcEMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQXRDLENBQXNDLENBQUMsQ0FBQzthQUN0RTtTQUNGO0lBQ0gsQ0FBQztJQUVELGlGQUFpRjs7Ozs7O0lBQ3pFLHlDQUFhOzs7OztJQUFyQjs7WUFDUSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9DQUFvQztRQUV6RCx5RkFBeUY7UUFDekYsSUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTtZQUNsRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakI7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQTlHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFFL0IsUUFBUSxFQUFFLG1RQUtUO29CQUNELElBQUksRUFBRTt3QkFDSixVQUFVLEVBQUUsSUFBSTt3QkFDaEIsWUFBWSxFQUFFLE1BQU07d0JBQ3BCLFdBQVcsRUFBRSxrQkFBa0I7d0JBQy9CLGFBQWEsRUFBRSxNQUFNO3dCQUNyQix3QkFBd0IsRUFBRSxtQ0FBbUM7d0JBQzdELG1CQUFtQixFQUFFLFdBQVc7d0JBQ2hDLHlCQUF5QixFQUFFLHlCQUF5Qjt3QkFDcEQsYUFBYSxFQUFFLE9BQU87d0JBQ3RCLGtCQUFrQixFQUFFLHlCQUF5QjtxQkFDOUM7O2lCQUNGOzs7O2dEQWlDYyxRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7Z0JBMUR0QixnQkFBZ0I7Z0JBTG1CLFVBQVU7Z0JBQ3hELFlBQVk7O0lBc0hyQix3QkFBQztDQUFBLEFBL0dELElBK0dDO1NBeEZZLGlCQUFpQjs7Ozs7O0lBRzVCLCtCQUFXOzs7OztJQUdYLHVDQUF1Qjs7Ozs7SUFHdkIsc0NBQWtCOzs7OztJQUdsQixrQ0FBMkM7Ozs7O0lBRzNDLGlDQUFhOzs7OztJQUdiLHNDQUFrQjs7Ozs7SUFHbEIsMkNBQXVCOzs7OztJQUd2Qiw0Q0FBd0I7Ozs7OztJQUd4Qix1Q0FBOEI7Ozs7OztJQUc5QixpRUFBMEQ7Ozs7O0lBRTlDLHNDQUFvRDs7Ozs7SUFDcEQsOENBQTJDOzs7OztJQUMzQyx3Q0FBK0I7O0lBQy9CLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3B0aW9uYWwsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBsaWdodGJveEFuaW1hdGlvbiB9IGZyb20gJy4vbGlnaHRib3guYW5pbWF0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGlnaHRib3gnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGFuaW1hdGlvbnM6IFtsaWdodGJveEFuaW1hdGlvbl0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGlnaHRib3guY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGdhbGxlcnkgW2lkXT1cImlkXCIgW2Rlc3Ryb3lSZWZdPVwiZmFsc2VcIiBbc2tpcEluaXRDb25maWddPVwidHJ1ZVwiPlxyXG4gICAgICA8aSBjbGFzcz1cImctYnRuLWNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cIm92ZXJsYXlSZWYuZGV0YWNoKClcIlxyXG4gICAgICAgICBbaW5uZXJIVE1MXT1cInNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChjbG9zZUljb24pXCI+PC9pPlxyXG4gICAgPC9nYWxsZXJ5PlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgJ3RhYmluZGV4JzogJy0xJyxcclxuICAgICdhcmlhLW1vZGFsJzogJ3RydWUnLFxyXG4gICAgJ1thdHRyLmlkXSc6ICdcImxpZ2h0Ym94LVwiICsgaWQnLFxyXG4gICAgJ1thdHRyLnJvbGVdJzogJ3JvbGUnLFxyXG4gICAgJ1thdHRyLmFyaWEtbGFiZWxsZWRieV0nOiAnYXJpYUxhYmVsID8gbnVsbCA6IGFyaWFMYWJlbGxlZEJ5JyxcclxuICAgICdbYXR0ci5hcmlhLWxhYmVsXSc6ICdhcmlhTGFiZWwnLFxyXG4gICAgJ1thdHRyLmFyaWEtZGVzY3JpYmVkYnldJzogJ2FyaWFEZXNjcmliZWRCeSB8fCBudWxsJyxcclxuICAgICdbQGxpZ2h0Ym94XSc6ICdzdGF0ZScsXHJcbiAgICAnKEBsaWdodGJveC5kb25lKSc6ICdvbkFuaW1hdGlvbkRvbmUoJGV2ZW50KScsXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlnaHRib3hDb21wb25lbnQge1xyXG5cclxuICAvKiogR2FsbGVyeSByZWYgaWQgKi9cclxuICBpZDogc3RyaW5nO1xyXG5cclxuICAvKiogT3ZlcmxheSByZWYgdG8gY2xvc2UgdGhlIGxpZ2h0Ym94ICovXHJcbiAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcclxuXHJcbiAgLyoqIENsb3NlIGJ1dHRvbiBzdmcgZGF0YSAqL1xyXG4gIGNsb3NlSWNvbjogc3RyaW5nO1xyXG5cclxuICAvKiogU3RhdGUgb2YgdGhlIGxpZ2h0Ym94IGFuaW1hdGlvbi4gKi9cclxuICBzdGF0ZTogJ3ZvaWQnIHwgJ2VudGVyJyB8ICdleGl0JyA9ICdlbnRlcic7XHJcblxyXG4gIC8qKiBUaGUgQVJJQSByb2xlIG9mIHRoZSBsaWdodGJveCBlbGVtZW50LiAqL1xyXG4gIHJvbGU6IHN0cmluZztcclxuXHJcbiAgLyoqIEFyaWEgbGFiZWwgdG8gYXNzaWduIHRvIHRoZSBsaWdodGJveCBlbGVtZW50ICovXHJcbiAgYXJpYUxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBjb25zaWRlcmVkIGFzIHRoZSBsaWdodGJveCdzIGxhYmVsLiAqL1xyXG4gIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IGRlc2NyaWJlcyB0aGUgbGlnaHRib3guICovXHJcbiAgYXJpYURlc2NyaWJlZEJ5OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGUgY2xhc3MgdGhhdCB0cmFwcyBhbmQgbWFuYWdlcyBmb2N1cyB3aXRoaW4gdGhlIGxpZ2h0Ym94LiAqL1xyXG4gIHByaXZhdGUgX2ZvY3VzVHJhcDogRm9jdXNUcmFwO1xyXG5cclxuICAvKiogRWxlbWVudCB0aGF0IHdhcyBmb2N1c2VkIGJlZm9yZSB0aGUgbGlnaHRib3ggd2FzIG9wZW5lZC4gU2F2ZSB0aGlzIHRvIHJlc3RvcmUgdXBvbiBjbG9zZS4gKi9cclxuICBwcml2YXRlIF9lbGVtZW50Rm9jdXNlZEJlZm9yZURpYWxvZ1dhc09wZW5lZDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gICAgdGhpcy5fc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENhbGxiYWNrLCBpbnZva2VkIHdoZW5ldmVyIGFuIGFuaW1hdGlvbiBvbiB0aGUgaG9zdCBjb21wbGV0ZXMuICovXHJcbiAgb25BbmltYXRpb25Eb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdlbnRlcicpIHtcclxuICAgICAgdGhpcy5fdHJhcEZvY3VzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLl9yZXN0b3JlRm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBNb3ZlcyB0aGUgZm9jdXMgaW5zaWRlIHRoZSBmb2N1cyB0cmFwLiAqL1xyXG4gIHByaXZhdGUgX3RyYXBGb2N1cygpIHtcclxuICAgIGlmICghdGhpcy5fZm9jdXNUcmFwKSB7XHJcbiAgICAgIHRoaXMuX2ZvY3VzVHJhcCA9IHRoaXMuX2ZvY3VzVHJhcEZhY3RvcnkuY3JlYXRlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICAvLyBJZiB3ZXJlIHRvIGF0dGVtcHQgdG8gZm9jdXMgaW1tZWRpYXRlbHksIHRoZW4gdGhlIGNvbnRlbnQgb2YgdGhlIGxpZ2h0Ym94IHdvdWxkIG5vdCB5ZXQgYmVcclxuICAgIC8vIHJlYWR5IGluIGluc3RhbmNlcyB3aGVyZSBjaGFuZ2UgZGV0ZWN0aW9uIGhhcyB0byBydW4gZmlyc3QuIFRvIGRlYWwgd2l0aCB0aGlzLCB3ZSBzaW1wbHlcclxuICAgIC8vIHdhaXQgZm9yIHRoZSBtaWNyb3Rhc2sgcXVldWUgdG8gYmUgZW1wdHkuXHJcbiAgICB0aGlzLl9mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNhdmVzIGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGZvY3VzZWQgYmVmb3JlIHRoZSBsaWdodGJveCB3YXMgb3BlbmVkLiAqL1xyXG4gIHByaXZhdGUgX3NhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKSB7XHJcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudEZvY3VzZWRCZWZvcmVEaWFsb2dXYXNPcGVuZWQgPSB0aGlzLl9kb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgLy8gTm90ZSB0aGF0IHRoZXJlIGlzIG5vIGZvY3VzIG1ldGhvZCB3aGVuIHJlbmRlcmluZyBvbiB0aGUgc2VydmVyLlxyXG4gICAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKSB7XHJcbiAgICAgICAgLy8gTW92ZSBmb2N1cyBvbnRvIHRoZSBsaWdodGJveCBpbW1lZGlhdGVseSBpbiBvcmRlciB0byBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWNjaWRlbnRhbGx5XHJcbiAgICAgICAgLy8gb3BlbmluZyBtdWx0aXBsZSBkaWFsb2dzIGF0IHRoZSBzYW1lIHRpbWUuIE5lZWRzIHRvIGJlIGFzeW5jLCBiZWNhdXNlIHRoZSBlbGVtZW50XHJcbiAgICAgICAgLy8gbWF5IG5vdCBiZSBmb2N1c2FibGUgaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBSZXN0b3JlcyBmb2N1cyB0byB0aGUgZWxlbWVudCB0aGF0IHdhcyBmb2N1c2VkIGJlZm9yZSB0aGUgbGlnaHRib3ggb3BlbmVkLiAqL1xyXG4gIHByaXZhdGUgX3Jlc3RvcmVGb2N1cygpIHtcclxuICAgIGNvbnN0IHRvRm9jdXMgPSB0aGlzLl9lbGVtZW50Rm9jdXNlZEJlZm9yZURpYWxvZ1dhc09wZW5lZDtcclxuXHJcbiAgICAvLyBXZSBuZWVkIHRoZSBleHRyYSBjaGVjaywgYmVjYXVzZSBJRSBjYW4gc2V0IHRoZSBgYWN0aXZlRWxlbWVudGAgdG8gbnVsbCBpbiBzb21lIGNhc2VzLlxyXG4gICAgaWYgKHRvRm9jdXMgJiYgdHlwZW9mIHRvRm9jdXMuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdG9Gb2N1cy5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9mb2N1c1RyYXApIHtcclxuICAgICAgdGhpcy5fZm9jdXNUcmFwLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19