/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
var GalleryDotsComponent = /** @class */ (function () {
    function GalleryDotsComponent() {
        this.action = new EventEmitter();
    }
    GalleryDotsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-dots',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <div class=\"g-dot\"\n         *ngFor=\"let item of state.items; let i = index\"\n         [class.g-dot-active]=\"i === state.currIndex\"\n         [style.width.px]=\"config?.dotsSize\"\n         [style.height.px]=\"config?.dotsSize\"\n         (tapClick)=\"action.emit(i)\">\n      <div class=\"g-dot-inner\"></div>\n    </div>\n  "
                }] }
    ];
    GalleryDotsComponent.propDecorators = {
        state: [{ type: Input }],
        config: [{ type: Input }],
        action: [{ type: Output }]
    };
    return GalleryDotsComponent;
}());
export { GalleryDotsComponent };
if (false) {
    /** @type {?} */
    GalleryDotsComponent.prototype.state;
    /** @type {?} */
    GalleryDotsComponent.prototype.config;
    /** @type {?} */
    GalleryDotsComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1kb3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ2FsbGVyeS1kb3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUloRztJQUFBO1FBaUJZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBQ2hELENBQUM7O2dCQWxCQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsb1ZBU1Q7aUJBQ0Y7Ozt3QkFFRSxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsTUFBTTs7SUFDVCwyQkFBQztDQUFBLEFBbEJELElBa0JDO1NBSlksb0JBQW9COzs7SUFDL0IscUNBQTZCOztJQUM3QixzQ0FBK0I7O0lBQy9CLHNDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5U3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvZ2FsbGVyeS5tb2RlbCc7XHJcbmltcG9ydCB7IEdhbGxlcnlDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1kb3RzJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImctZG90XCJcclxuICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3RhdGUuaXRlbXM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICBbY2xhc3MuZy1kb3QtYWN0aXZlXT1cImkgPT09IHN0YXRlLmN1cnJJbmRleFwiXHJcbiAgICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJjb25maWc/LmRvdHNTaXplXCJcclxuICAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJjb25maWc/LmRvdHNTaXplXCJcclxuICAgICAgICAgKHRhcENsaWNrKT1cImFjdGlvbi5lbWl0KGkpXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJnLWRvdC1pbm5lclwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeURvdHNDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHN0YXRlOiBHYWxsZXJ5U3RhdGU7XHJcbiAgQElucHV0KCkgY29uZmlnOiBHYWxsZXJ5Q29uZmlnO1xyXG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxufVxyXG4iXX0=