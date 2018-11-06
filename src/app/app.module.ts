import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { ChatEngine } from './chat-engine.service';
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
