import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TimeEditorComponent } from './time-editor.component';
import { TimepickerModule  } from "ngx-bootstrap";

export const TimepickerModuleforRoot = TimepickerModule.forRoot()

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TimepickerModuleforRoot
    ],
    declarations: [
        TimeEditorComponent
    ],
    exports: [TimeEditorComponent]
})
export class TimeEditorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TimeEditorModule,
        }
    }
}