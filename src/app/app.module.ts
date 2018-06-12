import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UrlFormComponent } from './components/url-form/url-form.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './routerConfig';
import {HttpClientModule} from '@angular/common/http';
import { ShortenerService } from './shortener.service';


@NgModule({
  declarations: [
    AppComponent,
    UrlFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ShortenerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
