/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { LEFT_ARROW, RIGHT_ARROW, ESCAPE } from '@angular/cdk/keycodes';
import { Gallery } from '@ngx-gallery/core';
import { Subject } from 'rxjs';
import { LIGHTBOX_CONFIG } from './lightbox.model';
import { defaultConfig } from './lightbox.default';
import { LightboxComponent } from './lightbox.component';
var Lightbox = /** @class */ (function () {
    function Lightbox(config, _gallery, _overlay) {
        this._gallery = _gallery;
        this._overlay = _overlay;
        /**
         * Stream that emits when lightbox is opened
         */
        this.opened = new Subject();
        /**
         * Stream that emits when lightbox is closed
         */
        this.closed = new Subject();
        this._config = config ? tslib_1.__assign({}, defaultConfig, config) : defaultConfig;
    }
    /**
     * Set Lightbox Config
     * @param config - LightboxConfig
     */
    /**
     * Set Lightbox Config
     * @param {?} config - LightboxConfig
     * @return {?}
     */
    Lightbox.prototype.setConfig = /**
     * Set Lightbox Config
     * @param {?} config - LightboxConfig
     * @return {?}
     */
    function (config) {
        this._config = tslib_1.__assign({}, this._config, config);
    };
    /**
     * Open Lightbox Overlay
     * @param i - Current Index
     * @param id - Gallery ID
     * @param config - Lightbox Config
     */
    /**
     * Open Lightbox Overlay
     * @param {?=} i - Current Index
     * @param {?=} id - Gallery ID
     * @param {?=} config - Lightbox Config
     * @return {?}
     */
    Lightbox.prototype.open = /**
     * Open Lightbox Overlay
     * @param {?=} i - Current Index
     * @param {?=} id - Gallery ID
     * @param {?=} config - Lightbox Config
     * @return {?}
     */
    function (i, id, config) {
        var _this = this;
        if (i === void 0) { i = 0; }
        if (id === void 0) { id = 'lightbox'; }
        /** @type {?} */
        var _config = config ? tslib_1.__assign({}, this._config, config) : this._config;
        /** @type {?} */
        var overlayConfig = {
            backdropClass: _config.backdropClass,
            panelClass: _config.panelClass,
            hasBackdrop: _config.hasBackdrop,
            positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
            scrollStrategy: this._overlay.scrollStrategies.block(),
            disposeOnNavigation: true
        };
        /** @type {?} */
        var galleryRef = this._gallery.ref(id);
        galleryRef.set(i);
        this._overlayRef = this._overlay.create(overlayConfig);
        // overlay opened event
        this._overlayRef.attachments().subscribe(function () { return _this.opened.next(id); });
        // overlay closed event
        this._overlayRef.detachments().subscribe(function () { return _this.closed.next(id); });
        // Attach gallery to the overlay
        /** @type {?} */
        var galleryPortal = new ComponentPortal(LightboxComponent);
        /** @type {?} */
        var lightboxRef = this._overlayRef.attach(galleryPortal);
        lightboxRef.instance.id = id;
        lightboxRef.instance.overlayRef = this._overlayRef;
        lightboxRef.instance.closeIcon = this._config.closeIcon;
        lightboxRef.instance.role = this._config.role;
        lightboxRef.instance.ariaLabel = this._config.ariaLabel;
        lightboxRef.instance.ariaLabelledBy = this._config.ariaLabelledBy;
        lightboxRef.instance.ariaDescribedBy = this._config.ariaDescribedBy;
        if (_config.hasBackdrop) {
            this._overlayRef.backdropClick().subscribe(function () { return _this.close(); });
        }
        // Add keyboard shortcuts
        if (_config.keyboardShortcuts) {
            this._overlayRef.keydownEvents().subscribe(function (event) {
                switch (event.keyCode) {
                    case LEFT_ARROW:
                        galleryRef.prev();
                        break;
                    case RIGHT_ARROW:
                        galleryRef.next();
                        break;
                    case ESCAPE:
                        _this.close();
                }
            });
        }
    };
    /**
     * Close Lightbox Overlay
     */
    /**
     * Close Lightbox Overlay
     * @return {?}
     */
    Lightbox.prototype.close = /**
     * Close Lightbox Overlay
     * @return {?}
     */
    function () {
        if (this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
    };
    Lightbox.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Lightbox.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LIGHTBOX_CONFIG,] }] },
        { type: Gallery },
        { type: Overlay }
    ]; };
    return Lightbox;
}());
export { Lightbox };
if (false) {
    /**
     * Gallery overlay ref
     * @type {?}
     * @private
     */
    Lightbox.prototype._overlayRef;
    /**
     * Global config
     * @type {?}
     * @private
     */
    Lightbox.prototype._config;
    /**
     * Stream that emits when lightbox is opened
     * @type {?}
     */
    Lightbox.prototype.opened;
    /**
     * Stream that emits when lightbox is closed
     * @type {?}
     */
    Lightbox.prototype.closed;
    /**
     * @type {?}
     * @private
     */
    Lightbox.prototype._gallery;
    /**
     * @type {?}
     * @private
     */
    Lightbox.prototype._overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9saWdodGJveC8iLCJzb3VyY2VzIjpbImxpYi9saWdodGJveC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQWtCLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RDtJQWVFLGtCQUFpRCxNQUFzQixFQUFVLFFBQWlCLEVBQVUsUUFBaUI7UUFBNUMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVM7Ozs7UUFMN0gsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7Ozs7UUFHL0IsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFHN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxzQkFBSyxhQUFhLEVBQUssTUFBTSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsNEJBQVM7Ozs7O0lBQVQsVUFBVSxNQUFzQjtRQUM5QixJQUFJLENBQUMsT0FBTyx3QkFBTyxJQUFJLENBQUMsT0FBTyxFQUFLLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7SUFDSCx1QkFBSTs7Ozs7OztJQUFKLFVBQUssQ0FBSyxFQUFFLEVBQWUsRUFBRSxNQUF1QjtRQUFwRCxpQkF1REM7UUF2REksa0JBQUEsRUFBQSxLQUFLO1FBQUUsbUJBQUEsRUFBQSxlQUFlOztZQUVuQixPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsc0JBQUssSUFBSSxDQUFDLE9BQU8sRUFBSyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPOztZQUU5RCxhQUFhLEdBQWtCO1lBQ25DLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYTtZQUNwQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVU7WUFDOUIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQ2hDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzRixjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDdEQsbUJBQW1CLEVBQUUsSUFBSTtTQUMxQjs7WUFFSyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3hDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV2RCx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFFckUsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDOzs7WUFHL0QsYUFBYSxHQUFHLElBQUksZUFBZSxDQUFDLGlCQUFpQixDQUFDOztZQUN0RCxXQUFXLEdBQW9DLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUUzRixXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDN0IsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNuRCxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUN4RCxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM5QyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUN4RCxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztRQUNsRSxXQUFXLENBQUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUVwRSxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQUUsRUFBWixDQUFZLENBQUMsQ0FBQztTQUNoRTtRQUVELHlCQUF5QjtRQUN6QixJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVU7Z0JBQ3BELFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtvQkFDckIsS0FBSyxVQUFVO3dCQUNiLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDbEIsTUFBTTtvQkFDUixLQUFLLFdBQVc7d0JBQ2QsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUNsQixNQUFNO29CQUNSLEtBQUssTUFBTTt3QkFDVCxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2hCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx3QkFBSzs7OztJQUFMO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOztnQkFqR0YsVUFBVTs7OztnREFlSSxRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7Z0JBdEJ4QyxPQUFPO2dCQUZQLE9BQU87O0lBMkdoQixlQUFDO0NBQUEsQUFsR0QsSUFrR0M7U0FqR1ksUUFBUTs7Ozs7OztJQUduQiwrQkFBZ0M7Ozs7OztJQUdoQywyQkFBZ0M7Ozs7O0lBR2hDLDBCQUErQjs7Ozs7SUFHL0IsMEJBQStCOzs7OztJQUUwQyw0QkFBeUI7Ozs7O0lBQUUsNEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmLCBPdmVybGF5Q29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgR2FsbGVyeSB9IGZyb20gJ0BuZ3gtZ2FsbGVyeS9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTGlnaHRib3hDb25maWcsIExJR0hUQk9YX0NPTkZJRyB9IGZyb20gJy4vbGlnaHRib3gubW9kZWwnO1xyXG5pbXBvcnQgeyBkZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi9saWdodGJveC5kZWZhdWx0JztcclxuaW1wb3J0IHsgTGlnaHRib3hDb21wb25lbnQgfSBmcm9tICcuL2xpZ2h0Ym94LmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMaWdodGJveCB7XHJcblxyXG4gIC8qKiBHYWxsZXJ5IG92ZXJsYXkgcmVmICovXHJcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcclxuXHJcbiAgLyoqIEdsb2JhbCBjb25maWcgKi9cclxuICBwcml2YXRlIF9jb25maWc6IExpZ2h0Ym94Q29uZmlnO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBsaWdodGJveCBpcyBvcGVuZWQgKi9cclxuICBvcGVuZWQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGxpZ2h0Ym94IGlzIGNsb3NlZCAqL1xyXG4gIGNsb3NlZCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChMSUdIVEJPWF9DT05GSUcpIGNvbmZpZzogTGlnaHRib3hDb25maWcsIHByaXZhdGUgX2dhbGxlcnk6IEdhbGxlcnksIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXkpIHtcclxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZyA/IHsuLi5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWd9IDogZGVmYXVsdENvbmZpZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBMaWdodGJveCBDb25maWdcclxuICAgKiBAcGFyYW0gY29uZmlnIC0gTGlnaHRib3hDb25maWdcclxuICAgKi9cclxuICBzZXRDb25maWcoY29uZmlnOiBMaWdodGJveENvbmZpZykge1xyXG4gICAgdGhpcy5fY29uZmlnID0gey4uLnRoaXMuX2NvbmZpZywgLi4uY29uZmlnfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW4gTGlnaHRib3ggT3ZlcmxheVxyXG4gICAqIEBwYXJhbSBpIC0gQ3VycmVudCBJbmRleFxyXG4gICAqIEBwYXJhbSBpZCAtIEdhbGxlcnkgSURcclxuICAgKiBAcGFyYW0gY29uZmlnIC0gTGlnaHRib3ggQ29uZmlnXHJcbiAgICovXHJcbiAgb3BlbihpID0gMCwgaWQgPSAnbGlnaHRib3gnLCBjb25maWc/OiBMaWdodGJveENvbmZpZykge1xyXG5cclxuICAgIGNvbnN0IF9jb25maWcgPSBjb25maWcgPyB7Li4udGhpcy5fY29uZmlnLCAuLi5jb25maWd9IDogdGhpcy5fY29uZmlnO1xyXG5cclxuICAgIGNvbnN0IG92ZXJsYXlDb25maWc6IE92ZXJsYXlDb25maWcgPSB7XHJcbiAgICAgIGJhY2tkcm9wQ2xhc3M6IF9jb25maWcuYmFja2Ryb3BDbGFzcyxcclxuICAgICAgcGFuZWxDbGFzczogX2NvbmZpZy5wYW5lbENsYXNzLFxyXG4gICAgICBoYXNCYWNrZHJvcDogX2NvbmZpZy5oYXNCYWNrZHJvcCxcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5fb3ZlcmxheS5wb3NpdGlvbigpLmdsb2JhbCgpLmNlbnRlckhvcml6b250YWxseSgpLmNlbnRlclZlcnRpY2FsbHkoKSxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuX292ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpLFxyXG4gICAgICBkaXNwb3NlT25OYXZpZ2F0aW9uOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdhbGxlcnlSZWYgPSB0aGlzLl9nYWxsZXJ5LnJlZihpZCk7XHJcbiAgICBnYWxsZXJ5UmVmLnNldChpKTtcclxuXHJcbiAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XHJcblxyXG4gICAgLy8gb3ZlcmxheSBvcGVuZWQgZXZlbnRcclxuICAgIHRoaXMuX292ZXJsYXlSZWYuYXR0YWNobWVudHMoKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vcGVuZWQubmV4dChpZCkpO1xyXG5cclxuICAgIC8vIG92ZXJsYXkgY2xvc2VkIGV2ZW50XHJcbiAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaG1lbnRzKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2VkLm5leHQoaWQpKTtcclxuXHJcbiAgICAvLyBBdHRhY2ggZ2FsbGVyeSB0byB0aGUgb3ZlcmxheVxyXG4gICAgY29uc3QgZ2FsbGVyeVBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoTGlnaHRib3hDb21wb25lbnQpO1xyXG4gICAgY29uc3QgbGlnaHRib3hSZWY6IENvbXBvbmVudFJlZjxMaWdodGJveENvbXBvbmVudD4gPSB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaChnYWxsZXJ5UG9ydGFsKTtcclxuXHJcbiAgICBsaWdodGJveFJlZi5pbnN0YW5jZS5pZCA9IGlkO1xyXG4gICAgbGlnaHRib3hSZWYuaW5zdGFuY2Uub3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXlSZWY7XHJcbiAgICBsaWdodGJveFJlZi5pbnN0YW5jZS5jbG9zZUljb24gPSB0aGlzLl9jb25maWcuY2xvc2VJY29uO1xyXG4gICAgbGlnaHRib3hSZWYuaW5zdGFuY2Uucm9sZSA9IHRoaXMuX2NvbmZpZy5yb2xlO1xyXG4gICAgbGlnaHRib3hSZWYuaW5zdGFuY2UuYXJpYUxhYmVsID0gdGhpcy5fY29uZmlnLmFyaWFMYWJlbDtcclxuICAgIGxpZ2h0Ym94UmVmLmluc3RhbmNlLmFyaWFMYWJlbGxlZEJ5ID0gdGhpcy5fY29uZmlnLmFyaWFMYWJlbGxlZEJ5O1xyXG4gICAgbGlnaHRib3hSZWYuaW5zdGFuY2UuYXJpYURlc2NyaWJlZEJ5ID0gdGhpcy5fY29uZmlnLmFyaWFEZXNjcmliZWRCeTtcclxuXHJcbiAgICBpZiAoX2NvbmZpZy5oYXNCYWNrZHJvcCkge1xyXG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQga2V5Ym9hcmQgc2hvcnRjdXRzXHJcbiAgICBpZiAoX2NvbmZpZy5rZXlib2FyZFNob3J0Y3V0cykge1xyXG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmtleWRvd25FdmVudHMoKS5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgIGNhc2UgTEVGVF9BUlJPVzpcclxuICAgICAgICAgICAgZ2FsbGVyeVJlZi5wcmV2KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcclxuICAgICAgICAgICAgZ2FsbGVyeVJlZi5uZXh0KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFU0NBUEU6XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2UgTGlnaHRib3ggT3ZlcmxheVxyXG4gICAqL1xyXG4gIGNsb3NlKCkge1xyXG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=