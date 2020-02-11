/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Inject, Optional, Self, Host, NgZone, ElementRef, Renderer2, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Gallery, ImageItem, GalleryComponent } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { Subject, from, EMPTY } from 'rxjs';
import { tap, map, switchMap, finalize, debounceTime } from 'rxjs/operators';
/** @enum {string} */
var GallerizeMode = {
    Detector: 'detector',
    Gallery: 'gallery',
};
var GallerizeDirective = /** @class */ (function () {
    function GallerizeDirective(_zone, _el, _gallery, _lightbox, _renderer, platform, _document, _galleryCmp) {
        this._zone = _zone;
        this._el = _el;
        this._gallery = _gallery;
        this._lightbox = _lightbox;
        this._renderer = _renderer;
        this._document = _document;
        this._galleryCmp = _galleryCmp;
        /**
         * Default gallery id
         */
        this._galleryId = 'lightbox';
        /**
         * The selector used to query images elements
         */
        this.selector = 'img';
        // Set gallerize mode
        if (isPlatformBrowser(platform)) {
            this._mode = _galleryCmp ? "gallery" /* Gallery */ : "detector" /* Detector */;
        }
    }
    /**
     * @return {?}
     */
    GallerizeDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            _this._galleryId = _this.gallerize || _this._galleryId;
            /** @type {?} */
            var ref = _this._gallery.ref(_this._galleryId);
            switch (_this._mode) {
                case "detector" /* Detector */:
                    _this.detectorMode(ref);
                    break;
                case "gallery" /* Gallery */:
                    _this.galleryMode(ref);
            }
        });
    };
    /**
     * @return {?}
     */
    GallerizeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        switch (this._mode) {
            case "detector" /* Detector */:
                this._detector$.complete();
                this._observer$.disconnect();
                break;
            case "gallery" /* Gallery */:
                this._itemClick$.unsubscribe();
                this._itemChange$.unsubscribe();
        }
    };
    /** Gallery mode: means `gallerize` directive is used on `<gallery>` component
     * Adds a click event to each gallery item so it opens in lightbox */
    /**
     * Gallery mode: means `gallerize` directive is used on `<gallery>` component
     * Adds a click event to each gallery item so it opens in lightbox
     * @private
     * @param {?} galleryRef
     * @return {?}
     */
    GallerizeDirective.prototype.galleryMode = /**
     * Gallery mode: means `gallerize` directive is used on `<gallery>` component
     * Adds a click event to each gallery item so it opens in lightbox
     * @private
     * @param {?} galleryRef
     * @return {?}
     */
    function (galleryRef) {
        var _this = this;
        // Clone its items to the new gallery instance
        this._itemClick$ = this._galleryCmp.galleryRef.itemClick.subscribe(function (i) { return _this._lightbox.open(i, _this._galleryId); });
        this._itemChange$ = this._galleryCmp.galleryRef.itemsChanged.subscribe(function (state) { return galleryRef.load(state.items); });
    };
    /** Detector mode: means `gallerize` directive is used on a normal HTMLElement
     *  Detects images and adds a click event to each image so it opens in the lightbox */
    /**
     * Detector mode: means `gallerize` directive is used on a normal HTMLElement
     *  Detects images and adds a click event to each image so it opens in the lightbox
     * @private
     * @param {?} galleryRef
     * @return {?}
     */
    GallerizeDirective.prototype.detectorMode = /**
     * Detector mode: means `gallerize` directive is used on a normal HTMLElement
     *  Detects images and adds a click event to each image so it opens in the lightbox
     * @private
     * @param {?} galleryRef
     * @return {?}
     */
    function (galleryRef) {
        var _this = this;
        this._detector$ = new Subject();
        // Query image elements
        this._detector$.pipe(debounceTime(300), switchMap(function () {
            /**
             * get all img elements from content
             * @type {?}
             */
            var imageElements = _this._el.nativeElement.querySelectorAll(_this.selector);
            if (imageElements && imageElements.length) {
                /** @type {?} */
                var images_1 = [];
                return from(imageElements).pipe(map(function (el, i) {
                    // Add click event to the image
                    _this._renderer.setStyle(el, 'cursor', 'pointer');
                    _this._renderer.setProperty(el, 'onclick', function () {
                        return _this._zone.run(function () { return _this._lightbox.open(i, _this._galleryId); });
                    });
                    if (el instanceof HTMLImageElement) {
                        // If element is type of img use the src property
                        return {
                            src: el.getAttribute('imageSrc') || el.src,
                            thumb: el.getAttribute('thumbSrc') || el.src
                        };
                    }
                    else {
                        // Otherwise, use element background-image url
                        /** @type {?} */
                        var elStyle = el.currentStyle || _this._document.defaultView.getComputedStyle(el, null);
                        /** @type {?} */
                        var background = elStyle.backgroundImage.slice(4, -1).replace(/"/g, '');
                        return {
                            src: el.getAttribute('imageSrc') || background,
                            thumb: el.getAttribute('thumbSrc') || background
                        };
                    }
                }), tap(function (data) { return images_1.push(new ImageItem(data)); }), finalize(function () { return galleryRef.load(images_1); }));
            }
            else {
                return EMPTY;
            }
        })).subscribe();
        // Observe content changes
        this._observer$ = new MutationObserver(function () { return _this._detector$.next(); });
        this._observer$.observe(this._el.nativeElement, { childList: true, subtree: true });
    };
    GallerizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gallerize]'
                },] }
    ];
    /** @nocollapse */
    GallerizeDirective.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: Gallery },
        { type: Lightbox },
        { type: Renderer2 },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: GalleryComponent, decorators: [{ type: Host }, { type: Self }, { type: Optional }] }
    ]; };
    GallerizeDirective.propDecorators = {
        gallerize: [{ type: Input }],
        selector: [{ type: Input }]
    };
    return GallerizeDirective;
}());
export { GallerizeDirective };
if (false) {
    /**
     * Default gallery id
     * @type {?}
     * @private
     */
    GallerizeDirective.prototype._galleryId;
    /**
     * Gallerize mode
     * @type {?}
     * @private
     */
    GallerizeDirective.prototype._mode;
    /**
     * Stream that emits to fire the detection stream the image elements has changed
     * @type {?}
     * @private
     */
    GallerizeDirective.prototype._observer$;
    /**
     * Stream that emits when image is discover
     * @type {?}
     * @private
     */
    GallerizeDirective.prototype._detector$;
    /**
     * Gallery events (if used on a gallery component)
     * @type {?}
     * @private
     */
    GallerizeDirective.prototype._itemClick$;
    /**
     * @type {?}
     * @private
     */
    GallerizeDirective.prototype._itemChange$;
    /**
     * If set, it will become the gallery id
     * @type {?}
     */
    GallerizeDirective.prototype.gallerize;
    /**
     * The selector used to query images elements
     * @type {?}
     */
    GallerizeDirective.prototype.selector;
    /**
     * @type {?}
     * @private
     */
    GallerizeDirective.prototype._zone;
    /**
     * @type {?}
     * @private
     */
    GallerizeDirective.prototype._el;
    /**
     * @type {?}
     * @private
     */
    GallerizeDirective.prototype._gallery;
    /**
     * @type {?}
     * @private
     */
    GallerizeDirective.prototype._lightbox;
    /**
     * @type {?}
     * @private
     */
    GallerizeDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    GallerizeDirective.prototype._document;
    /**
     * @type {?}
     * @private
     */
    GallerizeDirective.prototype._galleryCmp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyaXplLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9nYWxsZXJpemUvIiwic291cmNlcyI6WyJsaWIvZ2FsbGVyaXplLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR0wsTUFBTSxFQUNOLFFBQVEsRUFDUixJQUFJLEVBQ0osSUFBSSxFQUNKLE1BQU0sRUFDTixVQUFVLEVBQ1YsU0FBUyxFQUNULFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLE9BQU8sRUFBYyxTQUFTLEVBQUUsZ0JBQWdCLEVBQTZCLE1BQU0sbUJBQW1CLENBQUM7QUFDaEgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpELE9BQU8sRUFBRSxPQUFPLEVBQWdCLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBUzNFLFVBQVcsVUFBVTtJQUNyQixTQUFVLFNBQVM7O0FBR3JCO0lBaUNFLDRCQUFvQixLQUFhLEVBQ2IsR0FBZSxFQUNmLFFBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW9CLEVBQ1AsUUFBZ0IsRUFDWCxTQUFjLEVBQ0osV0FBNkI7UUFQekQsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUVGLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFDSixnQkFBVyxHQUFY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Ozs7SUFDeEMseUNBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBJbmplY3QsXHJcbiAgT3B0aW9uYWwsXHJcbiAgU2VsZixcclxuICBIb3N0LFxyXG4gIE5nWm9uZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMixcclxuICBQTEFURk9STV9JRFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgR2FsbGVyeSwgR2FsbGVyeVJlZiwgSW1hZ2VJdGVtLCBHYWxsZXJ5Q29tcG9uZW50LCBHYWxsZXJ5U3RhdGUsIEdhbGxlcnlJdGVtIH0gZnJvbSAnQG5neC1nYWxsZXJ5L2NvcmUnO1xyXG5pbXBvcnQgeyBMaWdodGJveCB9IGZyb20gJ0BuZ3gtZ2FsbGVyeS9saWdodGJveCc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGZyb20sIEVNUFRZIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgbWFwLCBzd2l0Y2hNYXAsIGZpbmFsaXplLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG4vKipcclxuICogVGhpcyBkaXJlY3RpdmUgaGFzIDIgbW9kZXM6XHJcbiAqIDEgLSBJZiBob3N0IGVsZW1lbnQgaXMgYSBIVE1MRWxlbWVudCwgaXQgZGV0ZWN0cyB0aGUgaW1hZ2VzIGFuZCBob29rcyB0aGVpciBjbGlja3MgdG8gbGlnaHRib3hcclxuICogMiAtIElmIGhvc3QgZWxlbWVudCBpcyBhIEdhbGxlcnlDb21wb25lbnQsIGl0IGhvb2tzIHRoZSBpbWFnZXMgY2xpY2sgdG8gdGhlIGxpZ2h0Ym94XHJcbiAqL1xyXG5cclxuY29uc3QgZW51bSBHYWxsZXJpemVNb2RlIHtcclxuICBEZXRlY3RvciA9ICdkZXRlY3RvcicsXHJcbiAgR2FsbGVyeSA9ICdnYWxsZXJ5J1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnYWxsZXJpemVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyaXplRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAvKiogRGVmYXVsdCBnYWxsZXJ5IGlkICovXHJcbiAgcHJpdmF0ZSBfZ2FsbGVyeUlkID0gJ2xpZ2h0Ym94JztcclxuXHJcbiAgLyoqIEdhbGxlcml6ZSBtb2RlICovXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfbW9kZTogR2FsbGVyaXplTW9kZTtcclxuXHJcbiAgLyoqIElmIGhvc3QgZWxlbWVudCBpcyBhIEhUTUxFbGVtZW50LCB3aWxsIHVzZSB0aGUgZm9sbG93aW5nIHZhcmlhYmxlczogKi9cclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHRvIGZpcmUgdGhlIGRldGVjdGlvbiBzdHJlYW0gdGhlIGltYWdlIGVsZW1lbnRzIGhhcyBjaGFuZ2VkICovXHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXIkOiBhbnk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGltYWdlIGlzIGRpc2NvdmVyICovXHJcbiAgcHJpdmF0ZSBfZGV0ZWN0b3IkOiBTdWJqZWN0PGFueT47XHJcblxyXG4gIC8qKiBJZiBob3N0IGVsZW1lbnQgaXMgYSBHYWxsZXJ5Q29tcG9uZW50LCB3aWxsIHVzZSB0aGUgZm9sbG93aW5nIHZhcmlhYmxlczogKi9cclxuXHJcbiAgLyoqIEdhbGxlcnkgZXZlbnRzIChpZiB1c2VkIG9uIGEgZ2FsbGVyeSBjb21wb25lbnQpICovXHJcbiAgcHJpdmF0ZSBfaXRlbUNsaWNrJDogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX2l0ZW1DaGFuZ2UkOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAvKiogSWYgc2V0LCBpdCB3aWxsIGJlY29tZSB0aGUgZ2FsbGVyeSBpZCAqL1xyXG4gIEBJbnB1dCgpIGdhbGxlcml6ZTogc3RyaW5nO1xyXG5cclxuICAvKiogVGhlIHNlbGVjdG9yIHVzZWQgdG8gcXVlcnkgaW1hZ2VzIGVsZW1lbnRzICovXHJcbiAgQElucHV0KCkgc2VsZWN0b3IgPSAnaW1nJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfem9uZTogTmdab25lLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2dhbGxlcnk6IEdhbGxlcnksXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbGlnaHRib3g6IExpZ2h0Ym94LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm06IE9iamVjdCxcclxuICAgICAgICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxyXG4gICAgICAgICAgICAgIEBIb3N0KCkgQFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIF9nYWxsZXJ5Q21wOiBHYWxsZXJ5Q29tcG9uZW50KSB7XHJcblxyXG4gICAgLy8gU2V0IGdhbGxlcml6ZSBtb2RlXHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm0pKSB7XHJcbiAgICAgIHRoaXMuX21vZGUgPSBfZ2FsbGVyeUNtcCA/IEdhbGxlcml6ZU1vZGUuR2FsbGVyeSA6IEdhbGxlcml6ZU1vZGUuRGV0ZWN0b3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9nYWxsZXJ5SWQgPSB0aGlzLmdhbGxlcml6ZSB8fCB0aGlzLl9nYWxsZXJ5SWQ7XHJcbiAgICAgIGNvbnN0IHJlZiA9IHRoaXMuX2dhbGxlcnkucmVmKHRoaXMuX2dhbGxlcnlJZCk7XHJcblxyXG4gICAgICBzd2l0Y2ggKHRoaXMuX21vZGUpIHtcclxuICAgICAgICBjYXNlIEdhbGxlcml6ZU1vZGUuRGV0ZWN0b3I6XHJcbiAgICAgICAgICB0aGlzLmRldGVjdG9yTW9kZShyZWYpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBHYWxsZXJpemVNb2RlLkdhbGxlcnk6XHJcbiAgICAgICAgICB0aGlzLmdhbGxlcnlNb2RlKHJlZik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuX21vZGUpIHtcclxuICAgICAgY2FzZSBHYWxsZXJpemVNb2RlLkRldGVjdG9yOlxyXG4gICAgICAgIHRoaXMuX2RldGVjdG9yJC5jb21wbGV0ZSgpO1xyXG4gICAgICAgIHRoaXMuX29ic2VydmVyJC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgR2FsbGVyaXplTW9kZS5HYWxsZXJ5OlxyXG4gICAgICAgIHRoaXMuX2l0ZW1DbGljayQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLl9pdGVtQ2hhbmdlJC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEdhbGxlcnkgbW9kZTogbWVhbnMgYGdhbGxlcml6ZWAgZGlyZWN0aXZlIGlzIHVzZWQgb24gYDxnYWxsZXJ5PmAgY29tcG9uZW50XHJcbiAgICogQWRkcyBhIGNsaWNrIGV2ZW50IHRvIGVhY2ggZ2FsbGVyeSBpdGVtIHNvIGl0IG9wZW5zIGluIGxpZ2h0Ym94ICovXHJcbiAgcHJpdmF0ZSBnYWxsZXJ5TW9kZShnYWxsZXJ5UmVmOiBHYWxsZXJ5UmVmKSB7XHJcbiAgICAvLyBDbG9uZSBpdHMgaXRlbXMgdG8gdGhlIG5ldyBnYWxsZXJ5IGluc3RhbmNlXHJcbiAgICB0aGlzLl9pdGVtQ2xpY2skID0gdGhpcy5fZ2FsbGVyeUNtcC5nYWxsZXJ5UmVmLml0ZW1DbGljay5zdWJzY3JpYmUoKGk6IG51bWJlcikgPT4gdGhpcy5fbGlnaHRib3gub3BlbihpLCB0aGlzLl9nYWxsZXJ5SWQpKTtcclxuICAgIHRoaXMuX2l0ZW1DaGFuZ2UkID0gdGhpcy5fZ2FsbGVyeUNtcC5nYWxsZXJ5UmVmLml0ZW1zQ2hhbmdlZC5zdWJzY3JpYmUoKHN0YXRlOiBHYWxsZXJ5U3RhdGUpID0+IGdhbGxlcnlSZWYubG9hZChzdGF0ZS5pdGVtcykpO1xyXG4gIH1cclxuXHJcbiAgLyoqIERldGVjdG9yIG1vZGU6IG1lYW5zIGBnYWxsZXJpemVgIGRpcmVjdGl2ZSBpcyB1c2VkIG9uIGEgbm9ybWFsIEhUTUxFbGVtZW50XHJcbiAgICogIERldGVjdHMgaW1hZ2VzIGFuZCBhZGRzIGEgY2xpY2sgZXZlbnQgdG8gZWFjaCBpbWFnZSBzbyBpdCBvcGVucyBpbiB0aGUgbGlnaHRib3ggKi9cclxuICBwcml2YXRlIGRldGVjdG9yTW9kZShnYWxsZXJ5UmVmOiBHYWxsZXJ5UmVmKSB7XHJcbiAgICB0aGlzLl9kZXRlY3RvciQgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgLy8gUXVlcnkgaW1hZ2UgZWxlbWVudHNcclxuICAgIHRoaXMuX2RldGVjdG9yJC5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUoMzAwKSxcclxuICAgICAgc3dpdGNoTWFwKCgpID0+IHtcclxuXHJcbiAgICAgICAgLyoqIGdldCBhbGwgaW1nIGVsZW1lbnRzIGZyb20gY29udGVudCAqL1xyXG4gICAgICAgIGNvbnN0IGltYWdlRWxlbWVudHMgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGlmIChpbWFnZUVsZW1lbnRzICYmIGltYWdlRWxlbWVudHMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgY29uc3QgaW1hZ2VzOiBHYWxsZXJ5SXRlbVtdID0gW107XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGZyb20oaW1hZ2VFbGVtZW50cykucGlwZShcclxuICAgICAgICAgICAgbWFwKChlbDogYW55LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gQWRkIGNsaWNrIGV2ZW50IHRvIHRoZSBpbWFnZVxyXG4gICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLCAnY3Vyc29yJywgJ3BvaW50ZXInKTtcclxuICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eShlbCwgJ29uY2xpY2snLCAoKSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4gdGhpcy5fbGlnaHRib3gub3BlbihpLCB0aGlzLl9nYWxsZXJ5SWQpKVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGVsZW1lbnQgaXMgdHlwZSBvZiBpbWcgdXNlIHRoZSBzcmMgcHJvcGVydHlcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogZWwuZ2V0QXR0cmlidXRlKCdpbWFnZVNyYycpIHx8IGVsLnNyYyxcclxuICAgICAgICAgICAgICAgICAgdGh1bWI6IGVsLmdldEF0dHJpYnV0ZSgndGh1bWJTcmMnKSB8fCBlbC5zcmNcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgdXNlIGVsZW1lbnQgYmFja2dyb3VuZC1pbWFnZSB1cmxcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsU3R5bGUgPSBlbC5jdXJyZW50U3R5bGUgfHwgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gZWxTdHlsZS5iYWNrZ3JvdW5kSW1hZ2Uuc2xpY2UoNCwgLTEpLnJlcGxhY2UoL1wiL2csICcnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogZWwuZ2V0QXR0cmlidXRlKCdpbWFnZVNyYycpIHx8IGJhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICAgIHRodW1iOiBlbC5nZXRBdHRyaWJ1dGUoJ3RodW1iU3JjJykgfHwgYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB0YXAoKGRhdGE6IGFueSkgPT4gaW1hZ2VzLnB1c2gobmV3IEltYWdlSXRlbShkYXRhKSkpLFxyXG4gICAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiBnYWxsZXJ5UmVmLmxvYWQoaW1hZ2VzKSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBFTVBUWTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApLnN1YnNjcmliZSgpO1xyXG5cclxuICAgIC8vIE9ic2VydmUgY29udGVudCBjaGFuZ2VzXHJcbiAgICB0aGlzLl9vYnNlcnZlciQgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB0aGlzLl9kZXRlY3RvciQubmV4dCgpKTtcclxuICAgIHRoaXMuX29ic2VydmVyJC5vYnNlcnZlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcclxuICB9XHJcbn1cclxuIl19