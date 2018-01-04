import { ElementRef, Renderer, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class SelectEditorComponent implements ControlValueAccessor, OnInit {
    private _elementRef;
    private _renderer;
    selectEditorControl: ElementRef;
    label: string;
    required: boolean;
    disabled: boolean;
    id: string;
    options: any[];
    displayValue: string;
    dataValue: string;
    onSave: EventEmitter<string>;
    onCancel: EventEmitter<string>;
    private _value;
    private preValue;
    private editing;
    onChange: any;
    onTouched: any;
    constructor(_elementRef: ElementRef, _renderer: Renderer);
    onSaveComplete(): void;
    onCancelComplete(): void;
    value: any;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    edit(value: any): void;
    isSelected(opt: any): boolean;
    ngOnInit(): void;
}