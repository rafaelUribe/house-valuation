import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ProgressSpinnerModule} from 'primeng/progressspinner'
import {SliderModule} from 'primeng/slider';
import {InputTextModule} from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    TableModule,
    SidebarModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    MessageModule,
    MessagesModule,
    ProgressSpinnerModule,
    SliderModule,
    InputTextModule,
    InputNumberModule,
    InputMaskModule,
    MultiSelectModule,
    InputSwitchModule,
    AutoCompleteModule,
    DialogModule,
    ToastModule,
    CalendarModule,
    InputTextareaModule,
    ConfirmPopupModule,
    CheckboxModule
  ]
})
export class PrimengModule { }
