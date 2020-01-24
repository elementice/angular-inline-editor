import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateTimeEditorComponent } from './datetimepicker-editor.component';
import { BsDatepickerModule, TimepickerModule } from "ngx-bootstrap";

export const BsDatepickerModuleforRoot = BsDatepickerModule.forRoot()
export const TimepickerModuleforRoot = TimepickerModule.forRoot()

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BsDatepickerModuleforRoot,
        TimepickerModuleforRoot
    ],
    declarations: [
        DateTimeEditorComponent
    ],
    exports: [DateTimeEditorComponent]
})
export class DateTimeEditorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DateTimeEditorModule,
        }
    }
}