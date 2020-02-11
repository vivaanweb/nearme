/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var GalleryNavComponent = /** @class */ (function () {
    function GalleryNavComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    GalleryNavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.navIcon = this._sanitizer.bypassSecurityTrustHtml(this.config.navIcon);
    };
    GalleryNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-nav',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <i *ngIf=\"config.loop || state.hasPrev\"\n       class=\"g-nav-prev\"\n       aria-label=\"Previous\"\n       (tapClick)=\"action.emit('prev')\"\n       [innerHtml]=\"navIcon\"></i>\n\n    <i *ngIf=\"config.loop || state.hasNext\"\n       class=\"g-nav-next\"\n       aria-label=\"Next\"\n       (tapClick)=\"action.emit('next')\"\n       [innerHtml]=\"navIcon\"></i>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryNavComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    GalleryNavComponent.propDecorators = {
        state: [{ type: Input }],
        config: [{ type: Input }],
        action: [{ type: Output }]
    };
    return GalleryNavComponent;
}());
export { GalleryNavComponent };
if (false) {
    /** @type {?} */
    GalleryNavComponent.prototype.navIcon;
    /** @type {?} */
    GalleryNavComponent.prototype.state;
    /** @type {?} */
    GalleryNavComponent.prototype.config;
    /** @type {?} */
    GalleryNavComponent.prototype.action;
    /**
     * @type {?}
     * @private
     */
    GalleryNavComponent.prototype._sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nYWxsZXJ5LW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBSW5FO0lBd0JFLDZCQUFvQixVQUF3QjtRQUF4QixlQUFVLEdBQVYsVUFBVSxDQUFjO1FBRmxDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBRzlDLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RSxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDRYQVlUO2lCQUNGOzs7O2dCQXBCUSxZQUFZOzs7d0JBd0JsQixLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsTUFBTTs7SUFRVCwwQkFBQztDQUFBLEFBOUJELElBOEJDO1NBYlksbUJBQW1COzs7SUFFOUIsc0NBQWtCOztJQUNsQixvQ0FBNkI7O0lBQzdCLHFDQUErQjs7SUFDL0IscUNBQThDOzs7OztJQUVsQyx5Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEdhbGxlcnlTdGF0ZSB9IGZyb20gJy4uL21vZGVscy9nYWxsZXJ5Lm1vZGVsJztcclxuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LW5hdicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpICpuZ0lmPVwiY29uZmlnLmxvb3AgfHwgc3RhdGUuaGFzUHJldlwiXHJcbiAgICAgICBjbGFzcz1cImctbmF2LXByZXZcIlxyXG4gICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCJcclxuICAgICAgICh0YXBDbGljayk9XCJhY3Rpb24uZW1pdCgncHJldicpXCJcclxuICAgICAgIFtpbm5lckh0bWxdPVwibmF2SWNvblwiPjwvaT5cclxuXHJcbiAgICA8aSAqbmdJZj1cImNvbmZpZy5sb29wIHx8IHN0YXRlLmhhc05leHRcIlxyXG4gICAgICAgY2xhc3M9XCJnLW5hdi1uZXh0XCJcclxuICAgICAgIGFyaWEtbGFiZWw9XCJOZXh0XCJcclxuICAgICAgICh0YXBDbGljayk9XCJhY3Rpb24uZW1pdCgnbmV4dCcpXCJcclxuICAgICAgIFtpbm5lckh0bWxdPVwibmF2SWNvblwiPjwvaT5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5TmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgbmF2SWNvbjogU2FmZUh0bWw7XHJcbiAgQElucHV0KCkgc3RhdGU6IEdhbGxlcnlTdGF0ZTtcclxuICBASW5wdXQoKSBjb25maWc6IEdhbGxlcnlDb25maWc7XHJcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm5hdkljb24gPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5jb25maWcubmF2SWNvbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==