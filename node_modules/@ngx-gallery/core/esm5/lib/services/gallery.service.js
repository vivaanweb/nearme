/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { GalleryRef } from './gallery-ref';
import { GALLERY_CONFIG } from '../models/config.model';
import { defaultConfig } from '../utils/gallery.default';
import * as i0 from "@angular/core";
import * as i1 from "../models/config.model";
var Gallery = /** @class */ (function () {
    function Gallery(config) {
        /**
         * Store gallery instances
         */
        this._instances = new Map();
        this.config = config ? tslib_1.__assign({}, defaultConfig, config) : defaultConfig;
    }
    /**
     * Get or create gallery by ID
     * @param id
     * @param config
     */
    /**
     * Get or create gallery by ID
     * @param {?=} id
     * @param {?=} config
     * @return {?}
     */
    Gallery.prototype.ref = /**
     * Get or create gallery by ID
     * @param {?=} id
     * @param {?=} config
     * @return {?}
     */
    function (id, config) {
        if (id === void 0) { id = 'root'; }
        if (this._instances.has(id)) {
            /** @type {?} */
            var galleryRef = this._instances.get(id);
            if (config) {
                galleryRef.setConfig(tslib_1.__assign({}, this.config, config));
            }
            return galleryRef;
        }
        else {
            return this._instances.set(id, new GalleryRef(tslib_1.__assign({}, this.config, config), this.deleteInstance(id))).get(id);
        }
    };
    /**
     * Destroy all gallery instances
     */
    /**
     * Destroy all gallery instances
     * @return {?}
     */
    Gallery.prototype.destroyAll = /**
     * Destroy all gallery instances
     * @return {?}
     */
    function () {
        this._instances.forEach(function (ref) { return ref.destroy(); });
    };
    /**
     * Reset all gallery instances
     */
    /**
     * Reset all gallery instances
     * @return {?}
     */
    Gallery.prototype.resetAll = /**
     * Reset all gallery instances
     * @return {?}
     */
    function () {
        this._instances.forEach(function (ref) { return ref.reset(); });
    };
    /**
     * A destroyer function for each gallery instance
     */
    /**
     * A destroyer function for each gallery instance
     * @private
     * @param {?} id
     * @return {?}
     */
    Gallery.prototype.deleteInstance = /**
     * A destroyer function for each gallery instance
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        return function () {
            if (_this._instances.has(id)) {
                _this._instances.delete(id);
            }
        };
    };
    Gallery.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Gallery.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GALLERY_CONFIG,] }] }
    ]; };
    /** @nocollapse */ Gallery.ngInjectableDef = i0.defineInjectable({ factory: function Gallery_Factory() { return new Gallery(i0.inject(i1.GALLERY_CONFIG, 8)); }, token: Gallery, providedIn: "root" });
    return Gallery;
}());
export { Gallery };
if (false) {
    /**
     * Store gallery instances
     * @type {?}
     * @private
     */
    Gallery.prototype._instances;
    /**
     * Global config
     * @type {?}
     */
    Gallery.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2FsbGVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFpQixjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUV6RDtJQVdFLGlCQUFnRCxNQUFxQjs7OztRQUxwRCxlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUM7UUFNMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxzQkFBSyxhQUFhLEVBQUssTUFBTSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxxQkFBRzs7Ozs7O0lBQUgsVUFBSSxFQUFXLEVBQUUsTUFBc0I7UUFBbkMsbUJBQUEsRUFBQSxXQUFXO1FBQ2IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTs7Z0JBQ3JCLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDMUMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsVUFBVSxDQUFDLFNBQVMsc0JBQUssSUFBSSxDQUFDLE1BQU0sRUFBSyxNQUFNLEVBQUUsQ0FBQzthQUNuRDtZQUNELE9BQU8sVUFBVSxDQUFDO1NBQ25CO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLFVBQVUsc0JBQUssSUFBSSxDQUFDLE1BQU0sRUFBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlHO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDRCQUFVOzs7O0lBQVY7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQWUsSUFBSyxPQUFBLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBYixDQUFhLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMEJBQVE7Ozs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBZSxJQUFLLE9BQUEsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNLLGdDQUFjOzs7Ozs7SUFBdEIsVUFBdUIsRUFBVTtRQUFqQyxpQkFNQztRQUxDLE9BQU87WUFDTCxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMzQixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQXZERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dEQVNjLFFBQVEsWUFBSSxNQUFNLFNBQUMsY0FBYzs7O2tCQWpCaEQ7Q0ErREMsQUF6REQsSUF5REM7U0F0RFksT0FBTzs7Ozs7OztJQUdsQiw2QkFBNEQ7Ozs7O0lBRzVELHlCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEdhbGxlcnlSZWYgfSBmcm9tICcuL2dhbGxlcnktcmVmJztcclxuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZywgR0FMTEVSWV9DT05GSUcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgZGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL3V0aWxzL2dhbGxlcnkuZGVmYXVsdCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5IHtcclxuXHJcbiAgLyoqIFN0b3JlIGdhbGxlcnkgaW5zdGFuY2VzICovXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfaW5zdGFuY2VzID0gbmV3IE1hcDxzdHJpbmcsIEdhbGxlcnlSZWY+KCk7XHJcblxyXG4gIC8qKiBHbG9iYWwgY29uZmlnICovXHJcbiAgY29uZmlnOiBHYWxsZXJ5Q29uZmlnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KEdBTExFUllfQ09ORklHKSBjb25maWc6IEdhbGxlcnlDb25maWcpIHtcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnID8gey4uLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZ30gOiBkZWZhdWx0Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IG9yIGNyZWF0ZSBnYWxsZXJ5IGJ5IElEXHJcbiAgICogQHBhcmFtIGlkXHJcbiAgICogQHBhcmFtIGNvbmZpZ1xyXG4gICAqL1xyXG4gIHJlZihpZCA9ICdyb290JywgY29uZmlnPzogR2FsbGVyeUNvbmZpZyk6IEdhbGxlcnlSZWYge1xyXG4gICAgaWYgKHRoaXMuX2luc3RhbmNlcy5oYXMoaWQpKSB7XHJcbiAgICAgIGNvbnN0IGdhbGxlcnlSZWYgPSB0aGlzLl9pbnN0YW5jZXMuZ2V0KGlkKTtcclxuICAgICAgaWYgKGNvbmZpZykge1xyXG4gICAgICAgIGdhbGxlcnlSZWYuc2V0Q29uZmlnKHsuLi50aGlzLmNvbmZpZywgLi4uY29uZmlnfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGdhbGxlcnlSZWY7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VzLnNldChpZCwgbmV3IEdhbGxlcnlSZWYoey4uLnRoaXMuY29uZmlnLCAuLi5jb25maWd9LCB0aGlzLmRlbGV0ZUluc3RhbmNlKGlkKSkpLmdldChpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0cm95IGFsbCBnYWxsZXJ5IGluc3RhbmNlc1xyXG4gICAqL1xyXG4gIGRlc3Ryb3lBbGwoKSB7XHJcbiAgICB0aGlzLl9pbnN0YW5jZXMuZm9yRWFjaCgocmVmOiBHYWxsZXJ5UmVmKSA9PiByZWYuZGVzdHJveSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IGFsbCBnYWxsZXJ5IGluc3RhbmNlc1xyXG4gICAqL1xyXG4gIHJlc2V0QWxsKCkge1xyXG4gICAgdGhpcy5faW5zdGFuY2VzLmZvckVhY2goKHJlZjogR2FsbGVyeVJlZikgPT4gcmVmLnJlc2V0KCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBkZXN0cm95ZXIgZnVuY3Rpb24gZm9yIGVhY2ggZ2FsbGVyeSBpbnN0YW5jZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZGVsZXRlSW5zdGFuY2UoaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2luc3RhbmNlcy5oYXMoaWQpKSB7XHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2VzLmRlbGV0ZShpZCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=