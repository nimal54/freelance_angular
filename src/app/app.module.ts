import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';

import {MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { UtilityCardComponent } from './components/Cards/utility-card/utility-card.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    DemoPageComponent,
    UtilityCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports:[
    MatSelectModule
  ],
  providers: [
    {provide:MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearence: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
