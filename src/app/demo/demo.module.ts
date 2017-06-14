import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SMNUIModule} from '../smn-ui/smn-ui.module';

import {DemoComponent} from './demo.component';
import {DemoInputComponent} from './demo-input/demo-input.component';
import {DemoButtonComponent} from './demo-button/demo-button.component';
import {DemoCardComponent} from './demo-card/demo-card.component';
import {DemoDatepickerComponent} from './demo-datepicker/demo-datepicker.component';
import {DemoSelectionControlComponent} from './demo-selection-control/demo-selection-control.component';
import {DemoToolbarComponent} from './demo-toolbar/demo-toolbar.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        SMNUIModule
    ],
    declarations: [
        DemoComponent,
        DemoInputComponent,
        DemoButtonComponent,
        DemoCardComponent,
        DemoSelectionControlComponent,
        DemoToolbarComponent,
        DemoDatepickerComponent
    ],
    exports: [DemoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoModule {
}