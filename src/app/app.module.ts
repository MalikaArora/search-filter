import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

import { HighlightDirective } from './directives/highlight.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { routing } from './app.routing';
import { ModemDetailsComponent } from './components/modem-details/modem-details.component';
import { ModemPartComponent } from './components/modem-part/modem-part.component';
import { InternetPartsComponent } from './components/internet-parts/internet-parts.component';
import { SubscriptionPartsComponent } from './components/subscription-parts/subscription-parts.component';
import { UniversaldiaPartsComponent } from './components/universaldia-parts/universaldia-parts.component';
import { InstallationManualComponent } from './components/installation-manual/installation-manual.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    FilterPipe,
    ContactComponent,
    HomeComponent,
    BlogComponent,
    ModemDetailsComponent,
    ModemPartComponent,
    InternetPartsComponent,
    SubscriptionPartsComponent,
    UniversaldiaPartsComponent,
    InstallationManualComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatInputModule,
    BrowserAnimationsModule,
    routing,
    MatIconModule    
                
  ],
  exports: [
    ContactComponent,
    HomeComponent,
    BlogComponent,
    ModemDetailsComponent,
    ModemPartComponent,
    InternetPartsComponent,
    SubscriptionPartsComponent,
    UniversaldiaPartsComponent,
    InstallationManualComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
