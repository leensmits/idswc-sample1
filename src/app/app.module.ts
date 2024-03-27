import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { FinanceModule } from './finance/finance.module';
import { UserModule } from './user/user.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { IdsFormAccessorsModule } from 'src/directives/ids-form-accessors.module';

@NgModule({
  declarations: [ 
    AppComponent,
    NavComponent,
    WelcomeComponent
  ],
  imports:      [ 
    CommonModule,
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    FinanceModule,
    UserModule
  ],
  providers: [  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
