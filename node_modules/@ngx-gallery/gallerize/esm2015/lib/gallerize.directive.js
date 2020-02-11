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
const GallerizeMode = {
    Detector: 'detector',
    Gallery: 'gallery',
};
export class GallerizeDirective {
    /**
     * @param {?} _zone
     * @param {?} _el
     * @param {?} _gallery
     * @param {?} _lightbox
     * @param {?} _renderer
     * @param {?} platform
     * @param {?} _document
     * @param {?} _galleryCmp
     */
    constructor(_zone, _el, _gallery, _lightbox, _renderer, platform, _document, _galleryCmp) {
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
    ngOnInit() {
        this._zone.runOutsideAngular(() => {
            this._galleryId = this.gallerize || this._galleryId;
            /** @type {?} */
            const ref = this._gallery.ref(this._galleryId);
            switch (this._mode) {
                case "detector" /* Detector */:
                    this.detectorMode(ref);
                    break;
                case "gallery" /* Gallery */:
                    this.galleryMode(ref);
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        switch (this._mode) {
            case "detector" /* Detector */:
                this._detector$.complete();
                this._observer$.disconnect();
                break;
            case "gallery" /* Gallery */:
                this._itemClick$.unsubscribe();
                this._itemChange$.unsubscribe();
        }
    }
    /**
     * Gallery mode: means `gallerize` directive is used on `<gallery>` component
     * Adds a click event to each gallery item so it opens in lightbox
     * @private
     * @param {?} galleryRef
     * @return {?}
     */
    galleryMode(galleryRef) {
        // Clone its items to the new gallery instance
        this._itemClick$ = this._galleryCmp.galleryRef.itemClick.subscribe((i) => this._lightbox.open(i, this._galleryId));
        this._itemChange$ = this._galleryCmp.galleryRef.itemsChanged.subscribe((state) => galleryRef.load(state.items));
    }
    /**
     * Detector mode: means `gallerize` directive is used on a normal HTMLElement
     *  Detects images and adds a click event to each image so it opens in the lightbox
     * @private
     * @param {?} galleryRef
     * @return {?}
     */
    detectorMode(galleryRef) {
        this._detector$ = new Subject();
        // Query image elements
        this._detector$.pipe(debounceTime(300), switchMap(() => {
            /**
             * get all img elements from content
             * @type {?}
             */
            const imageElements = this._el.nativeElement.querySelectorAll(this.selector);
            if (imageElements && imageElements.length) {
                /** @type {?} */
                const images = [];
                return from(imageElements).pipe(map((el, i) => {
                    // Add click event to the image
                    this._renderer.setStyle(el, 'cursor', 'pointer');
                    this._renderer.setProperty(el, 'onclick', () => this._zone.run(() => this._lightbox.open(i, this._galleryId)));
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
                        const elStyle = el.currentStyle || this._document.defaultView.getComputedStyle(el, null);
                        /** @type {?} */
                        const background = elStyle.backgroundImage.slice(4, -1).replace(/"/g, '');
                        return {
                            src: el.getAttribute('imageSrc') || background,
                            thumb: el.getAttribute('thumbSrc') || background
                        };
                    }
                }), tap((data) => images.push(new ImageItem(data))), finalize(() => galleryRef.load(images)));
            }
            else {
                return EMPTY;
            }
        })).subscribe();
        // Observe content changes
        this._observer$ = new MutationObserver(() => this._detector$.next());
        this._observer$.observe(this._el.nativeElement, { childList: true, subtree: true });
    }
}
GallerizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gallerize]'
            },] }
];
/** @nocollapse */
GallerizeDirective.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: Gallery },
    { type: Lightbox },
    { type: Renderer2 },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: GalleryComponent, decorators: [{ type: Host }, { type: Self }, { type: Optional }] }
];
GallerizeDirective.propDecorators = {
    gallerize: [{ type: Input }],
    selector: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyaXplLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9nYWxsZXJpemUvIiwic291cmNlcyI6WyJsaWIvZ2FsbGVyaXplLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR0wsTUFBTSxFQUNOLFFBQVEsRUFDUixJQUFJLEVBQ0osSUFBSSxFQUNKLE1BQU0sRUFDTixVQUFVLEVBQ1YsU0FBUyxFQUNULFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLE9BQU8sRUFBYyxTQUFTLEVBQUUsZ0JBQWdCLEVBQTZCLE1BQU0sbUJBQW1CLENBQUM7QUFDaEgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpELE9BQU8sRUFBRSxPQUFPLEVBQWdCLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBUzNFLFVBQVcsVUFBVTtJQUNyQixTQUFVLFNBQVM7O0FBTXJCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7Ozs7O0lBOEI3QixZQUFvQixLQUFhLEVBQ2IsR0FBZSxFQUNmLFFBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW9CLEVBQ1AsUUFBZ0IsRUFDWCxTQUFjLEVBQ0osV0FBNkI7UUFQekQsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUVGLGNBQVMsR0FB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QUNILENBQUMsQ0FBQyxDQUNILENBQUMsU0FBUyxFQUFFLENBQUM7UUFFZCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7O1lBdklGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTthQUN4Qjs7OztZQTFCQyxNQUFNO1lBQ04sVUFBVTtZQU1ILE9BQU87WUFDUCxRQUFRO1lBTmYsU0FBUztZQTREa0MsTUFBTSx1QkFBcEMsTUFBTSxTQUFDLFdBQVc7NENBQ2xCLE1BQU0sU0FBQyxRQUFRO1lBeERXLGdCQUFnQix1QkF5RDFDLElBQUksWUFBSSxJQUFJLFlBQUksUUFBUTs7O3dCQVpwQyxLQUFLO3VCQUdMLEtBQUs7Ozs7Ozs7O0lBekJOLHdDQUFnQzs7Ozs7O0lBR2hDLG1DQUFzQzs7Ozs7O0lBS3RDLHdDQUF3Qjs7Ozs7O0lBR3hCLHdDQUFpQzs7Ozs7O0lBS2pDLHlDQUFrQzs7Ozs7SUFDbEMsMENBQW1DOzs7OztJQUtuQyx1Q0FBMkI7Ozs7O0lBRzNCLHNDQUEwQjs7Ozs7SUFFZCxtQ0FBcUI7Ozs7O0lBQ3JCLGlDQUF1Qjs7Ozs7SUFDdkIsc0NBQXlCOzs7OztJQUN6Qix1Q0FBMkI7Ozs7O0lBQzNCLHVDQUE0Qjs7Ozs7SUFFNUIsdUNBQXdDOzs7OztJQUN4Qyx5Q0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIEluamVjdCxcclxuICBPcHRpb25hbCxcclxuICBTZWxmLFxyXG4gIEhvc3QsXHJcbiAgTmdab25lLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFBMQVRGT1JNX0lEXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBHYWxsZXJ5LCBHYWxsZXJ5UmVmLCBJbWFnZUl0ZW0sIEdhbGxlcnlDb21wb25lbnQsIEdhbGxlcnlTdGF0ZSwgR2FsbGVyeUl0ZW0gfSBmcm9tICdAbmd4LWdhbGxlcnkvY29yZSc7XHJcbmltcG9ydCB7IExpZ2h0Ym94IH0gZnJvbSAnQG5neC1nYWxsZXJ5L2xpZ2h0Ym94JztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgZnJvbSwgRU1QVFkgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwLCBtYXAsIHN3aXRjaE1hcCwgZmluYWxpemUsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBoYXMgMiBtb2RlczpcclxuICogMSAtIElmIGhvc3QgZWxlbWVudCBpcyBhIEhUTUxFbGVtZW50LCBpdCBkZXRlY3RzIHRoZSBpbWFnZXMgYW5kIGhvb2tzIHRoZWlyIGNsaWNrcyB0byBsaWdodGJveFxyXG4gKiAyIC0gSWYgaG9zdCBlbGVtZW50IGlzIGEgR2FsbGVyeUNvbXBvbmVudCwgaXQgaG9va3MgdGhlIGltYWdlcyBjbGljayB0byB0aGUgbGlnaHRib3hcclxuICovXHJcblxyXG5jb25zdCBlbnVtIEdhbGxlcml6ZU1vZGUge1xyXG4gIERldGVjdG9yID0gJ2RldGVjdG9yJyxcclxuICBHYWxsZXJ5ID0gJ2dhbGxlcnknXHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dhbGxlcml6ZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJpemVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8qKiBEZWZhdWx0IGdhbGxlcnkgaWQgKi9cclxuICBwcml2YXRlIF9nYWxsZXJ5SWQgPSAnbGlnaHRib3gnO1xyXG5cclxuICAvKiogR2FsbGVyaXplIG1vZGUgKi9cclxuICBwcml2YXRlIHJlYWRvbmx5IF9tb2RlOiBHYWxsZXJpemVNb2RlO1xyXG5cclxuICAvKiogSWYgaG9zdCBlbGVtZW50IGlzIGEgSFRNTEVsZW1lbnQsIHdpbGwgdXNlIHRoZSBmb2xsb3dpbmcgdmFyaWFibGVzOiAqL1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgdG8gZmlyZSB0aGUgZGV0ZWN0aW9uIHN0cmVhbSB0aGUgaW1hZ2UgZWxlbWVudHMgaGFzIGNoYW5nZWQgKi9cclxuICBwcml2YXRlIF9vYnNlcnZlciQ6IGFueTtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gaW1hZ2UgaXMgZGlzY292ZXIgKi9cclxuICBwcml2YXRlIF9kZXRlY3RvciQ6IFN1YmplY3Q8YW55PjtcclxuXHJcbiAgLyoqIElmIGhvc3QgZWxlbWVudCBpcyBhIEdhbGxlcnlDb21wb25lbnQsIHdpbGwgdXNlIHRoZSBmb2xsb3dpbmcgdmFyaWFibGVzOiAqL1xyXG5cclxuICAvKiogR2FsbGVyeSBldmVudHMgKGlmIHVzZWQgb24gYSBnYWxsZXJ5IGNvbXBvbmVudCkgKi9cclxuICBwcml2YXRlIF9pdGVtQ2xpY2skOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBfaXRlbUNoYW5nZSQ6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIC8qKiBJZiBzZXQsIGl0IHdpbGwgYmVjb21lIHRoZSBnYWxsZXJ5IGlkICovXHJcbiAgQElucHV0KCkgZ2FsbGVyaXplOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGUgc2VsZWN0b3IgdXNlZCB0byBxdWVyeSBpbWFnZXMgZWxlbWVudHMgKi9cclxuICBASW5wdXQoKSBzZWxlY3RvciA9ICdpbWcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b25lOiBOZ1pvbmUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZ2FsbGVyeTogR2FsbGVyeSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9saWdodGJveDogTGlnaHRib3gsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybTogT2JqZWN0LFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXHJcbiAgICAgICAgICAgICAgQEhvc3QoKSBAU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgX2dhbGxlcnlDbXA6IEdhbGxlcnlDb21wb25lbnQpIHtcclxuXHJcbiAgICAvLyBTZXQgZ2FsbGVyaXplIG1vZGVcclxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybSkpIHtcclxuICAgICAgdGhpcy5fbW9kZSA9IF9nYWxsZXJ5Q21wID8gR2FsbGVyaXplTW9kZS5HYWxsZXJ5IDogR2FsbGVyaXplTW9kZS5EZXRlY3RvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2dhbGxlcnlJZCA9IHRoaXMuZ2FsbGVyaXplIHx8IHRoaXMuX2dhbGxlcnlJZDtcclxuICAgICAgY29uc3QgcmVmID0gdGhpcy5fZ2FsbGVyeS5yZWYodGhpcy5fZ2FsbGVyeUlkKTtcclxuXHJcbiAgICAgIHN3aXRjaCAodGhpcy5fbW9kZSkge1xyXG4gICAgICAgIGNhc2UgR2FsbGVyaXplTW9kZS5EZXRlY3RvcjpcclxuICAgICAgICAgIHRoaXMuZGV0ZWN0b3JNb2RlKHJlZik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEdhbGxlcml6ZU1vZGUuR2FsbGVyeTpcclxuICAgICAgICAgIHRoaXMuZ2FsbGVyeU1vZGUocmVmKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHN3aXRjaCAodGhpcy5fbW9kZSkge1xyXG4gICAgICBjYXNlIEdhbGxlcml6ZU1vZGUuRGV0ZWN0b3I6XHJcbiAgICAgICAgdGhpcy5fZGV0ZWN0b3IkLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIkLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBHYWxsZXJpemVNb2RlLkdhbGxlcnk6XHJcbiAgICAgICAgdGhpcy5faXRlbUNsaWNrJC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1DaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogR2FsbGVyeSBtb2RlOiBtZWFucyBgZ2FsbGVyaXplYCBkaXJlY3RpdmUgaXMgdXNlZCBvbiBgPGdhbGxlcnk+YCBjb21wb25lbnRcclxuICAgKiBBZGRzIGEgY2xpY2sgZXZlbnQgdG8gZWFjaCBnYWxsZXJ5IGl0ZW0gc28gaXQgb3BlbnMgaW4gbGlnaHRib3ggKi9cclxuICBwcml2YXRlIGdhbGxlcnlNb2RlKGdhbGxlcnlSZWY6IEdhbGxlcnlSZWYpIHtcclxuICAgIC8vIENsb25lIGl0cyBpdGVtcyB0byB0aGUgbmV3IGdhbGxlcnkgaW5zdGFuY2VcclxuICAgIHRoaXMuX2l0ZW1DbGljayQgPSB0aGlzLl9nYWxsZXJ5Q21wLmdhbGxlcnlSZWYuaXRlbUNsaWNrLnN1YnNjcmliZSgoaTogbnVtYmVyKSA9PiB0aGlzLl9saWdodGJveC5vcGVuKGksIHRoaXMuX2dhbGxlcnlJZCkpO1xyXG4gICAgdGhpcy5faXRlbUNoYW5nZSQgPSB0aGlzLl9nYWxsZXJ5Q21wLmdhbGxlcnlSZWYuaXRlbXNDaGFuZ2VkLnN1YnNjcmliZSgoc3RhdGU6IEdhbGxlcnlTdGF0ZSkgPT4gZ2FsbGVyeVJlZi5sb2FkKHN0YXRlLml0ZW1zKSk7XHJcbiAgfVxyXG5cclxuICAvKiogRGV0ZWN0b3IgbW9kZTogbWVhbnMgYGdhbGxlcml6ZWAgZGlyZWN0aXZlIGlzIHVzZWQgb24gYSBub3JtYWwgSFRNTEVsZW1lbnRcclxuICAgKiAgRGV0ZWN0cyBpbWFnZXMgYW5kIGFkZHMgYSBjbGljayBldmVudCB0byBlYWNoIGltYWdlIHNvIGl0IG9wZW5zIGluIHRoZSBsaWdodGJveCAqL1xyXG4gIHByaXZhdGUgZGV0ZWN0b3JNb2RlKGdhbGxlcnlSZWY6IEdhbGxlcnlSZWYpIHtcclxuICAgIHRoaXMuX2RldGVjdG9yJCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICAvLyBRdWVyeSBpbWFnZSBlbGVtZW50c1xyXG4gICAgdGhpcy5fZGV0ZWN0b3IkLnBpcGUoXHJcbiAgICAgIGRlYm91bmNlVGltZSgzMDApLFxyXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xyXG5cclxuICAgICAgICAvKiogZ2V0IGFsbCBpbWcgZWxlbWVudHMgZnJvbSBjb250ZW50ICovXHJcbiAgICAgICAgY29uc3QgaW1hZ2VFbGVtZW50cyA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKGltYWdlRWxlbWVudHMgJiYgaW1hZ2VFbGVtZW50cy5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICBjb25zdCBpbWFnZXM6IEdhbGxlcnlJdGVtW10gPSBbXTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gZnJvbShpbWFnZUVsZW1lbnRzKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKGVsOiBhbnksIGkpID0+IHtcclxuICAgICAgICAgICAgICAvLyBBZGQgY2xpY2sgZXZlbnQgdG8gdGhlIGltYWdlXHJcbiAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsICdjdXJzb3InLCAncG9pbnRlcicpO1xyXG4gICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KGVsLCAnb25jbGljaycsICgpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB0aGlzLl9saWdodGJveC5vcGVuKGksIHRoaXMuX2dhbGxlcnlJZCkpXHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgZWxlbWVudCBpcyB0eXBlIG9mIGltZyB1c2UgdGhlIHNyYyBwcm9wZXJ0eVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgc3JjOiBlbC5nZXRBdHRyaWJ1dGUoJ2ltYWdlU3JjJykgfHwgZWwuc3JjLFxyXG4gICAgICAgICAgICAgICAgICB0aHVtYjogZWwuZ2V0QXR0cmlidXRlKCd0aHVtYlNyYycpIHx8IGVsLnNyY1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB1c2UgZWxlbWVudCBiYWNrZ3JvdW5kLWltYWdlIHVybFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxTdHlsZSA9IGVsLmN1cnJlbnRTdHlsZSB8fCB0aGlzLl9kb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBlbFN0eWxlLmJhY2tncm91bmRJbWFnZS5zbGljZSg0LCAtMSkucmVwbGFjZSgvXCIvZywgJycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgc3JjOiBlbC5nZXRBdHRyaWJ1dGUoJ2ltYWdlU3JjJykgfHwgYmFja2dyb3VuZCxcclxuICAgICAgICAgICAgICAgICAgdGh1bWI6IGVsLmdldEF0dHJpYnV0ZSgndGh1bWJTcmMnKSB8fCBiYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHRhcCgoZGF0YTogYW55KSA9PiBpbWFnZXMucHVzaChuZXcgSW1hZ2VJdGVtKGRhdGEpKSksXHJcbiAgICAgICAgICAgIGZpbmFsaXplKCgpID0+IGdhbGxlcnlSZWYubG9hZChpbWFnZXMpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIEVNUFRZO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICkuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgLy8gT2JzZXJ2ZSBjb250ZW50IGNoYW5nZXNcclxuICAgIHRoaXMuX29ic2VydmVyJCA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHRoaXMuX2RldGVjdG9yJC5uZXh0KCkpO1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXIkLm9ic2VydmUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pO1xyXG4gIH1cclxufVxyXG4iXX0=