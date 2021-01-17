import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/headers/mainHeader/header.component';

import {MatSelectModule} from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { UtilityCardComponent } from './components/Cards/utility-card/utility-card.component';
import { HomeComponent } from './home/home.component';
import { SectionTwoComponent } from './components/sections/section-two/section-two.component';
import { SectionThreeComponent } from './components/sections/section-three/section-three.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {ToolbarModule} from 'primeng/toolbar';
import {TabViewModule} from 'primeng/tabview';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { BillPaymentHeaderComponent } from './components/headers/bill-payment-header/bill-payment-header.component';
import { CardsHeaderComponent } from './components/Cards/cards-header/cards-header.component';
import { ElectricitybillCardComponent } from './components/Cards/electricitybill-card/electricitybill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UtilityCardComponent,
    HomeComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    BillPaymentHeaderComponent,
    CardsHeaderComponent,
    ElectricitybillCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    DropdownModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    TabViewModule,
    HttpClientModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports:[
    MatSelectModule,
    MatButtonModule
  ],
  providers: [
    {provide:MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearence: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
