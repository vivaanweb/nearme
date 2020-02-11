/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject, Subject, of, EMPTY } from 'rxjs';
import { delay, filter, switchMap, tap } from 'rxjs/operators';
import { defaultState } from '../utils/gallery.default';
import { GalleryAction } from '../models/constants';
import { IframeItem, ImageItem, VideoItem, YoutubeItem } from '../components/templates/items.model';
/** @type {?} */
const filterActions = (actions) => {
    return filter((state) => actions.indexOf(state.action) > -1);
};
const ɵ0 = filterActions;
export class GalleryRef {
    /**
     * @param {?} config
     * @param {?} deleteInstance
     */
    constructor(config, deleteInstance) {
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
    /**
     * Stream that emits when gallery is initialized/reset
     * @return {?}
     */
    get initialized() {
        return this.state.pipe(filterActions([GalleryAction.INITIALIZED]));
    }
    /**
     * Stream that emits when items is changed (items loaded, item added, item removed)
     * @return {?}
     */
    get itemsChanged() {
        return this.state.pipe(filterActions([GalleryAction.ITEMS_CHANGED]));
    }
    /**
     * Stream that emits when current item is changed
     * @return {?}
     */
    get indexChanged() {
        return this.state.pipe(filterActions([GalleryAction.INDEX_CHANGED]));
    }
    /**
     * Stream that emits when the player should start or stop
     * @return {?}
     */
    get playingChanged() {
        return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP]));
    }
    /**
     * Stream that emits when the player should start or stop
     * @private
     * @return {?}
     */
    get playerActions() {
        return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP, GalleryAction.INDEX_CHANGED]));
    }
    /**
     * Activate player actions listener
     * @return {?}
     */
    activatePlayer() {
        return this.playerActions.pipe(switchMap((e) => e.isPlaying ? of({}).pipe(delay(this._config.value.playerInterval), tap(() => this.next())) : EMPTY));
    }
    /**
     * Set gallery state
     * @private
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this._state.next(Object.assign({}, this._state.value, state));
    }
    /**
     * Set gallery config
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        this._config.next(Object.assign({}, this._config.value, config));
    }
    /**
     * Add gallery item
     * @param {?} item - Gallery item object
     * @param {?=} active - Set the new item as current slide
     * @return {?}
     */
    add(item, active) {
        /** @type {?} */
        const items = [...this._state.value.items, item];
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items: items,
            hasNext: items.length > 1,
            currIndex: active ? items.length - 1 : this._state.value.currIndex
        });
    }
    /**
     * Add image item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    addImage(data, active) {
        this.add(new ImageItem(data), active);
    }
    /**
     * Add video item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    addVideo(data, active) {
        this.add(new VideoItem(data), active);
    }
    /**
     * Add iframe item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    addIframe(data, active) {
        this.add(new IframeItem(data), active);
    }
    /**
     * Add youtube item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    addYoutube(data, active) {
        this.add(new YoutubeItem(data), active);
    }
    /**
     * Remove gallery item
     * @param {?} i - Item index
     * @return {?}
     */
    remove(i) {
        /** @type {?} */
        const items = [
            ...this._state.value.items.slice(0, i),
            ...this._state.value.items.slice(i + 1, this._state.value.items.length)
        ];
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items: items,
            hasNext: items.length > 1,
            hasPrev: i > 0
        });
    }
    /**
     * Load items and reset the state
     * @param {?} items - Gallery images data
     * @return {?}
     */
    load(items) {
        if (items) {
            this.setState({
                action: GalleryAction.ITEMS_CHANGED,
                items: items,
                hasNext: items.length > 1,
                hasPrev: false
            });
        }
    }
    /**
     * Set active item
     * @param {?} i - Active Index
     * @return {?}
     */
    set(i) {
        if (i !== this._state.value.currIndex) {
            this.setState({
                action: GalleryAction.INDEX_CHANGED,
                currIndex: i,
                hasNext: i < this._state.value.items.length - 1,
                hasPrev: i > 0
            });
        }
    }
    /**
     * Next item
     * @return {?}
     */
    next() {
        if (this._state.value.hasNext) {
            this.set(this._state.value.currIndex + 1);
        }
        else if (this._config.value.loop) {
            this.set(0);
        }
    }
    /**
     * Prev item
     * @return {?}
     */
    prev() {
        if (this._state.value.hasPrev) {
            this.set(this._state.value.currIndex - 1);
        }
        else if (this._config.value.loop) {
            this.set(this._state.value.items.length - 1);
        }
    }
    /**
     * Start gallery player
     * @param {?=} interval
     * @return {?}
     */
    play(interval) {
        if (interval) {
            this.setConfig({ playerInterval: interval });
        }
        this.setState({ action: GalleryAction.PLAY, isPlaying: true });
    }
    /**
     * Stop gallery player
     * @return {?}
     */
    stop() {
        this.setState({ action: GalleryAction.STOP, isPlaying: false });
    }
    /**
     * Reset gallery to initial state
     * @return {?}
     */
    reset() {
        this.setState(defaultState);
    }
    /**
     * Destroy gallery
     * @return {?}
     */
    destroy() {
        this._state.complete();
        this._config.complete();
        this.itemClick.complete();
        this.thumbClick.complete();
        this.deleteInstance();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZWYuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9nYWxsZXJ5LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQWMsRUFBRSxFQUFFLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7O01BRTlGLGFBQWEsR0FBRyxDQUFDLE9BQWlCLEVBQUUsRUFBRTtJQUMxQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0UsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sVUFBVTs7Ozs7SUFrRHJCLFlBQVksTUFBcUIsRUFBVSxjQUF3QjtRQUF4QixtQkFBYyxHQUFkLGNBQWMsQ0FBVTs7OztRQXpDMUQsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7Ozs7UUFHbEMsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7Ozs7UUFHbkMsVUFBSyxHQUFHLElBQUksT0FBTyxFQUFnQixDQUFDO1FBb0MzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBZSxDQUFlLFlBQVksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFl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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QsIE9ic2VydmFibGUsIG9mLCBFTVBUWX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlbGF5LCBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0U3RhdGUgfSBmcm9tICcuLi91dGlscy9nYWxsZXJ5LmRlZmF1bHQnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5RXJyb3IsIEdhbGxlcnlJdGVtLCBHYWxsZXJ5U3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvZ2FsbGVyeS5tb2RlbCc7XHJcbmltcG9ydCB7IEdhbGxlcnlDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgR2FsbGVyeUFjdGlvbiB9IGZyb20gJy4uL21vZGVscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBJZnJhbWVJdGVtLCBJbWFnZUl0ZW0sIFZpZGVvSXRlbSwgWW91dHViZUl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL3RlbXBsYXRlcy9pdGVtcy5tb2RlbCc7XHJcblxyXG5jb25zdCBmaWx0ZXJBY3Rpb25zID0gKGFjdGlvbnM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgcmV0dXJuIGZpbHRlcigoc3RhdGU6IEdhbGxlcnlTdGF0ZSkgPT4gYWN0aW9ucy5pbmRleE9mKHN0YXRlLmFjdGlvbikgPiAtMSk7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeVJlZiB7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBnYWxsZXJ5IHN0YXRlICovXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhdGU6IEJlaGF2aW9yU3ViamVjdDxHYWxsZXJ5U3RhdGU+O1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgZ2FsbGVyeSBjb25maWcgKi9cclxuICBwcml2YXRlIHJlYWRvbmx5IF9jb25maWc6IEJlaGF2aW9yU3ViamVjdDxHYWxsZXJ5Q29uZmlnPjtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIG9uIGl0ZW0gY2xpY2sgKi9cclxuICByZWFkb25seSBpdGVtQ2xpY2sgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBvbiB0aHVtYm5haWwgY2xpY2sgKi9cclxuICByZWFkb25seSB0aHVtYkNsaWNrID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgb24gYW4gZXJyb3Igb2NjdXJzICovXHJcbiAgcmVhZG9ubHkgZXJyb3IgPSBuZXcgU3ViamVjdDxHYWxsZXJ5RXJyb3I+KCk7XHJcblxyXG4gIC8qKiBHYWxsZXJ5IEV2ZW50cyAqL1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgZ2FsbGVyeSBzdGF0ZSAqL1xyXG4gIHJlYWRvbmx5IHN0YXRlOiBPYnNlcnZhYmxlPEdhbGxlcnlTdGF0ZT47XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBnYWxsZXJ5IGNvbmZpZyAqL1xyXG4gIHJlYWRvbmx5IGNvbmZpZzogT2JzZXJ2YWJsZTxHYWxsZXJ5Q29uZmlnPjtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gZ2FsbGVyeSBpcyBpbml0aWFsaXplZC9yZXNldCAqL1xyXG4gIGdldCBpbml0aWFsaXplZCgpOiBPYnNlcnZhYmxlPEdhbGxlcnlTdGF0ZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucGlwZShmaWx0ZXJBY3Rpb25zKFtHYWxsZXJ5QWN0aW9uLklOSVRJQUxJWkVEXSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gaXRlbXMgaXMgY2hhbmdlZCAoaXRlbXMgbG9hZGVkLCBpdGVtIGFkZGVkLCBpdGVtIHJlbW92ZWQpICovXHJcbiAgZ2V0IGl0ZW1zQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPEdhbGxlcnlTdGF0ZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucGlwZShmaWx0ZXJBY3Rpb25zKFtHYWxsZXJ5QWN0aW9uLklURU1TX0NIQU5HRURdKSk7XHJcbiAgfVxyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBjdXJyZW50IGl0ZW0gaXMgY2hhbmdlZCAqL1xyXG4gIGdldCBpbmRleENoYW5nZWQoKTogT2JzZXJ2YWJsZTxHYWxsZXJ5U3RhdGU+IHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLnBpcGUoZmlsdGVyQWN0aW9ucyhbR2FsbGVyeUFjdGlvbi5JTkRFWF9DSEFOR0VEXSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gdGhlIHBsYXllciBzaG91bGQgc3RhcnQgb3Igc3RvcCAqL1xyXG4gIGdldCBwbGF5aW5nQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPEdhbGxlcnlTdGF0ZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucGlwZShmaWx0ZXJBY3Rpb25zKFtHYWxsZXJ5QWN0aW9uLlBMQVksIEdhbGxlcnlBY3Rpb24uU1RPUF0pKTtcclxuICB9XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHRoZSBwbGF5ZXIgc2hvdWxkIHN0YXJ0IG9yIHN0b3AgKi9cclxuICBwcml2YXRlIGdldCBwbGF5ZXJBY3Rpb25zKCk6IE9ic2VydmFibGU8R2FsbGVyeVN0YXRlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5waXBlKGZpbHRlckFjdGlvbnMoW0dhbGxlcnlBY3Rpb24uUExBWSwgR2FsbGVyeUFjdGlvbi5TVE9QLCBHYWxsZXJ5QWN0aW9uLklOREVYX0NIQU5HRURdKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IEdhbGxlcnlDb25maWcsIHByaXZhdGUgZGVsZXRlSW5zdGFuY2U6IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R2FsbGVyeVN0YXRlPihkZWZhdWx0U3RhdGUpO1xyXG4gICAgdGhpcy5fY29uZmlnID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHYWxsZXJ5Q29uZmlnPihjb25maWcpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuX3N0YXRlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLl9jb25maWcuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3RpdmF0ZSBwbGF5ZXIgYWN0aW9ucyBsaXN0ZW5lclxyXG4gICAqL1xyXG4gIGFjdGl2YXRlUGxheWVyKCk6IE9ic2VydmFibGU8R2FsbGVyeVN0YXRlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJBY3Rpb25zLnBpcGUoXHJcbiAgICAgIHN3aXRjaE1hcCgoZTogR2FsbGVyeVN0YXRlKSA9PlxyXG4gICAgICAgIGUuaXNQbGF5aW5nID8gb2Yoe30pLnBpcGUoXHJcbiAgICAgICAgICBkZWxheSh0aGlzLl9jb25maWcudmFsdWUucGxheWVySW50ZXJ2YWwpLFxyXG4gICAgICAgICAgdGFwKCgpID0+IHRoaXMubmV4dCgpKVxyXG4gICAgICAgICkgOiBFTVBUWVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGdhbGxlcnkgc3RhdGVcclxuICAgKiBAcGFyYW0gc3RhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBHYWxsZXJ5U3RhdGUpIHtcclxuICAgIHRoaXMuX3N0YXRlLm5leHQoey4uLnRoaXMuX3N0YXRlLnZhbHVlLCAuLi5zdGF0ZX0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGdhbGxlcnkgY29uZmlnXHJcbiAgICogQHBhcmFtIGNvbmZpZ1xyXG4gICAqL1xyXG4gIHNldENvbmZpZyhjb25maWc6IEdhbGxlcnlDb25maWcpIHtcclxuICAgIHRoaXMuX2NvbmZpZy5uZXh0KHsuLi50aGlzLl9jb25maWcudmFsdWUsIC4uLmNvbmZpZ30pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFkZCBnYWxsZXJ5IGl0ZW1cclxuICAgKiBAcGFyYW0gaXRlbSAtIEdhbGxlcnkgaXRlbSBvYmplY3RcclxuICAgKiBAcGFyYW0gYWN0aXZlIC0gU2V0IHRoZSBuZXcgaXRlbSBhcyBjdXJyZW50IHNsaWRlXHJcbiAgICovXHJcbiAgYWRkKGl0ZW06IEdhbGxlcnlJdGVtLCBhY3RpdmU/OiBib29sZWFuKSB7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBbLi4udGhpcy5fc3RhdGUudmFsdWUuaXRlbXMsIGl0ZW1dO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGFjdGlvbjogR2FsbGVyeUFjdGlvbi5JVEVNU19DSEFOR0VELFxyXG4gICAgICBpdGVtczogaXRlbXMsXHJcbiAgICAgIGhhc05leHQ6IGl0ZW1zLmxlbmd0aCA+IDEsXHJcbiAgICAgIGN1cnJJbmRleDogYWN0aXZlID8gaXRlbXMubGVuZ3RoIC0gMSA6IHRoaXMuX3N0YXRlLnZhbHVlLmN1cnJJbmRleFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgaW1hZ2UgaXRlbVxyXG4gICAqIEBwYXJhbSBkYXRhXHJcbiAgICogQHBhcmFtIGFjdGl2ZVxyXG4gICAqL1xyXG4gIGFkZEltYWdlKGRhdGE6IGFueSwgYWN0aXZlPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5hZGQobmV3IEltYWdlSXRlbShkYXRhKSwgYWN0aXZlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCB2aWRlbyBpdGVtXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKiBAcGFyYW0gYWN0aXZlXHJcbiAgICovXHJcbiAgYWRkVmlkZW8oZGF0YTogYW55LCBhY3RpdmU/OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmFkZChuZXcgVmlkZW9JdGVtKGRhdGEpLCBhY3RpdmUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGlmcmFtZSBpdGVtXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKiBAcGFyYW0gYWN0aXZlXHJcbiAgICovXHJcbiAgYWRkSWZyYW1lKGRhdGE6IGFueSwgYWN0aXZlPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5hZGQobmV3IElmcmFtZUl0ZW0oZGF0YSksIGFjdGl2ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgeW91dHViZSBpdGVtXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKiBAcGFyYW0gYWN0aXZlXHJcbiAgICovXHJcbiAgYWRkWW91dHViZShkYXRhOiBhbnksIGFjdGl2ZT86IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuYWRkKG5ldyBZb3V0dWJlSXRlbShkYXRhKSwgYWN0aXZlKTtcclxuICB9XHJcblxyXG4gIC8qKiBSZW1vdmUgZ2FsbGVyeSBpdGVtXHJcbiAgICogQHBhcmFtIGkgLSBJdGVtIGluZGV4XHJcbiAgICovXHJcbiAgcmVtb3ZlKGk6IG51bWJlcikge1xyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgIC4uLnRoaXMuX3N0YXRlLnZhbHVlLml0ZW1zLnNsaWNlKDAsIGkpLFxyXG4gICAgICAuLi50aGlzLl9zdGF0ZS52YWx1ZS5pdGVtcy5zbGljZShpICsgMSwgdGhpcy5fc3RhdGUudmFsdWUuaXRlbXMubGVuZ3RoKVxyXG4gICAgXTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBhY3Rpb246IEdhbGxlcnlBY3Rpb24uSVRFTVNfQ0hBTkdFRCxcclxuICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgICBoYXNOZXh0OiBpdGVtcy5sZW5ndGggPiAxLFxyXG4gICAgICBoYXNQcmV2OiBpID4gMFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkIGl0ZW1zIGFuZCByZXNldCB0aGUgc3RhdGVcclxuICAgKiBAcGFyYW0gaXRlbXMgLSBHYWxsZXJ5IGltYWdlcyBkYXRhXHJcbiAgICovXHJcbiAgbG9hZChpdGVtczogR2FsbGVyeUl0ZW1bXSkge1xyXG4gICAgaWYgKGl0ZW1zKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGFjdGlvbjogR2FsbGVyeUFjdGlvbi5JVEVNU19DSEFOR0VELFxyXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgICBoYXNOZXh0OiBpdGVtcy5sZW5ndGggPiAxLFxyXG4gICAgICAgIGhhc1ByZXY6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGFjdGl2ZSBpdGVtXHJcbiAgICogQHBhcmFtIGkgLSBBY3RpdmUgSW5kZXhcclxuICAgKi9cclxuICBzZXQoaTogbnVtYmVyKSB7XHJcbiAgICBpZiAoaSAhPT0gdGhpcy5fc3RhdGUudmFsdWUuY3VyckluZGV4KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGFjdGlvbjogR2FsbGVyeUFjdGlvbi5JTkRFWF9DSEFOR0VELFxyXG4gICAgICAgIGN1cnJJbmRleDogaSxcclxuICAgICAgICBoYXNOZXh0OiBpIDwgdGhpcy5fc3RhdGUudmFsdWUuaXRlbXMubGVuZ3RoIC0gMSxcclxuICAgICAgICBoYXNQcmV2OiBpID4gMFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE5leHQgaXRlbVxyXG4gICAqL1xyXG4gIG5leHQoKSB7XHJcbiAgICBpZiAodGhpcy5fc3RhdGUudmFsdWUuaGFzTmV4dCkge1xyXG4gICAgICB0aGlzLnNldCh0aGlzLl9zdGF0ZS52YWx1ZS5jdXJySW5kZXggKyAxKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnLnZhbHVlLmxvb3ApIHtcclxuICAgICAgdGhpcy5zZXQoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmV2IGl0ZW1cclxuICAgKi9cclxuICBwcmV2KCkge1xyXG4gICAgaWYgKHRoaXMuX3N0YXRlLnZhbHVlLmhhc1ByZXYpIHtcclxuICAgICAgdGhpcy5zZXQodGhpcy5fc3RhdGUudmFsdWUuY3VyckluZGV4IC0gMSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy52YWx1ZS5sb29wKSB7XHJcbiAgICAgIHRoaXMuc2V0KHRoaXMuX3N0YXRlLnZhbHVlLml0ZW1zLmxlbmd0aCAtIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgZ2FsbGVyeSBwbGF5ZXJcclxuICAgKiBAcGFyYW0gaW50ZXJ2YWxcclxuICAgKi9cclxuICBwbGF5KGludGVydmFsPzogbnVtYmVyKSB7XHJcbiAgICBpZiAoaW50ZXJ2YWwpIHtcclxuICAgICAgdGhpcy5zZXRDb25maWcoe3BsYXllckludGVydmFsOiBpbnRlcnZhbH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aW9uOiBHYWxsZXJ5QWN0aW9uLlBMQVksIGlzUGxheWluZzogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCBnYWxsZXJ5IHBsYXllclxyXG4gICAqL1xyXG4gIHN0b3AoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHthY3Rpb246IEdhbGxlcnlBY3Rpb24uU1RPUCwgaXNQbGF5aW5nOiBmYWxzZX0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgZ2FsbGVyeSB0byBpbml0aWFsIHN0YXRlXHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKGRlZmF1bHRTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0cm95IGdhbGxlcnlcclxuICAgKi9cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5fc3RhdGUuY29tcGxldGUoKTtcclxuICAgIHRoaXMuX2NvbmZpZy5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5pdGVtQ2xpY2suY29tcGxldGUoKTtcclxuICAgIHRoaXMudGh1bWJDbGljay5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5kZWxldGVJbnN0YW5jZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19