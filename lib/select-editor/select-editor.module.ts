import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectEditorComponent } from './select-editor.component';
import { DisplayNameFilter } from "../pipes/displayvalue.pipe";
// import { OutSideClickDirective } from "../directives/outsideclick.directive";
import { DisplayFieldNameFilter } from "../pipes/displayvalue.pipe";

@NgModule({
  imports: [
    CommonModule, 
    FormsModule
    
  ],
  declarations: [
    SelectEditorComponent,
    DisplayNameFilter,
    DisplayFieldNameFilter
  ],
  exports: [SelectEditorComponent]
})
export class SelectEditorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SelectEditorModule,
    }
  }
}