import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { TwoFormGroupComponent } from './two-form-group/two-form-group.component';
import { InlineEditMethod2Component } from './inline-edit-method2/inline-edit-method2.component';

@NgModule({
  declarations: [AppComponent, InlineEditComponent, TwoFormGroupComponent, InlineEditMethod2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
