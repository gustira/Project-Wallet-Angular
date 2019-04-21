import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RecordComponent } from './record/record.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCustomerComponent } from './customer/create/create-customer.component';
import { CreateAccountComponent } from './account/create/create-account.component';
import { ListAccountComponent } from './account/list/list-account.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    RecordComponent,
    CreateCustomerComponent,
    CreateAccountComponent,
    ListAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
