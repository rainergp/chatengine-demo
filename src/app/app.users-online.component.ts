import { Component } from '@angular/core';
import { ChatEngine } from './chat-engine.service';

@Component({
	selector: 'app-usersOnline',
	templateUrl: './app.users-online.component.html'
})
export class AppUsersOnlineComponent {
	private ce: any;

	constructor(private chatEngine: ChatEngine) {
		this.ce = chatEngine;
	}

	getUsers(obj) {
		let users: any = [];
		if (obj) {
			Object.keys(obj).forEach((key) => {
				users.push(obj[key]);
			});
		}
		return users;
	}
}
