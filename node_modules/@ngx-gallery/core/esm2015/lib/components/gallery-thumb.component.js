/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, HostBinding, Output, EventEmitter } from '@angular/core';
export class GalleryThumbComponent {
    constructor() {
        this.error = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.index === this.currIndex;
    }
}
GalleryThumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-thumb',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <gallery-image [src]="data.thumb" 
                   mode="indeterminate"
                   [isThumbnail]="true" 
                   [loadingIcon]="config.thumbLoadingIcon"
                   [loadingError]="config.thumbLoadingError "
                   (error)="error.emit($event)"></gallery-image>

    <div *ngIf="config.thumbTemplate" class="g-template g-thumb-template">
      <ng-container
        *ngTemplateOutlet="config.thumbTemplate; context: { index: this.index, type: this.type, data: this.data }">
      </ng-container>
    </div>
  `
            }] }
];
GalleryThumbComponent.propDecorators = {
    config: [{ type: Input }],
    index: [{ type: Input }],
    currIndex: [{ type: Input }],
    type: [{ type: Input }],
    data: [{ type: Input }],
    error: [{ type: Output }],
    isActive: [{ type: HostBinding, args: ['class.g-active-thumb',] }]
};
if (false) {
    /** @type {?} */
    GalleryThumbComponent.prototype.config;
    /**
     * Item's index in the gallery
     * @type {?}
     */
    GalleryThumbComponent.prototype.index;
    /**
     * Gallery current index
     * @type {?}
     */
    GalleryThumbComponent.prototype.currIndex;
    /**
     * Item's type 'image', 'video', 'youtube', 'iframe'
     * @type {?}
     */
    GalleryThumbComponent.prototype.type;
    /**
     * Item's data, this object contains the data required to display the content (e.g. src path)
     * @type {?}
     */
    GalleryThumbComponent.prototype.data;
    /** @type {?} */
    GalleryThumbComponent.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS10aHVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dhbGxlcnktdGh1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXFCN0csTUFBTSxPQUFPLHFCQUFxQjtJQWxCbEM7UUFrQ1ksVUFBSyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFNOUMsQ0FBQzs7OztJQUpDLElBQXlDLFFBQVE7UUFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkMsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUO2FBQ0Y7OztxQkFHRSxLQUFLO29CQUdMLEtBQUs7d0JBR0wsS0FBSzttQkFHTCxLQUFLO21CQUdMLEtBQUs7b0JBRUwsTUFBTTt1QkFFTixXQUFXLFNBQUMsc0JBQXNCOzs7O0lBaEJuQyx1Q0FBK0I7Ozs7O0lBRy9CLHNDQUF1Qjs7Ozs7SUFHdkIsMENBQTJCOzs7OztJQUczQixxQ0FBc0I7Ozs7O0lBR3RCLHFDQUFtQjs7SUFFbkIsc0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Q29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZy5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dhbGxlcnktdGh1bWInLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Z2FsbGVyeS1pbWFnZSBbc3JjXT1cImRhdGEudGh1bWJcIiBcclxuICAgICAgICAgICAgICAgICAgIG1vZGU9XCJpbmRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgICAgICAgIFtpc1RodW1ibmFpbF09XCJ0cnVlXCIgXHJcbiAgICAgICAgICAgICAgICAgICBbbG9hZGluZ0ljb25dPVwiY29uZmlnLnRodW1iTG9hZGluZ0ljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgW2xvYWRpbmdFcnJvcl09XCJjb25maWcudGh1bWJMb2FkaW5nRXJyb3IgXCJcclxuICAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJlcnJvci5lbWl0KCRldmVudClcIj48L2dhbGxlcnktaW1hZ2U+XHJcblxyXG4gICAgPGRpdiAqbmdJZj1cImNvbmZpZy50aHVtYlRlbXBsYXRlXCIgY2xhc3M9XCJnLXRlbXBsYXRlIGctdGh1bWItdGVtcGxhdGVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29uZmlnLnRodW1iVGVtcGxhdGU7IGNvbnRleHQ6IHsgaW5kZXg6IHRoaXMuaW5kZXgsIHR5cGU6IHRoaXMudHlwZSwgZGF0YTogdGhpcy5kYXRhIH1cIj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5VGh1bWJDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBjb25maWc6IEdhbGxlcnlDb25maWc7XHJcblxyXG4gIC8qKiBJdGVtJ3MgaW5kZXggaW4gdGhlIGdhbGxlcnkgKi9cclxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG5cclxuICAvKiogR2FsbGVyeSBjdXJyZW50IGluZGV4ICovXHJcbiAgQElucHV0KCkgY3VyckluZGV4OiBudW1iZXI7XHJcblxyXG4gIC8qKiBJdGVtJ3MgdHlwZSAnaW1hZ2UnLCAndmlkZW8nLCAneW91dHViZScsICdpZnJhbWUnICovXHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG5cclxuICAvKiogSXRlbSdzIGRhdGEsIHRoaXMgb2JqZWN0IGNvbnRhaW5zIHRoZSBkYXRhIHJlcXVpcmVkIHRvIGRpc3BsYXkgdGhlIGNvbnRlbnQgKGUuZy4gc3JjIHBhdGgpICovXHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG5cclxuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmctYWN0aXZlLXRodW1iJykgZ2V0IGlzQWN0aXZlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5kZXggPT09IHRoaXMuY3VyckluZGV4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19