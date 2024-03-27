import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountsPayableComponent } from './accounts-payable/accounts-payable.component';
import { GeneralLedgerComponent } from './general-ledger/general-ledger.component';
import { IdsFormAccessorsModule } from 'src/directives/ids-form-accessors.module';

@NgModule({
  declarations: [
    AccountsPayableComponent,
    GeneralLedgerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IdsFormAccessorsModule, // This fixes NG01203: No value accessor for form control unspecified name attribute.
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FinanceModule { }
