/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { GalleryRef } from './gallery-ref';
import { GALLERY_CONFIG } from '../models/config.model';
import { defaultConfig } from '../utils/gallery.default';
import * as i0 from "@angular/core";
import * as i1 from "../models/config.model";
export class Gallery {
    /**
     * @param {?} config
     */
    constructor(config) {
        /**
         * Store gallery instances
         */
        this._instances = new Map();
        this.config = config ? Object.assign({}, defaultConfig, config) : defaultConfig;
    }
    /**
     * Get or create gallery by ID
     * @param {?=} id
     * @param {?=} config
     * @return {?}
     */
    ref(id = 'root', config) {
        if (this._instances.has(id)) {
            /** @type {?} */
            const galleryRef = this._instances.get(id);
            if (config) {
                galleryRef.setConfig(Object.assign({}, this.config, config));
            }
            return galleryRef;
        }
        else {
            return this._instances.set(id, new GalleryRef(Object.assign({}, this.config, config), this.deleteInstance(id))).get(id);
        }
    }
    /**
     * Destroy all gallery instances
     * @return {?}
     */
    destroyAll() {
        this._instances.forEach((ref) => ref.destroy());
    }
    /**
     * Reset all gallery instances
     * @return {?}
     */
    resetAll() {
        this._instances.forEach((ref) => ref.reset());
    }
    /**
     * A destroyer function for each gallery instance
     * @private
     * @param {?} id
     * @return {?}
     */
    deleteInstance(id) {
        return () => {
            if (this._instances.has(id)) {
                this._instances.delete(id);
            }
        };
    }
}
Gallery.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Gallery.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GALLERY_CONFIG,] }] }
];
/** @nocollapse */ Gallery.ngInjectableDef = i0.defineInjectable({ factory: function Gallery_Factory() { return new Gallery(i0.inject(i1.GALLERY_CONFIG, 8)); }, token: Gallery, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2FsbGVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWlCLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBS3pELE1BQU0sT0FBTyxPQUFPOzs7O0lBUWxCLFlBQWdELE1BQXFCOzs7O1FBTHBELGVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztRQU0xRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLG1CQUFLLGFBQWEsRUFBSyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7O0lBT0QsR0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLEVBQUUsTUFBc0I7UUFDckMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTs7a0JBQ3JCLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDMUMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsVUFBVSxDQUFDLFNBQVMsbUJBQUssSUFBSSxDQUFDLE1BQU0sRUFBSyxNQUFNLEVBQUUsQ0FBQzthQUNuRDtZQUNELE9BQU8sVUFBVSxDQUFDO1NBQ25CO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLFVBQVUsbUJBQUssSUFBSSxDQUFDLE1BQU0sRUFBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlHO0lBQ0gsQ0FBQzs7Ozs7SUFLRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFlLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBS0QsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBZSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7O0lBS08sY0FBYyxDQUFDLEVBQVU7UUFDL0IsT0FBTyxHQUFHLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7OztZQXZERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7NENBU2MsUUFBUSxZQUFJLE1BQU0sU0FBQyxjQUFjOzs7Ozs7Ozs7SUFMOUMsNkJBQTREOzs7OztJQUc1RCx5QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBHYWxsZXJ5UmVmIH0gZnJvbSAnLi9nYWxsZXJ5LXJlZic7XHJcbmltcG9ydCB7IEdhbGxlcnlDb25maWcsIEdBTExFUllfQ09ORklHIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IGRlZmF1bHRDb25maWcgfSBmcm9tICcuLi91dGlscy9nYWxsZXJ5LmRlZmF1bHQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeSB7XHJcblxyXG4gIC8qKiBTdG9yZSBnYWxsZXJ5IGluc3RhbmNlcyAqL1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2luc3RhbmNlcyA9IG5ldyBNYXA8c3RyaW5nLCBHYWxsZXJ5UmVmPigpO1xyXG5cclxuICAvKiogR2xvYmFsIGNvbmZpZyAqL1xyXG4gIGNvbmZpZzogR2FsbGVyeUNvbmZpZztcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChHQUxMRVJZX0NPTkZJRykgY29uZmlnOiBHYWxsZXJ5Q29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyA/IHsuLi5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWd9IDogZGVmYXVsdENvbmZpZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBvciBjcmVhdGUgZ2FsbGVyeSBieSBJRFxyXG4gICAqIEBwYXJhbSBpZFxyXG4gICAqIEBwYXJhbSBjb25maWdcclxuICAgKi9cclxuICByZWYoaWQgPSAncm9vdCcsIGNvbmZpZz86IEdhbGxlcnlDb25maWcpOiBHYWxsZXJ5UmVmIHtcclxuICAgIGlmICh0aGlzLl9pbnN0YW5jZXMuaGFzKGlkKSkge1xyXG4gICAgICBjb25zdCBnYWxsZXJ5UmVmID0gdGhpcy5faW5zdGFuY2VzLmdldChpZCk7XHJcbiAgICAgIGlmIChjb25maWcpIHtcclxuICAgICAgICBnYWxsZXJ5UmVmLnNldENvbmZpZyh7Li4udGhpcy5jb25maWcsIC4uLmNvbmZpZ30pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBnYWxsZXJ5UmVmO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlcy5zZXQoaWQsIG5ldyBHYWxsZXJ5UmVmKHsuLi50aGlzLmNvbmZpZywgLi4uY29uZmlnfSwgdGhpcy5kZWxldGVJbnN0YW5jZShpZCkpKS5nZXQoaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzdHJveSBhbGwgZ2FsbGVyeSBpbnN0YW5jZXNcclxuICAgKi9cclxuICBkZXN0cm95QWxsKCkge1xyXG4gICAgdGhpcy5faW5zdGFuY2VzLmZvckVhY2goKHJlZjogR2FsbGVyeVJlZikgPT4gcmVmLmRlc3Ryb3koKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBhbGwgZ2FsbGVyeSBpbnN0YW5jZXNcclxuICAgKi9cclxuICByZXNldEFsbCgpIHtcclxuICAgIHRoaXMuX2luc3RhbmNlcy5mb3JFYWNoKChyZWY6IEdhbGxlcnlSZWYpID0+IHJlZi5yZXNldCgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgZGVzdHJveWVyIGZ1bmN0aW9uIGZvciBlYWNoIGdhbGxlcnkgaW5zdGFuY2VcclxuICAgKi9cclxuICBwcml2YXRlIGRlbGV0ZUluc3RhbmNlKGlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9pbnN0YW5jZXMuaGFzKGlkKSkge1xyXG4gICAgICAgIHRoaXMuX2luc3RhbmNlcy5kZWxldGUoaWQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuIl19