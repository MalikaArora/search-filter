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

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    FilterPipe,
    ContactComponent,
    HomeComponent,
    BlogComponent
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
    BlogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
