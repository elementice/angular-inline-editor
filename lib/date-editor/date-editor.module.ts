import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateEditorComponent } from './date-editor.component';
import { BsDatepickerModule } from "ngx-bootstrap";

export const BsDatepickerModuleforRoot = BsDatepickerModule.forRoot()

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BsDatepickerModuleforRoot
    ],
    declarations: [
        DateEditorComponent
    ],
    exports: [DateEditorComponent]
})
export class DateEditorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DateEditorModule,
        }
    }
}