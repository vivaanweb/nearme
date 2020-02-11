/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Optional, ChangeDetectionStrategy, ElementRef, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { lightboxAnimation } from './lightbox.animation';
export class LightboxComponent {
    /**
     * @param {?} _document
     * @param {?} _focusTrapFactory
     * @param {?} _elementRef
     * @param {?} sanitizer
     */
    constructor(_document, _focusTrapFactory, _elementRef, sanitizer) {
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
    /**
     * Callback, invoked whenever an animation on the host completes.
     * @param {?} event
     * @return {?}
     */
    onAnimationDone(event) {
        if (event.toState === 'enter') {
            this._trapFocus();
        }
        else {
            this.overlayRef.dispose();
            this._restoreFocus();
        }
    }
    /**
     * Moves the focus inside the focus trap.
     * @private
     * @return {?}
     */
    _trapFocus() {
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        }
        // If were to attempt to focus immediately, then the content of the lightbox would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        this._focusTrap.focusInitialElementWhenReady();
    }
    /**
     * Saves a reference to the element that was focused before the lightbox was opened.
     * @private
     * @return {?}
     */
    _savePreviouslyFocusedElement() {
        if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = (/** @type {?} */ (this._document.activeElement));
            // Note that there is no focus method when rendering on the server.
            if (this._elementRef.nativeElement.focus) {
                // Move focus onto the lightbox immediately in order to prevent the user from accidentally
                // opening multiple dialogs at the same time. Needs to be async, because the element
                // may not be focusable immediately.
                Promise.resolve().then(() => this._elementRef.nativeElement.focus());
            }
        }
    }
    /**
     * Restores focus to the element that was focused before the lightbox opened.
     * @private
     * @return {?}
     */
    _restoreFocus() {
        /** @type {?} */
        const toFocus = this._elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    }
}
LightboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'lightbox',
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [lightboxAnimation],
                template: `
    <gallery [id]="id" [destroyRef]="false" [skipInitConfig]="true">
      <i class="g-btn-close" aria-label="Close" (click)="overlayRef.detach()"
         [innerHTML]="sanitizer.bypassSecurityTrustHtml(closeIcon)"></i>
    </gallery>
  `,
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
LightboxComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: FocusTrapFactory },
    { type: ElementRef },
    { type: DomSanitizer }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2xpZ2h0Ym94LyIsInNvdXJjZXMiOlsibGliL2xpZ2h0Ym94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzNDLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBeUJ6RCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7O0lBZ0M1QixZQUFrRCxTQUFjLEVBQzVDLGlCQUFtQyxFQUNuQyxXQUF1QixFQUN4QixTQUF1QjtRQUhRLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFDNUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFjOzs7O1FBdkIxQyxVQUFLLEdBQThCLE9BQU8sQ0FBQztRQXdCekMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBR0QsZUFBZSxDQUFDLEtBQXFCO1FBQ25DLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7OztJQUdPLFVBQVU7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakY7UUFDRCw2RkFBNkY7UUFDN0YsMkZBQTJGO1FBQzNGLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBR08sNkJBQTZCO1FBQ25DLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsb0NBQW9DLEdBQUcsbUJBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQWUsQ0FBQztZQUV4RixtRUFBbUU7WUFDbkUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3hDLDBGQUEwRjtnQkFDMUYsb0ZBQW9GO2dCQUNwRixvQ0FBb0M7Z0JBQ3BDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUN0RTtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBR08sYUFBYTs7Y0FDYixPQUFPLEdBQUcsSUFBSSxDQUFDLG9DQUFvQztRQUV6RCx5RkFBeUY7UUFDekYsSUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTtZQUNsRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakI7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7OztZQTlHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFFL0IsUUFBUSxFQUFFOzs7OztHQUtUO2dCQUNELElBQUksRUFBRTtvQkFDSixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsWUFBWSxFQUFFLE1BQU07b0JBQ3BCLFdBQVcsRUFBRSxrQkFBa0I7b0JBQy9CLGFBQWEsRUFBRSxNQUFNO29CQUNyQix3QkFBd0IsRUFBRSxtQ0FBbUM7b0JBQzdELG1CQUFtQixFQUFFLFdBQVc7b0JBQ2hDLHlCQUF5QixFQUFFLHlCQUF5QjtvQkFDcEQsYUFBYSxFQUFFLE9BQU87b0JBQ3RCLGtCQUFrQixFQUFFLHlCQUF5QjtpQkFDOUM7O2FBQ0Y7Ozs7NENBaUNjLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTtZQTFEdEIsZ0JBQWdCO1lBTG1CLFVBQVU7WUFDeEQsWUFBWTs7Ozs7OztJQWlDbkIsK0JBQVc7Ozs7O0lBR1gsdUNBQXVCOzs7OztJQUd2QixzQ0FBa0I7Ozs7O0lBR2xCLGtDQUEyQzs7Ozs7SUFHM0MsaUNBQWE7Ozs7O0lBR2Isc0NBQWtCOzs7OztJQUdsQiwyQ0FBdUI7Ozs7O0lBR3ZCLDRDQUF3Qjs7Ozs7O0lBR3hCLHVDQUE4Qjs7Ozs7O0lBRzlCLGlFQUEwRDs7Ozs7SUFFOUMsc0NBQW9EOzs7OztJQUNwRCw4Q0FBMkM7Ozs7O0lBQzNDLHdDQUErQjs7SUFDL0Isc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBGb2N1c1RyYXAsIEZvY3VzVHJhcEZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IGxpZ2h0Ym94QW5pbWF0aW9uIH0gZnJvbSAnLi9saWdodGJveC5hbmltYXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWdodGJveCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgYW5pbWF0aW9uczogW2xpZ2h0Ym94QW5pbWF0aW9uXSxcclxuICBzdHlsZVVybHM6IFsnLi9saWdodGJveC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Z2FsbGVyeSBbaWRdPVwiaWRcIiBbZGVzdHJveVJlZl09XCJmYWxzZVwiIFtza2lwSW5pdENvbmZpZ109XCJ0cnVlXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZy1idG4tY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwib3ZlcmxheVJlZi5kZXRhY2goKVwiXHJcbiAgICAgICAgIFtpbm5lckhUTUxdPVwic2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGNsb3NlSWNvbilcIj48L2k+XHJcbiAgICA8L2dhbGxlcnk+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICAndGFiaW5kZXgnOiAnLTEnLFxyXG4gICAgJ2FyaWEtbW9kYWwnOiAndHJ1ZScsXHJcbiAgICAnW2F0dHIuaWRdJzogJ1wibGlnaHRib3gtXCIgKyBpZCcsXHJcbiAgICAnW2F0dHIucm9sZV0nOiAncm9sZScsXHJcbiAgICAnW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XSc6ICdhcmlhTGFiZWwgPyBudWxsIDogYXJpYUxhYmVsbGVkQnknLFxyXG4gICAgJ1thdHRyLmFyaWEtbGFiZWxdJzogJ2FyaWFMYWJlbCcsXHJcbiAgICAnW2F0dHIuYXJpYS1kZXNjcmliZWRieV0nOiAnYXJpYURlc2NyaWJlZEJ5IHx8IG51bGwnLFxyXG4gICAgJ1tAbGlnaHRib3hdJzogJ3N0YXRlJyxcclxuICAgICcoQGxpZ2h0Ym94LmRvbmUpJzogJ29uQW5pbWF0aW9uRG9uZSgkZXZlbnQpJyxcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWdodGJveENvbXBvbmVudCB7XHJcblxyXG4gIC8qKiBHYWxsZXJ5IHJlZiBpZCAqL1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBPdmVybGF5IHJlZiB0byBjbG9zZSB0aGUgbGlnaHRib3ggKi9cclxuICBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG5cclxuICAvKiogQ2xvc2UgYnV0dG9uIHN2ZyBkYXRhICovXHJcbiAgY2xvc2VJY29uOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBTdGF0ZSBvZiB0aGUgbGlnaHRib3ggYW5pbWF0aW9uLiAqL1xyXG4gIHN0YXRlOiAndm9pZCcgfCAnZW50ZXInIHwgJ2V4aXQnID0gJ2VudGVyJztcclxuXHJcbiAgLyoqIFRoZSBBUklBIHJvbGUgb2YgdGhlIGxpZ2h0Ym94IGVsZW1lbnQuICovXHJcbiAgcm9sZTogc3RyaW5nO1xyXG5cclxuICAvKiogQXJpYSBsYWJlbCB0byBhc3NpZ24gdG8gdGhlIGxpZ2h0Ym94IGVsZW1lbnQgKi9cclxuICBhcmlhTGFiZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIElEIG9mIHRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXMgdGhlIGxpZ2h0Ym94J3MgbGFiZWwuICovXHJcbiAgYXJpYUxhYmVsbGVkQnk6IHN0cmluZztcclxuXHJcbiAgLyoqIElEIG9mIHRoZSBlbGVtZW50IHRoYXQgZGVzY3JpYmVzIHRoZSBsaWdodGJveC4gKi9cclxuICBhcmlhRGVzY3JpYmVkQnk6IHN0cmluZztcclxuXHJcbiAgLyoqIFRoZSBjbGFzcyB0aGF0IHRyYXBzIGFuZCBtYW5hZ2VzIGZvY3VzIHdpdGhpbiB0aGUgbGlnaHRib3guICovXHJcbiAgcHJpdmF0ZSBfZm9jdXNUcmFwOiBGb2N1c1RyYXA7XHJcblxyXG4gIC8qKiBFbGVtZW50IHRoYXQgd2FzIGZvY3VzZWQgYmVmb3JlIHRoZSBsaWdodGJveCB3YXMgb3BlbmVkLiBTYXZlIHRoaXMgdG8gcmVzdG9yZSB1cG9uIGNsb3NlLiAqL1xyXG4gIHByaXZhdGUgX2VsZW1lbnRGb2N1c2VkQmVmb3JlRGlhbG9nV2FzT3BlbmVkOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9mb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgICB0aGlzLl9zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICAvKiogQ2FsbGJhY2ssIGludm9rZWQgd2hlbmV2ZXIgYW4gYW5pbWF0aW9uIG9uIHRoZSBob3N0IGNvbXBsZXRlcy4gKi9cclxuICBvbkFuaW1hdGlvbkRvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJykge1xyXG4gICAgICB0aGlzLl90cmFwRm9jdXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICAgIHRoaXMuX3Jlc3RvcmVGb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIE1vdmVzIHRoZSBmb2N1cyBpbnNpZGUgdGhlIGZvY3VzIHRyYXAuICovXHJcbiAgcHJpdmF0ZSBfdHJhcEZvY3VzKCkge1xyXG4gICAgaWYgKCF0aGlzLl9mb2N1c1RyYXApIHtcclxuICAgICAgdGhpcy5fZm9jdXNUcmFwID0gdGhpcy5fZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICAgIC8vIElmIHdlcmUgdG8gYXR0ZW1wdCB0byBmb2N1cyBpbW1lZGlhdGVseSwgdGhlbiB0aGUgY29udGVudCBvZiB0aGUgbGlnaHRib3ggd291bGQgbm90IHlldCBiZVxyXG4gICAgLy8gcmVhZHkgaW4gaW5zdGFuY2VzIHdoZXJlIGNoYW5nZSBkZXRlY3Rpb24gaGFzIHRvIHJ1biBmaXJzdC4gVG8gZGVhbCB3aXRoIHRoaXMsIHdlIHNpbXBseVxyXG4gICAgLy8gd2FpdCBmb3IgdGhlIG1pY3JvdGFzayBxdWV1ZSB0byBiZSBlbXB0eS5cclxuICAgIHRoaXMuX2ZvY3VzVHJhcC5mb2N1c0luaXRpYWxFbGVtZW50V2hlblJlYWR5KCk7XHJcbiAgfVxyXG5cclxuICAvKiogU2F2ZXMgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgdGhhdCB3YXMgZm9jdXNlZCBiZWZvcmUgdGhlIGxpZ2h0Ym94IHdhcyBvcGVuZWQuICovXHJcbiAgcHJpdmF0ZSBfc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpIHtcclxuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50Rm9jdXNlZEJlZm9yZURpYWxvZ1dhc09wZW5lZCA9IHRoaXMuX2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAvLyBOb3RlIHRoYXQgdGhlcmUgaXMgbm8gZm9jdXMgbWV0aG9kIHdoZW4gcmVuZGVyaW5nIG9uIHRoZSBzZXJ2ZXIuXHJcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMpIHtcclxuICAgICAgICAvLyBNb3ZlIGZvY3VzIG9udG8gdGhlIGxpZ2h0Ym94IGltbWVkaWF0ZWx5IGluIG9yZGVyIHRvIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhY2NpZGVudGFsbHlcclxuICAgICAgICAvLyBvcGVuaW5nIG11bHRpcGxlIGRpYWxvZ3MgYXQgdGhlIHNhbWUgdGltZS4gTmVlZHMgdG8gYmUgYXN5bmMsIGJlY2F1c2UgdGhlIGVsZW1lbnRcclxuICAgICAgICAvLyBtYXkgbm90IGJlIGZvY3VzYWJsZSBpbW1lZGlhdGVseS5cclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFJlc3RvcmVzIGZvY3VzIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGZvY3VzZWQgYmVmb3JlIHRoZSBsaWdodGJveCBvcGVuZWQuICovXHJcbiAgcHJpdmF0ZSBfcmVzdG9yZUZvY3VzKCkge1xyXG4gICAgY29uc3QgdG9Gb2N1cyA9IHRoaXMuX2VsZW1lbnRGb2N1c2VkQmVmb3JlRGlhbG9nV2FzT3BlbmVkO1xyXG5cclxuICAgIC8vIFdlIG5lZWQgdGhlIGV4dHJhIGNoZWNrLCBiZWNhdXNlIElFIGNhbiBzZXQgdGhlIGBhY3RpdmVFbGVtZW50YCB0byBudWxsIGluIHNvbWUgY2FzZXMuXHJcbiAgICBpZiAodG9Gb2N1cyAmJiB0eXBlb2YgdG9Gb2N1cy5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0b0ZvY3VzLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2ZvY3VzVHJhcCkge1xyXG4gICAgICB0aGlzLl9mb2N1c1RyYXAuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=