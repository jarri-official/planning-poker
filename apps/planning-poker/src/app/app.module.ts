import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { environment } from '@environments/environment';
import { ENVIRONMENT } from '@environments/utils';
import { SharedModule } from '@shared/shared.module';

import { AppComponent } from './app.component';
import { PokerModule } from './poker/poker.module';

const config: SocketIoConfig = {
  url: '/', options: {
    autoConnect: true,
    reconnect: true,
    reconnection: true,
    reconnectionDelay: 500,
    reconnectionAttempts: Infinity,
    pingTimeout: 10000,
    pingInterval: 30000
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    PokerModule,
    RouterModule,
    SocketIoModule.forRoot(config),
    NgxGoogleAnalyticsModule.forRoot('UA-180323084-1'),
    NgxsModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [
    {
      provide: ENVIRONMENT,
      useValue: environment
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
