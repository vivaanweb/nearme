export declare class RadialProgressComponent {
    mode: 'determinate' | 'indeterminate';
    value: number;
    diameter: number;
    strokeWidth: number;
    /** The radius of the spinner, adjusted for stroke width. */
    readonly circleRadius: number;
    /** The view box of the spinner's svg element. */
    readonly viewBox: string;
    /** The stroke circumference of the svg circle. */
    readonly strokeCircumference: number;
    /** The dash offset of the svg circle. */
    readonly strokeDashOffset: number;
    /** Stroke width of the circle in percent. */
    readonly circleStrokeWidth: number;
}
