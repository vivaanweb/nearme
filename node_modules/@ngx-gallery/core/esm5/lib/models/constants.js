/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var GalleryAction = {
    INITIALIZED: 'initialized',
    ITEMS_CHANGED: 'itemsChanged',
    INDEX_CHANGED: 'indexChanged',
    PLAY: 'play',
    STOP: 'stop',
};
export { GalleryAction };
/** @enum {string} */
var ImageSize = {
    Cover: 'cover',
    Contain: 'contain',
};
export { ImageSize };
/** @enum {string} */
var LoadingStrategy = {
    Preload: 'preload',
    Lazy: 'lazy',
    Default: 'default',
};
export { LoadingStrategy };
/** @enum {string} */
var ThumbnailsPosition = {
    Top: 'top',
    Left: 'left',
    Right: 'right',
    Bottom: 'bottom',
};
export { ThumbnailsPosition };
/** @enum {string} */
var ImageLoaderMode = {
    Determinate: 'determinate',
    Indeterminate: 'indeterminate',
};
export { ImageLoaderMode };
/** @enum {string} */
var DotsPosition = {
    Top: 'top',
    Bottom: 'bottom',
};
export { DotsPosition };
/** @enum {string} */
var CounterPosition = {
    Top: 'top',
    Bottom: 'bottom',
};
export { CounterPosition };
/** @enum {string} */
var ThumbnailsMode = {
    Free: 'free',
    Strict: 'strict',
};
export { ThumbnailsMode };
/** @enum {string} */
var SlidingDirection = {
    Horizontal: 'horizontal',
    Vertical: 'vertical',
};
export { SlidingDirection };
/** @enum {string} */
var GalleryItemType = {
    Image: 'image',
    Video: 'video',
    Youtube: 'youtube',
    Iframe: 'iframe',
};
export { GalleryItemType };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFDRSxhQUFjLGFBQWE7SUFDM0IsZUFBZ0IsY0FBYztJQUM5QixlQUFnQixjQUFjO0lBQzlCLE1BQU8sTUFBTTtJQUNiLE1BQU8sTUFBTTs7Ozs7SUFJYixPQUFRLE9BQU87SUFDZixTQUFVLFNBQVM7Ozs7O0lBSW5CLFNBQVUsU0FBUztJQUNuQixNQUFPLE1BQU07SUFDYixTQUFVLFNBQVM7Ozs7O0lBSW5CLEtBQU0sS0FBSztJQUNYLE1BQU8sTUFBTTtJQUNiLE9BQVEsT0FBTztJQUNmLFFBQVMsUUFBUTs7Ozs7SUFJakIsYUFBYSxhQUFhO0lBQzFCLGVBQWUsZUFBZTs7Ozs7SUFJOUIsS0FBTSxLQUFLO0lBQ1gsUUFBUyxRQUFROzs7OztJQUlqQixLQUFNLEtBQUs7SUFDWCxRQUFTLFFBQVE7Ozs7O0lBSWpCLE1BQU8sTUFBTTtJQUNiLFFBQVMsUUFBUTs7Ozs7SUFJakIsWUFBYSxZQUFZO0lBQ3pCLFVBQVcsVUFBVTs7Ozs7SUFJckIsT0FBUSxPQUFPO0lBQ2YsT0FBUSxPQUFPO0lBQ2YsU0FBVSxTQUFTO0lBQ25CLFFBQVMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEdhbGxlcnlBY3Rpb24ge1xyXG4gIElOSVRJQUxJWkVEID0gJ2luaXRpYWxpemVkJyxcclxuICBJVEVNU19DSEFOR0VEID0gJ2l0ZW1zQ2hhbmdlZCcsXHJcbiAgSU5ERVhfQ0hBTkdFRCA9ICdpbmRleENoYW5nZWQnLFxyXG4gIFBMQVkgPSAncGxheScsXHJcbiAgU1RPUCA9ICdzdG9wJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbWFnZVNpemUge1xyXG4gIENvdmVyID0gJ2NvdmVyJyxcclxuICBDb250YWluID0gJ2NvbnRhaW4nXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIExvYWRpbmdTdHJhdGVneSB7XHJcbiAgUHJlbG9hZCA9ICdwcmVsb2FkJyxcclxuICBMYXp5ID0gJ2xhenknLFxyXG4gIERlZmF1bHQgPSAnZGVmYXVsdCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGh1bWJuYWlsc1Bvc2l0aW9uIHtcclxuICBUb3AgPSAndG9wJyxcclxuICBMZWZ0ID0gJ2xlZnQnLFxyXG4gIFJpZ2h0ID0gJ3JpZ2h0JyxcclxuICBCb3R0b20gPSAnYm90dG9tJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbWFnZUxvYWRlck1vZGUge1xyXG4gIERldGVybWluYXRlPSAnZGV0ZXJtaW5hdGUnLFxyXG4gIEluZGV0ZXJtaW5hdGU9ICdpbmRldGVybWluYXRlJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEb3RzUG9zaXRpb24ge1xyXG4gIFRvcCA9ICd0b3AnLFxyXG4gIEJvdHRvbSA9ICdib3R0b20nXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENvdW50ZXJQb3NpdGlvbiB7XHJcbiAgVG9wID0gJ3RvcCcsXHJcbiAgQm90dG9tID0gJ2JvdHRvbSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGh1bWJuYWlsc01vZGUge1xyXG4gIEZyZWUgPSAnZnJlZScsXHJcbiAgU3RyaWN0ID0gJ3N0cmljdCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2xpZGluZ0RpcmVjdGlvbiB7XHJcbiAgSG9yaXpvbnRhbCA9ICdob3Jpem9udGFsJyxcclxuICBWZXJ0aWNhbCA9ICd2ZXJ0aWNhbCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gR2FsbGVyeUl0ZW1UeXBlIHtcclxuICBJbWFnZSA9ICdpbWFnZScsXHJcbiAgVmlkZW8gPSAndmlkZW8nLFxyXG4gIFlvdXR1YmUgPSAneW91dHViZScsXHJcbiAgSWZyYW1lID0gJ2lmcmFtZSdcclxufVxyXG4iXX0=