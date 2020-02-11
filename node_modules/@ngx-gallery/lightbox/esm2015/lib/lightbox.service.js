/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { LEFT_ARROW, RIGHT_ARROW, ESCAPE } from '@angular/cdk/keycodes';
import { Gallery } from '@ngx-gallery/core';
import { Subject } from 'rxjs';
import { LIGHTBOX_CONFIG } from './lightbox.model';
import { defaultConfig } from './lightbox.default';
import { LightboxComponent } from './lightbox.component';
export class Lightbox {
    /**
     * @param {?} config
     * @param {?} _gallery
     * @param {?} _overlay
     */
    constructor(config, _gallery, _overlay) {
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
        this._config = config ? Object.assign({}, defaultConfig, config) : defaultConfig;
    }
    /**
     * Set Lightbox Config
     * @param {?} config - LightboxConfig
     * @return {?}
     */
    setConfig(config) {
        this._config = Object.assign({}, this._config, config);
    }
    /**
     * Open Lightbox Overlay
     * @param {?=} i - Current Index
     * @param {?=} id - Gallery ID
     * @param {?=} config - Lightbox Config
     * @return {?}
     */
    open(i = 0, id = 'lightbox', config) {
        /** @type {?} */
        const _config = config ? Object.assign({}, this._config, config) : this._config;
        /** @type {?} */
        const overlayConfig = {
            backdropClass: _config.backdropClass,
            panelClass: _config.panelClass,
            hasBackdrop: _config.hasBackdrop,
            positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
            scrollStrategy: this._overlay.scrollStrategies.block(),
            disposeOnNavigation: true
        };
        /** @type {?} */
        const galleryRef = this._gallery.ref(id);
        galleryRef.set(i);
        this._overlayRef = this._overlay.create(overlayConfig);
        // overlay opened event
        this._overlayRef.attachments().subscribe(() => this.opened.next(id));
        // overlay closed event
        this._overlayRef.detachments().subscribe(() => this.closed.next(id));
        // Attach gallery to the overlay
        /** @type {?} */
        const galleryPortal = new ComponentPortal(LightboxComponent);
        /** @type {?} */
        const lightboxRef = this._overlayRef.attach(galleryPortal);
        lightboxRef.instance.id = id;
        lightboxRef.instance.overlayRef = this._overlayRef;
        lightboxRef.instance.closeIcon = this._config.closeIcon;
        lightboxRef.instance.role = this._config.role;
        lightboxRef.instance.ariaLabel = this._config.ariaLabel;
        lightboxRef.instance.ariaLabelledBy = this._config.ariaLabelledBy;
        lightboxRef.instance.ariaDescribedBy = this._config.ariaDescribedBy;
        if (_config.hasBackdrop) {
            this._overlayRef.backdropClick().subscribe(() => this.close());
        }
        // Add keyboard shortcuts
        if (_config.keyboardShortcuts) {
            this._overlayRef.keydownEvents().subscribe((event) => {
                switch (event.keyCode) {
                    case LEFT_ARROW:
                        galleryRef.prev();
                        break;
                    case RIGHT_ARROW:
                        galleryRef.next();
                        break;
                    case ESCAPE:
                        this.close();
                }
            });
        }
    }
    /**
     * Close Lightbox Overlay
     * @return {?}
     */
    close() {
        if (this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
    }
}
Lightbox.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Lightbox.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LIGHTBOX_CONFIG,] }] },
    { type: Gallery },
    { type: Overlay }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9saWdodGJveC8iLCJzb3VyY2VzIjpbImxpYi9saWdodGJveC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsT0FBTyxFQUE2QixNQUFNLHNCQUFzQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBa0IsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3pELE1BQU0sT0FBTyxRQUFROzs7Ozs7SUFjbkIsWUFBaUQsTUFBc0IsRUFBVSxRQUFpQixFQUFVLFFBQWlCO1FBQTVDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFTOzs7O1FBTDdILFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDOzs7O1FBRy9CLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBRzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsbUJBQUssYUFBYSxFQUFLLE1BQU0sRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQ3hFLENBQUM7Ozs7OztJQU1ELFNBQVMsQ0FBQyxNQUFzQjtRQUM5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SUFBSSxFQUFFLENBQUM7d0JBQ2xCLE1BQU07b0JBQ1IsS0FBSyxXQUFXO3dCQUNkLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDbEIsTUFBTTtvQkFDUixLQUFLLE1BQU07d0JBQ1QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNoQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUtELEtBQUs7UUFDSCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7OztZQWpHRixVQUFVOzs7OzRDQWVJLFFBQVEsWUFBSSxNQUFNLFNBQUMsZUFBZTtZQXRCeEMsT0FBTztZQUZQLE9BQU87Ozs7Ozs7O0lBYWQsK0JBQWdDOzs7Ozs7SUFHaEMsMkJBQWdDOzs7OztJQUdoQywwQkFBK0I7Ozs7O0lBRy9CLDBCQUErQjs7Ozs7SUFFMEMsNEJBQXlCOzs7OztJQUFFLDRCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiwgT3ZlcmxheUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IEdhbGxlcnkgfSBmcm9tICdAbmd4LWdhbGxlcnkvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IExpZ2h0Ym94Q29uZmlnLCBMSUdIVEJPWF9DT05GSUcgfSBmcm9tICcuL2xpZ2h0Ym94Lm1vZGVsJztcclxuaW1wb3J0IHsgZGVmYXVsdENvbmZpZyB9IGZyb20gJy4vbGlnaHRib3guZGVmYXVsdCc7XHJcbmltcG9ydCB7IExpZ2h0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9saWdodGJveC5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGlnaHRib3gge1xyXG5cclxuICAvKiogR2FsbGVyeSBvdmVybGF5IHJlZiAqL1xyXG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XHJcblxyXG4gIC8qKiBHbG9iYWwgY29uZmlnICovXHJcbiAgcHJpdmF0ZSBfY29uZmlnOiBMaWdodGJveENvbmZpZztcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gbGlnaHRib3ggaXMgb3BlbmVkICovXHJcbiAgb3BlbmVkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBsaWdodGJveCBpcyBjbG9zZWQgKi9cclxuICBjbG9zZWQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTElHSFRCT1hfQ09ORklHKSBjb25maWc6IExpZ2h0Ym94Q29uZmlnLCBwcml2YXRlIF9nYWxsZXJ5OiBHYWxsZXJ5LCBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5KSB7XHJcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWcgPyB7Li4uZGVmYXVsdENvbmZpZywgLi4uY29uZmlnfSA6IGRlZmF1bHRDb25maWc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgTGlnaHRib3ggQ29uZmlnXHJcbiAgICogQHBhcmFtIGNvbmZpZyAtIExpZ2h0Ym94Q29uZmlnXHJcbiAgICovXHJcbiAgc2V0Q29uZmlnKGNvbmZpZzogTGlnaHRib3hDb25maWcpIHtcclxuICAgIHRoaXMuX2NvbmZpZyA9IHsuLi50aGlzLl9jb25maWcsIC4uLmNvbmZpZ307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcGVuIExpZ2h0Ym94IE92ZXJsYXlcclxuICAgKiBAcGFyYW0gaSAtIEN1cnJlbnQgSW5kZXhcclxuICAgKiBAcGFyYW0gaWQgLSBHYWxsZXJ5IElEXHJcbiAgICogQHBhcmFtIGNvbmZpZyAtIExpZ2h0Ym94IENvbmZpZ1xyXG4gICAqL1xyXG4gIG9wZW4oaSA9IDAsIGlkID0gJ2xpZ2h0Ym94JywgY29uZmlnPzogTGlnaHRib3hDb25maWcpIHtcclxuXHJcbiAgICBjb25zdCBfY29uZmlnID0gY29uZmlnID8gey4uLnRoaXMuX2NvbmZpZywgLi4uY29uZmlnfSA6IHRoaXMuX2NvbmZpZztcclxuXHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnOiBPdmVybGF5Q29uZmlnID0ge1xyXG4gICAgICBiYWNrZHJvcENsYXNzOiBfY29uZmlnLmJhY2tkcm9wQ2xhc3MsXHJcbiAgICAgIHBhbmVsQ2xhc3M6IF9jb25maWcucGFuZWxDbGFzcyxcclxuICAgICAgaGFzQmFja2Ryb3A6IF9jb25maWcuaGFzQmFja2Ryb3AsXHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuX292ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKS5jZW50ZXJIb3Jpem9udGFsbHkoKS5jZW50ZXJWZXJ0aWNhbGx5KCksXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLl9vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcclxuICAgICAgZGlzcG9zZU9uTmF2aWdhdGlvbjogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnYWxsZXJ5UmVmID0gdGhpcy5fZ2FsbGVyeS5yZWYoaWQpO1xyXG4gICAgZ2FsbGVyeVJlZi5zZXQoaSk7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xyXG5cclxuICAgIC8vIG92ZXJsYXkgb3BlbmVkIGV2ZW50XHJcbiAgICB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaG1lbnRzKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMub3BlbmVkLm5leHQoaWQpKTtcclxuXHJcbiAgICAvLyBvdmVybGF5IGNsb3NlZCBldmVudFxyXG4gICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2htZW50cygpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlZC5uZXh0KGlkKSk7XHJcblxyXG4gICAgLy8gQXR0YWNoIGdhbGxlcnkgdG8gdGhlIG92ZXJsYXlcclxuICAgIGNvbnN0IGdhbGxlcnlQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKExpZ2h0Ym94Q29tcG9uZW50KTtcclxuICAgIGNvbnN0IGxpZ2h0Ym94UmVmOiBDb21wb25lbnRSZWY8TGlnaHRib3hDb21wb25lbnQ+ID0gdGhpcy5fb3ZlcmxheVJlZi5hdHRhY2goZ2FsbGVyeVBvcnRhbCk7XHJcblxyXG4gICAgbGlnaHRib3hSZWYuaW5zdGFuY2UuaWQgPSBpZDtcclxuICAgIGxpZ2h0Ym94UmVmLmluc3RhbmNlLm92ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5UmVmO1xyXG4gICAgbGlnaHRib3hSZWYuaW5zdGFuY2UuY2xvc2VJY29uID0gdGhpcy5fY29uZmlnLmNsb3NlSWNvbjtcclxuICAgIGxpZ2h0Ym94UmVmLmluc3RhbmNlLnJvbGUgPSB0aGlzLl9jb25maWcucm9sZTtcclxuICAgIGxpZ2h0Ym94UmVmLmluc3RhbmNlLmFyaWFMYWJlbCA9IHRoaXMuX2NvbmZpZy5hcmlhTGFiZWw7XHJcbiAgICBsaWdodGJveFJlZi5pbnN0YW5jZS5hcmlhTGFiZWxsZWRCeSA9IHRoaXMuX2NvbmZpZy5hcmlhTGFiZWxsZWRCeTtcclxuICAgIGxpZ2h0Ym94UmVmLmluc3RhbmNlLmFyaWFEZXNjcmliZWRCeSA9IHRoaXMuX2NvbmZpZy5hcmlhRGVzY3JpYmVkQnk7XHJcblxyXG4gICAgaWYgKF9jb25maWcuaGFzQmFja2Ryb3ApIHtcclxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGtleWJvYXJkIHNob3J0Y3V0c1xyXG4gICAgaWYgKF9jb25maWcua2V5Ym9hcmRTaG9ydGN1dHMpIHtcclxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICBjYXNlIExFRlRfQVJST1c6XHJcbiAgICAgICAgICAgIGdhbGxlcnlSZWYucHJldigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgUklHSFRfQVJST1c6XHJcbiAgICAgICAgICAgIGdhbGxlcnlSZWYubmV4dCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRVNDQVBFOlxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlIExpZ2h0Ym94IE92ZXJsYXlcclxuICAgKi9cclxuICBjbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19