import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';


import { AppComponent } from './app.component';
import { CustomInterceptor } from './shared/custominterceptor'
import { Utilites } from './shared/utilities'

// Routes 
import { routes } from './app.routes';

// Modules
import { LayoutModule } from './layout/index';
import { AuthModule } from './auth/auth.module'
import { CheckoutModule } from './checkout/checkout.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './home/index'
import { Http } from '@angular/http';
import { EventAuthGuardService } from './core/services/auth-guard.service'
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    LayoutModule,
    HttpClientModule,
    BrowserModule,
    HomeModule,
    AuthModule,
    CheckoutModule
  ],
  providers: [ 
    Utilites,
    EventAuthGuardService,
    Http, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor ,
      multi: true
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
