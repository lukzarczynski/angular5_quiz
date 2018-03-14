import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserModule} from '@angular/platform-browser';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuardService} from './auth-guard.service';
import {AuthInterceptorService} from './auth-interceptor.service';
import {AuthService} from './auth.service';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {SharedMaterialModule} from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedMaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
