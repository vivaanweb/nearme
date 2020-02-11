/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const defaultConfig = {
    backdropClass: 'g-backdrop',
    panelClass: 'g-overlay',
    hasBackdrop: true,
    keyboardShortcuts: true,
    role: 'lightbox',
    closeIcon: `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512px" height="512px" enable-background="new 0 0 47.971 47.971" version="1.1" viewBox="0 0 47.971 47.971" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
	<path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill="#fff"/>
</svg>
`
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9saWdodGJveC8iLCJzb3VyY2VzIjpbImxpYi9saWdodGJveC5kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLGFBQWEsR0FBbUI7SUFDM0MsYUFBYSxFQUFFLFlBQVk7SUFDM0IsVUFBVSxFQUFFLFdBQVc7SUFDdkIsV0FBVyxFQUFFLElBQUk7SUFDakIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixJQUFJLEVBQUUsVUFBVTtJQUNoQixTQUFTLEVBQUU7Ozs7Q0FJWjtDQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlnaHRib3hDb25maWcgfSBmcm9tICcuL2xpZ2h0Ym94Lm1vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29uZmlnOiBMaWdodGJveENvbmZpZyA9IHtcclxuICBiYWNrZHJvcENsYXNzOiAnZy1iYWNrZHJvcCcsXHJcbiAgcGFuZWxDbGFzczogJ2ctb3ZlcmxheScsXHJcbiAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAga2V5Ym9hcmRTaG9ydGN1dHM6IHRydWUsXHJcbiAgcm9sZTogJ2xpZ2h0Ym94JyxcclxuICBjbG9zZUljb246IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cclxuPHN2ZyB3aWR0aD1cIjUxMnB4XCIgaGVpZ2h0PVwiNTEycHhcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNDcuOTcxIDQ3Ljk3MVwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDQ3Ljk3MSA0Ny45NzFcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHQ8cGF0aCBkPVwiTTI4LjIyOCwyMy45ODZMNDcuMDkyLDUuMTIyYzEuMTcyLTEuMTcxLDEuMTcyLTMuMDcxLDAtNC4yNDJjLTEuMTcyLTEuMTcyLTMuMDctMS4xNzItNC4yNDIsMEwyMy45ODYsMTkuNzQ0TDUuMTIxLDAuODggICBjLTEuMTcyLTEuMTcyLTMuMDctMS4xNzItNC4yNDIsMGMtMS4xNzIsMS4xNzEtMS4xNzIsMy4wNzEsMCw0LjI0MmwxOC44NjUsMTguODY0TDAuODc5LDQyLjg1Yy0xLjE3MiwxLjE3MS0xLjE3MiwzLjA3MSwwLDQuMjQyICAgQzEuNDY1LDQ3LjY3NywyLjIzMyw0Ny45NywzLDQ3Ljk3czEuNTM1LTAuMjkzLDIuMTIxLTAuODc5bDE4Ljg2NS0xOC44NjRMNDIuODUsNDcuMDkxYzAuNTg2LDAuNTg2LDEuMzU0LDAuODc5LDIuMTIxLDAuODc5ICAgczEuNTM1LTAuMjkzLDIuMTIxLTAuODc5YzEuMTcyLTEuMTcxLDEuMTcyLTMuMDcxLDAtNC4yNDJMMjguMjI4LDIzLjk4NnpcIiBmaWxsPVwiI2ZmZlwiLz5cclxuPC9zdmc+XHJcbmBcclxufTtcclxuIl19