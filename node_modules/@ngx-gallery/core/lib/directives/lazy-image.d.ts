import { OnDestroy, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class LazyImage implements OnChanges, OnDestroy {
    private http;
    private document;
    private _imageLoader$;
    private _loaderSub$;
    src: string;
    mode: 'determinate' | 'indeterminate';
    progress: EventEmitter<{
        loaded: number;
        total: number;
    }>;
    loaded: EventEmitter<string>;
    error: EventEmitter<Error>;
    constructor(http: HttpClient, document: any);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    loadImage(imagePath: string): void;
    /**
     * Load image using HttpClient, This requires XHR access to the URL
     * @param url
     */
    progressiveLoader(url: string): Observable<any>;
    /**
     * Native image loader, does not emit progress
     * @param url
     */
    nativeLoader(url: string): Observable<any>;
}
