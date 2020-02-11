/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GalleryItemType } from '../../models/constants';
var ImageItem = /** @class */ (function () {
    function ImageItem(data) {
        this.data = data;
        this.type = GalleryItemType.Image;
    }
    return ImageItem;
}());
export { ImageItem };
if (false) {
    /** @type {?} */
    ImageItem.prototype.type;
    /** @type {?} */
    ImageItem.prototype.data;
}
var VideoItem = /** @class */ (function () {
    function VideoItem(data) {
        this.data = data;
        this.type = GalleryItemType.Video;
    }
    return VideoItem;
}());
export { VideoItem };
if (false) {
    /** @type {?} */
    VideoItem.prototype.type;
    /** @type {?} */
    VideoItem.prototype.data;
}
var IframeItem = /** @class */ (function () {
    function IframeItem(data) {
        this.data = data;
        this.type = GalleryItemType.Iframe;
    }
    return IframeItem;
}());
export { IframeItem };
if (false) {
    /** @type {?} */
    IframeItem.prototype.type;
    /** @type {?} */
    IframeItem.prototype.data;
}
var YoutubeItem = /** @class */ (function () {
    function YoutubeItem(data) {
        this.data = {
            src: "//youtube.com/embed/" + data.src + "?wmode=transparent",
            thumb: data.thumb ? data.thumb : "//img.youtube.com/vi/" + data.src + "/default.jpg"
        };
        this.type = GalleryItemType.Youtube;
    }
    return YoutubeItem;
}());
export { YoutubeItem };
if (false) {
    /** @type {?} */
    YoutubeItem.prototype.type;
    /** @type {?} */
    YoutubeItem.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlcy9pdGVtcy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpEO0lBSUUsbUJBQVksSUFBUztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7SUFQQyx5QkFBc0I7O0lBQ3RCLHlCQUFtQjs7QUFRckI7SUFJRSxtQkFBWSxJQUFTO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7OztJQVBDLHlCQUFzQjs7SUFDdEIseUJBQW1COztBQVFyQjtJQUlFLG9CQUFZLElBQVM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7O0lBUEMsMEJBQXNCOztJQUN0QiwwQkFBbUI7O0FBUXJCO0lBSUUscUJBQVksSUFBUztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsR0FBRyxFQUFFLHlCQUF1QixJQUFJLENBQUMsR0FBRyx1QkFBb0I7WUFDeEQsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDBCQUF3QixJQUFJLENBQUMsR0FBRyxpQkFBYztTQUNoRixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO0lBQ3RDLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFYRCxJQVdDOzs7O0lBVkMsMkJBQXNCOztJQUN0QiwyQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYWxsZXJ5SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9nYWxsZXJ5Lm1vZGVsJztcclxuaW1wb3J0IHsgR2FsbGVyeUl0ZW1UeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VJdGVtIGltcGxlbWVudHMgR2FsbGVyeUl0ZW0ge1xyXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcclxuICByZWFkb25seSBkYXRhOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMudHlwZSA9IEdhbGxlcnlJdGVtVHlwZS5JbWFnZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWaWRlb0l0ZW0gaW1wbGVtZW50cyBHYWxsZXJ5SXRlbSB7XHJcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IGRhdGE6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy50eXBlID0gR2FsbGVyeUl0ZW1UeXBlLlZpZGVvO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElmcmFtZUl0ZW0gaW1wbGVtZW50cyBHYWxsZXJ5SXRlbSB7XHJcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IGRhdGE6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy50eXBlID0gR2FsbGVyeUl0ZW1UeXBlLklmcmFtZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBZb3V0dWJlSXRlbSBpbXBsZW1lbnRzIEdhbGxlcnlJdGVtIHtcclxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgZGF0YTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgc3JjOiBgLy95b3V0dWJlLmNvbS9lbWJlZC8ke2RhdGEuc3JjfT93bW9kZT10cmFuc3BhcmVudGAsXHJcbiAgICAgIHRodW1iOiBkYXRhLnRodW1iID8gZGF0YS50aHVtYiA6IGAvL2ltZy55b3V0dWJlLmNvbS92aS8ke2RhdGEuc3JjfS9kZWZhdWx0LmpwZ2BcclxuICAgIH07XHJcbiAgICB0aGlzLnR5cGUgPSBHYWxsZXJ5SXRlbVR5cGUuWW91dHViZTtcclxuICB9XHJcbn1cclxuIl19