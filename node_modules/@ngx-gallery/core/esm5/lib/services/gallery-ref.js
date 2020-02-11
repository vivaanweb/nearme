/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject, Subject, of, EMPTY } from 'rxjs';
import { delay, filter, switchMap, tap } from 'rxjs/operators';
import { defaultState } from '../utils/gallery.default';
import { GalleryAction } from '../models/constants';
import { IframeItem, ImageItem, VideoItem, YoutubeItem } from '../components/templates/items.model';
/** @type {?} */
var filterActions = function (actions) {
    return filter(function (state) { return actions.indexOf(state.action) > -1; });
};
var ɵ0 = filterActions;
var GalleryRef = /** @class */ (function () {
    function GalleryRef(config, deleteInstance) {
        this.deleteInstance = deleteInstance;
        /**
         * Stream that emits on item click
         */
        this.itemClick = new Subject();
        /**
         * Stream that emits on thumbnail click
         */
        this.thumbClick = new Subject();
        /**
         * Stream that emits on an error occurs
         */
        this.error = new Subject();
        this._state = new BehaviorSubject(defaultState);
        this._config = new BehaviorSubject(config);
        this.state = this._state.asObservable();
        this.config = this._config.asObservable();
    }
    Object.defineProperty(GalleryRef.prototype, "initialized", {
        /** Stream that emits when gallery is initialized/reset */
        get: /**
         * Stream that emits when gallery is initialized/reset
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.INITIALIZED]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "itemsChanged", {
        /** Stream that emits when items is changed (items loaded, item added, item removed) */
        get: /**
         * Stream that emits when items is changed (items loaded, item added, item removed)
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.ITEMS_CHANGED]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "indexChanged", {
        /** Stream that emits when current item is changed */
        get: /**
         * Stream that emits when current item is changed
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.INDEX_CHANGED]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "playingChanged", {
        /** Stream that emits when the player should start or stop */
        get: /**
         * Stream that emits when the player should start or stop
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "playerActions", {
        /** Stream that emits when the player should start or stop */
        get: /**
         * Stream that emits when the player should start or stop
         * @private
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP, GalleryAction.INDEX_CHANGED]));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Activate player actions listener
     */
    /**
     * Activate player actions listener
     * @return {?}
     */
    GalleryRef.prototype.activatePlayer = /**
     * Activate player actions listener
     * @return {?}
     */
    function () {
        var _this = this;
        return this.playerActions.pipe(switchMap(function (e) {
            return e.isPlaying ? of({}).pipe(delay(_this._config.value.playerInterval), tap(function () { return _this.next(); })) : EMPTY;
        }));
    };
    /**
     * Set gallery state
     * @param state
     */
    /**
     * Set gallery state
     * @private
     * @param {?} state
     * @return {?}
     */
    GalleryRef.prototype.setState = /**
     * Set gallery state
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this._state.next(tslib_1.__assign({}, this._state.value, state));
    };
    /**
     * Set gallery config
     * @param config
     */
    /**
     * Set gallery config
     * @param {?} config
     * @return {?}
     */
    GalleryRef.prototype.setConfig = /**
     * Set gallery config
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this._config.next(tslib_1.__assign({}, this._config.value, config));
    };
    /** Add gallery item
     * @param item - Gallery item object
     * @param active - Set the new item as current slide
     */
    /**
     * Add gallery item
     * @param {?} item - Gallery item object
     * @param {?=} active - Set the new item as current slide
     * @return {?}
     */
    GalleryRef.prototype.add = /**
     * Add gallery item
     * @param {?} item - Gallery item object
     * @param {?=} active - Set the new item as current slide
     * @return {?}
     */
    function (item, active) {
        /** @type {?} */
        var items = tslib_1.__spread(this._state.value.items, [item]);
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items: items,
            hasNext: items.length > 1,
            currIndex: active ? items.length - 1 : this._state.value.currIndex
        });
    };
    /**
     * Add image item
     * @param data
     * @param active
     */
    /**
     * Add image item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addImage = /**
     * Add image item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new ImageItem(data), active);
    };
    /**
     * Add video item
     * @param data
     * @param active
     */
    /**
     * Add video item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addVideo = /**
     * Add video item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new VideoItem(data), active);
    };
    /**
     * Add iframe item
     * @param data
     * @param active
     */
    /**
     * Add iframe item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addIframe = /**
     * Add iframe item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new IframeItem(data), active);
    };
    /**
     * Add youtube item
     * @param data
     * @param active
     */
    /**
     * Add youtube item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addYoutube = /**
     * Add youtube item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new YoutubeItem(data), active);
    };
    /** Remove gallery item
     * @param i - Item index
     */
    /**
     * Remove gallery item
     * @param {?} i - Item index
     * @return {?}
     */
    GalleryRef.prototype.remove = /**
     * Remove gallery item
     * @param {?} i - Item index
     * @return {?}
     */
    function (i) {
        /** @type {?} */
        var items = tslib_1.__spread(this._state.value.items.slice(0, i), this._state.value.items.slice(i + 1, this._state.value.items.length));
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items: items,
            hasNext: items.length > 1,
            hasPrev: i > 0
        });
    };
    /**
     * Load items and reset the state
     * @param items - Gallery images data
     */
    /**
     * Load items and reset the state
     * @param {?} items - Gallery images data
     * @return {?}
     */
    GalleryRef.prototype.load = /**
     * Load items and reset the state
     * @param {?} items - Gallery images data
     * @return {?}
     */
    function (items) {
        if (items) {
            this.setState({
                action: GalleryAction.ITEMS_CHANGED,
                items: items,
                hasNext: items.length > 1,
                hasPrev: false
            });
        }
    };
    /**
     * Set active item
     * @param i - Active Index
     */
    /**
     * Set active item
     * @param {?} i - Active Index
     * @return {?}
     */
    GalleryRef.prototype.set = /**
     * Set active item
     * @param {?} i - Active Index
     * @return {?}
     */
    function (i) {
        if (i !== this._state.value.currIndex) {
            this.setState({
                action: GalleryAction.INDEX_CHANGED,
                currIndex: i,
                hasNext: i < this._state.value.items.length - 1,
                hasPrev: i > 0
            });
        }
    };
    /**
     * Next item
     */
    /**
     * Next item
     * @return {?}
     */
    GalleryRef.prototype.next = /**
     * Next item
     * @return {?}
     */
    function () {
        if (this._state.value.hasNext) {
            this.set(this._state.value.currIndex + 1);
        }
        else if (this._config.value.loop) {
            this.set(0);
        }
    };
    /**
     * Prev item
     */
    /**
     * Prev item
     * @return {?}
     */
    GalleryRef.prototype.prev = /**
     * Prev item
     * @return {?}
     */
    function () {
        if (this._state.value.hasPrev) {
            this.set(this._state.value.currIndex - 1);
        }
        else if (this._config.value.loop) {
            this.set(this._state.value.items.length - 1);
        }
    };
    /**
     * Start gallery player
     * @param interval
     */
    /**
     * Start gallery player
     * @param {?=} interval
     * @return {?}
     */
    GalleryRef.prototype.play = /**
     * Start gallery player
     * @param {?=} interval
     * @return {?}
     */
    function (interval) {
        if (interval) {
            this.setConfig({ playerInterval: interval });
        }
        this.setState({ action: GalleryAction.PLAY, isPlaying: true });
    };
    /**
     * Stop gallery player
     */
    /**
     * Stop gallery player
     * @return {?}
     */
    GalleryRef.prototype.stop = /**
     * Stop gallery player
     * @return {?}
     */
    function () {
        this.setState({ action: GalleryAction.STOP, isPlaying: false });
    };
    /**
     * Reset gallery to initial state
     */
    /**
     * Reset gallery to initial state
     * @return {?}
     */
    GalleryRef.prototype.reset = /**
     * Reset gallery to initial state
     * @return {?}
     */
    function () {
        this.setState(defaultState);
    };
    /**
     * Destroy gallery
     */
    /**
     * Destroy gallery
     * @return {?}
     */
    GalleryRef.prototype.destroy = /**
     * Destroy gallery
     * @return {?}
     */
    function () {
        this._state.complete();
        this._config.complete();
        this.itemClick.complete();
        this.thumbClick.complete();
        this.deleteInstance();
    };
    return GalleryRef;
}());
export { GalleryRef };
if (false) {
    /**
     * Stream that emits gallery state
     * @type {?}
     * @private
     */
    GalleryRef.prototype._state;
    /**
     * Stream that emits gallery config
     * @type {?}
     * @private
     */
    GalleryRef.prototype._config;
    /**
     * Stream that emits on item click
     * @type {?}
     */
    GalleryRef.prototype.itemClick;
    /**
     * Stream that emits on thumbnail click
     * @type {?}
     */
    GalleryRef.prototype.thumbClick;
    /**
     * Stream that emits on an error occurs
     * @type {?}
     */
    GalleryRef.prototype.error;
    /**
     * Stream that emits gallery state
     * @type {?}
     */
    GalleryRef.prototype.state;
    /**
     * Stream that emits gallery config
     * @type {?}
     */
    GalleryRef.prototype.config;
    /**
     * @type {?}
     * @private
     */
    GalleryRef.prototype.deleteInstance;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZWYuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9nYWxsZXJ5LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDdEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUd4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztJQUU5RixhQUFhLEdBQUcsVUFBQyxPQUFpQjtJQUN0QyxPQUFPLE1BQU0sQ0FBQyxVQUFDLEtBQW1CLElBQUssT0FBQSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO0FBQzdFLENBQUM7O0FBRUQ7SUFrREUsb0JBQVksTUFBcUIsRUFBVSxjQUF3QjtRQUF4QixtQkFBYyxHQUFkLGNBQWMsQ0FBVTs7OztRQXpDMUQsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7Ozs7UUFHbEMsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7Ozs7UUFHbkMsVUFBSyxHQUFHLElBQUksT0FBTyxFQUFnQixDQUFDO1FBb0MzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBZSxDQUFlLFlBQVksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQWdCLE1BQU0sQ0FBQyxDQUFD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QztJQUNoRSxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMEJBQUs7Ozs7SUFBTDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDRCQUFPOzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUgsaUJBQUM7QUFBRCxDQUFDLEFBbFBELElBa1BDOzs7Ozs7OztJQS9PQyw0QkFBdUQ7Ozs7OztJQUd2RCw2QkFBeUQ7Ozs7O0lBR3pELCtCQUEyQzs7Ozs7SUFHM0MsZ0NBQTRDOzs7OztJQUc1QywyQkFBNkM7Ozs7O0lBSzdDLDJCQUF5Qzs7Ozs7SUFHekMsNEJBQTJDOzs7OztJQTJCUixvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QsIE9ic2VydmFibGUsIG9mLCBFTVBUWX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlbGF5LCBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0U3RhdGUgfSBmcm9tICcuLi91dGlscy9nYWxsZXJ5LmRlZmF1bHQnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5RXJyb3IsIEdhbGxlcnlJdGVtLCBHYWxsZXJ5U3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvZ2FsbGVyeS5tb2RlbCc7XHJcbmltcG9ydCB7IEdhbGxlcnlDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgR2FsbGVyeUFjdGlvbiB9IGZyb20gJy4uL21vZGVscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBJZnJhbWVJdGVtLCBJbWFnZUl0ZW0sIFZpZGVvSXRlbSwgWW91dHViZUl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL3RlbXBsYXRlcy9pdGVtcy5tb2RlbCc7XHJcblxyXG5jb25zdCBmaWx0ZXJBY3Rpb25zID0gKGFjdGlvbnM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgcmV0dXJuIGZpbHRlcigoc3RhdGU6IEdhbGxlcnlTdGF0ZSkgPT4gYWN0aW9ucy5pbmRleE9mKHN0YXRlLmFjdGlvbikgPiAtMSk7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeVJlZiB7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBnYWxsZXJ5IHN0YXRlICovXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhdGU6IEJlaGF2aW9yU3ViamVjdDxHYWxsZXJ5U3RhdGU+O1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgZ2FsbGVyeSBjb25maWcgKi9cclxuICBwcml2YXRlIHJlYWRvbmx5IF9jb25maWc6IEJlaGF2aW9yU3ViamVjdDxHYWxsZXJ5Q29uZmlnPjtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIG9uIGl0ZW0gY2xpY2sgKi9cclxuICByZWFkb25seSBpdGVtQ2xpY2sgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBvbiB0aHVtYm5haWwgY2xpY2sgKi9cclxuICByZWFkb25seSB0aHVtYkNsaWNrID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgb24gYW4gZXJyb3Igb2NjdXJzICovXHJcbiAgcmVhZG9ubHkgZXJyb3IgPSBuZXcgU3ViamVjdDxHYWxsZXJ5RXJyb3I+KCk7XHJcblxyXG4gIC8qKiBHYWxsZXJ5IEV2ZW50cyAqL1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgZ2FsbGVyeSBzdGF0ZSAqL1xyXG4gIHJlYWRvbmx5IHN0YXRlOiBPYnNlcnZhYmxlPEdhbGxlcnlTdGF0ZT47XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBnYWxsZXJ5IGNvbmZpZyAqL1xyXG4gIHJlYWRvbmx5IGNvbmZpZzogT2JzZXJ2YWJsZTxHYWxsZXJ5Q29uZmlnPjtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gZ2FsbGVyeSBpcyBpbml0aWFsaXplZC9yZXNldCAqL1xyXG4gIGdldCBpbml0aWFsaXplZCgpOiBPYnNlcnZhYmxlPEdhbGxlcnlTdGF0ZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucGlwZShmaWx0ZXJBY3Rpb25zKFtHYWxsZXJ5QWN0aW9uLklOSVRJQUxJWkVEXSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gaXRlbXMgaXMgY2hhbmdlZCAoaXRlbXMgbG9hZGVkLCBpdGVtIGFkZGVkLCBpdGVtIHJlbW92ZWQpICovXHJcbiAgZ2V0IGl0ZW1zQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPEdhbGxlcnlTdGF0ZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucGlwZShmaWx0ZXJBY3Rpb25zKFtHYWxsZXJ5QWN0aW9uLklURU1TX0NIQU5HRURdKSk7XHJcbiAgfVxyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBjdXJyZW50IGl0ZW0gaXMgY2hhbmdlZCAqL1xyXG4gIGdldCBpbmRleENoYW5nZWQoKTogT2JzZXJ2YWJsZTxHYWxsZXJ5U3RhdGU+IHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLnBpcGUoZmlsdGVyQWN0aW9ucyhbR2FsbGVyeUFjdGlvbi5JTkRFWF9DSEFOR0VEXSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gdGhlIHBsYXllciBzaG91bGQgc3RhcnQgb3Igc3RvcCAqL1xyXG4gIGdldCBwbGF5aW5nQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPEdhbGxlcnlTdGF0ZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucGlwZShmaWx0ZXJBY3Rpb25zKFtHYWxsZXJ5QWN0aW9uLlBMQVksIEdhbGxlcnlBY3Rpb24uU1RPUF0pKTtcclxuICB9XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHRoZSBwbGF5ZXIgc2hvdWxkIHN0YXJ0IG9yIHN0b3AgKi9cclxuICBwcml2YXRlIGdldCBwbGF5ZXJBY3Rpb25zKCk6IE9ic2VydmFibGU8R2FsbGVyeVN0YXRlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5waXBlKGZpbHRlckFjdGlvbnMoW0dhbGxlcnlBY3Rpb24uUExBWSwgR2FsbGVyeUFjdGlvbi5TVE9QLCBHYWxsZXJ5QWN0aW9uLklOREVYX0NIQU5HRURdKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IEdhbGxlcnlDb25maWcsIHByaXZhdGUgZGVsZXRlSW5zdGFuY2U6IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R2FsbGVyeVN0YXRlPihkZWZhdWx0U3RhdGUpO1xyXG4gICAgdGhpcy5fY29uZmlnID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHYWxsZXJ5Q29uZmlnPihjb25maWcpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuX3N0YXRlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLl9jb25maWcuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3RpdmF0ZSBwbGF5ZXIgYWN0aW9ucyBsaXN0ZW5lclxyXG4gICAqL1xyXG4gIGFjdGl2YXRlUGxheWVyKCk6IE9ic2VydmFibGU8R2FsbGVyeVN0YXRlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJBY3Rpb25zLnBpcGUoXHJcbiAgICAgIHN3aXRjaE1hcCgoZTogR2FsbGVyeVN0YXRlKSA9PlxyXG4gICAgICAgIGUuaXNQbGF5aW5nID8gb2Yoe30pLnBpcGUoXHJcbiAgICAgICAgICBkZWxheSh0aGlzLl9jb25maWcudmFsdWUucGxheWVySW50ZXJ2YWwpLFxyXG4gICAgICAgICAgdGFwKCgpID0+IHRoaXMubmV4dCgpKVxyXG4gICAgICAgICkgOiBFTVBUWVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGdhbGxlcnkgc3RhdGVcclxuICAgKiBAcGFyYW0gc3RhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBHYWxsZXJ5U3RhdGUpIHtcclxuICAgIHRoaXMuX3N0YXRlLm5leHQoey4uLnRoaXMuX3N0YXRlLnZhbHVlLCAuLi5zdGF0ZX0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGdhbGxlcnkgY29uZmlnXHJcbiAgICogQHBhcmFtIGNvbmZpZ1xyXG4gICAqL1xyXG4gIHNldENvbmZpZyhjb25maWc6IEdhbGxlcnlDb25maWcpIHtcclxuICAgIHRoaXMuX2NvbmZpZy5uZXh0KHsuLi50aGlzLl9jb25maWcudmFsdWUsIC4uLmNvbmZpZ30pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFkZCBnYWxsZXJ5IGl0ZW1cclxuICAgKiBAcGFyYW0gaXRlbSAtIEdhbGxlcnkgaXRlbSBvYmplY3RcclxuICAgKiBAcGFyYW0gYWN0aXZlIC0gU2V0IHRoZSBuZXcgaXRlbSBhcyBjdXJyZW50IHNsaWRlXHJcbiAgICovXHJcbiAgYWRkKGl0ZW06IEdhbGxlcnlJdGVtLCBhY3RpdmU/OiBib29sZWFuKSB7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBbLi4udGhpcy5fc3RhdGUudmFsdWUuaXRlbXMsIGl0ZW1dO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGFjdGlvbjogR2FsbGVyeUFjdGlvbi5JVEVNU19DSEFOR0VELFxyXG4gICAgICBpdGVtczogaXRlbXMsXHJcbiAgICAgIGhhc05leHQ6IGl0ZW1zLmxlbmd0aCA+IDEsXHJcbiAgICAgIGN1cnJJbmRleDogYWN0aXZlID8gaXRlbXMubGVuZ3RoIC0gMSA6IHRoaXMuX3N0YXRlLnZhbHVlLmN1cnJJbmRleFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgaW1hZ2UgaXRlbVxyXG4gICAqIEBwYXJhbSBkYXRhXHJcbiAgICogQHBhcmFtIGFjdGl2ZVxyXG4gICAqL1xyXG4gIGFkZEltYWdlKGRhdGE6IGFueSwgYWN0aXZlPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5hZGQobmV3IEltYWdlSXRlbShkYXRhKSwgYWN0aXZlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCB2aWRlbyBpdGVtXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKiBAcGFyYW0gYWN0aXZlXHJcbiAgICovXHJcbiAgYWRkVmlkZW8oZGF0YTogYW55LCBhY3RpdmU/OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmFkZChuZXcgVmlkZW9JdGVtKGRhdGEpLCBhY3RpdmUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGlmcmFtZSBpdGVtXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKiBAcGFyYW0gYWN0aXZlXHJcbiAgICovXHJcbiAgYWRkSWZyYW1lKGRhdGE6IGFueSwgYWN0aXZlPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5hZGQobmV3IElmcmFtZUl0ZW0oZGF0YSksIGFjdGl2ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgeW91dHViZSBpdGVtXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKiBAcGFyYW0gYWN0aXZlXHJcbiAgICovXHJcbiAgYWRkWW91dHViZShkYXRhOiBhbnksIGFjdGl2ZT86IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuYWRkKG5ldyBZb3V0dWJlSXRlbShkYXRhKSwgYWN0aXZlKTtcclxuICB9XHJcblxyXG4gIC8qKiBSZW1vdmUgZ2FsbGVyeSBpdGVtXHJcbiAgICogQHBhcmFtIGkgLSBJdGVtIGluZGV4XHJcbiAgICovXHJcbiAgcmVtb3ZlKGk6IG51bWJlcikge1xyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgIC4uLnRoaXMuX3N0YXRlLnZhbHVlLml0ZW1zLnNsaWNlKDAsIGkpLFxyXG4gICAgICAuLi50aGlzLl9zdGF0ZS52YWx1ZS5pdGVtcy5zbGljZShpICsgMSwgdGhpcy5fc3RhdGUudmFsdWUuaXRlbXMubGVuZ3RoKVxyXG4gICAgXTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBhY3Rpb246IEdhbGxlcnlBY3Rpb24uSVRFTVNfQ0hBTkdFRCxcclxuICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgICBoYXNOZXh0OiBpdGVtcy5sZW5ndGggPiAxLFxyXG4gICAgICBoYXNQcmV2OiBpID4gMFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkIGl0ZW1zIGFuZCByZXNldCB0aGUgc3RhdGVcclxuICAgKiBAcGFyYW0gaXRlbXMgLSBHYWxsZXJ5IGltYWdlcyBkYXRhXHJcbiAgICovXHJcbiAgbG9hZChpdGVtczogR2FsbGVyeUl0ZW1bXSkge1xyXG4gICAgaWYgKGl0ZW1zKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGFjdGlvbjogR2FsbGVyeUFjdGlvbi5JVEVNU19DSEFOR0VELFxyXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgICBoYXNOZXh0OiBpdGVtcy5sZW5ndGggPiAxLFxyXG4gICAgICAgIGhhc1ByZXY6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGFjdGl2ZSBpdGVtXHJcbiAgICogQHBhcmFtIGkgLSBBY3RpdmUgSW5kZXhcclxuICAgKi9cclxuICBzZXQoaTogbnVtYmVyKSB7XHJcbiAgICBpZiAoaSAhPT0gdGhpcy5fc3RhdGUudmFsdWUuY3VyckluZGV4KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGFjdGlvbjogR2FsbGVyeUFjdGlvbi5JTkRFWF9DSEFOR0VELFxyXG4gICAgICAgIGN1cnJJbmRleDogaSxcclxuICAgICAgICBoYXNOZXh0OiBpIDwgdGhpcy5fc3RhdGUudmFsdWUuaXRlbXMubGVuZ3RoIC0gMSxcclxuICAgICAgICBoYXNQcmV2OiBpID4gMFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE5leHQgaXRlbVxyXG4gICAqL1xyXG4gIG5leHQoKSB7XHJcbiAgICBpZiAodGhpcy5fc3RhdGUudmFsdWUuaGFzTmV4dCkge1xyXG4gICAgICB0aGlzLnNldCh0aGlzLl9zdGF0ZS52YWx1ZS5jdXJySW5kZXggKyAxKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnLnZhbHVlLmxvb3ApIHtcclxuICAgICAgdGhpcy5zZXQoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmV2IGl0ZW1cclxuICAgKi9cclxuICBwcmV2KCkge1xyXG4gICAgaWYgKHRoaXMuX3N0YXRlLnZhbHVlLmhhc1ByZXYpIHtcclxuICAgICAgdGhpcy5zZXQodGhpcy5fc3RhdGUudmFsdWUuY3VyckluZGV4IC0gMSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy52YWx1ZS5sb29wKSB7XHJcbiAgICAgIHRoaXMuc2V0KHRoaXMuX3N0YXRlLnZhbHVlLml0ZW1zLmxlbmd0aCAtIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgZ2FsbGVyeSBwbGF5ZXJcclxuICAgKiBAcGFyYW0gaW50ZXJ2YWxcclxuICAgKi9cclxuICBwbGF5KGludGVydmFsPzogbnVtYmVyKSB7XHJcbiAgICBpZiAoaW50ZXJ2YWwpIHtcclxuICAgICAgdGhpcy5zZXRDb25maWcoe3BsYXllckludGVydmFsOiBpbnRlcnZhbH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aW9uOiBHYWxsZXJ5QWN0aW9uLlBMQVksIGlzUGxheWluZzogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCBnYWxsZXJ5IHBsYXllclxyXG4gICAqL1xyXG4gIHN0b3AoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHthY3Rpb246IEdhbGxlcnlBY3Rpb24uU1RPUCwgaXNQbGF5aW5nOiBmYWxzZX0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgZ2FsbGVyeSB0byBpbml0aWFsIHN0YXRlXHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKGRlZmF1bHRTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0cm95IGdhbGxlcnlcclxuICAgKi9cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5fc3RhdGUuY29tcGxldGUoKTtcclxuICAgIHRoaXMuX2NvbmZpZy5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5pdGVtQ2xpY2suY29tcGxldGUoKTtcclxuICAgIHRoaXMudGh1bWJDbGljay5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5kZWxldGVJbnN0YW5jZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19