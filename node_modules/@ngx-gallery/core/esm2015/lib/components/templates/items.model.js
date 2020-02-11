/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GalleryItemType } from '../../models/constants';
export class ImageItem {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
        this.type = GalleryItemType.Image;
    }
}
if (false) {
    /** @type {?} */
    ImageItem.prototype.type;
    /** @type {?} */
    ImageItem.prototype.data;
}
export class VideoItem {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
        this.type = GalleryItemType.Video;
    }
}
if (false) {
    /** @type {?} */
    VideoItem.prototype.type;
    /** @type {?} */
    VideoItem.prototype.data;
}
export class IframeItem {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
        this.type = GalleryItemType.Iframe;
    }
}
if (false) {
    /** @type {?} */
    IframeItem.prototype.type;
    /** @type {?} */
    IframeItem.prototype.data;
}
export class YoutubeItem {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = {
            src: `//youtube.com/embed/${data.src}?wmode=transparent`,
            thumb: data.thumb ? data.thumb : `//img.youtube.com/vi/${data.src}/default.jpg`
        };
        this.type = GalleryItemType.Youtube;
    }
}
if (false) {
    /** @type {?} */
    YoutubeItem.prototype.type;
    /** @type {?} */
    YoutubeItem.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlcy9pdGVtcy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE1BQU0sT0FBTyxTQUFTOzs7O0lBSXBCLFlBQVksSUFBUztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztDQUNGOzs7SUFQQyx5QkFBc0I7O0lBQ3RCLHlCQUFtQjs7QUFRckIsTUFBTSxPQUFPLFNBQVM7Ozs7SUFJcEIsWUFBWSxJQUFTO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7OztJQVBDLHlCQUFzQjs7SUFDdEIseUJBQW1COztBQVFyQixNQUFNLE9BQU8sVUFBVTs7OztJQUlyQixZQUFZLElBQVM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7Q0FDRjs7O0lBUEMsMEJBQXNCOztJQUN0QiwwQkFBbUI7O0FBUXJCLE1BQU0sT0FBTyxXQUFXOzs7O0lBSXRCLFlBQVksSUFBUztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsR0FBRyxFQUFFLHVCQUF1QixJQUFJLENBQUMsR0FBRyxvQkFBb0I7WUFDeEQsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixJQUFJLENBQUMsR0FBRyxjQUFjO1NBQ2hGLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQztDQUNGOzs7SUFWQywyQkFBc0I7O0lBQ3RCLDJCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbGxlcnlJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbGxlcnkubW9kZWwnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5SXRlbVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUl0ZW0gaW1wbGVtZW50cyBHYWxsZXJ5SXRlbSB7XHJcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IGRhdGE6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy50eXBlID0gR2FsbGVyeUl0ZW1UeXBlLkltYWdlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZGVvSXRlbSBpbXBsZW1lbnRzIEdhbGxlcnlJdGVtIHtcclxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgZGF0YTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLnR5cGUgPSBHYWxsZXJ5SXRlbVR5cGUuVmlkZW87XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSWZyYW1lSXRlbSBpbXBsZW1lbnRzIEdhbGxlcnlJdGVtIHtcclxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgZGF0YTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLnR5cGUgPSBHYWxsZXJ5SXRlbVR5cGUuSWZyYW1lO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFlvdXR1YmVJdGVtIGltcGxlbWVudHMgR2FsbGVyeUl0ZW0ge1xyXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcclxuICByZWFkb25seSBkYXRhOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICBzcmM6IGAvL3lvdXR1YmUuY29tL2VtYmVkLyR7ZGF0YS5zcmN9P3dtb2RlPXRyYW5zcGFyZW50YCxcclxuICAgICAgdGh1bWI6IGRhdGEudGh1bWIgPyBkYXRhLnRodW1iIDogYC8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7ZGF0YS5zcmN9L2RlZmF1bHQuanBnYFxyXG4gICAgfTtcclxuICAgIHRoaXMudHlwZSA9IEdhbGxlcnlJdGVtVHlwZS5Zb3V0dWJlO1xyXG4gIH1cclxufVxyXG4iXX0=