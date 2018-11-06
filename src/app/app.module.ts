import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { ChatEngine } from './chat-engine.service';

import {AppComponent} from './app.component';
import { AppUsersOnlineComponent } from './app.users-online.component';

@NgModule({
	declarations: [
		AppComponent,
		AppUsersOnlineComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [ChatEngine],
	bootstrap: [AppComponent]
})
export class AppModule {
}
