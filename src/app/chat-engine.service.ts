import { Injectable } from '@angular/core';
import { ChatEngineCore } from 'chat-engine';

@Injectable()
export class ChatEngine {
	instance: any;
	create: any;
	plugin: any;
	me: any = { state: {} };
	chat: any = {};

	constructor() {
		this.instance = ChatEngineCore.create(
			{
				publishKey: 'pub-c-f2984d71-0492-447a-90e3-cdaa08935790',
				subscribeKey: 'sub-c-bce36e24-e200-11e8-a36a-3a3b171d1021'
			},
			{
				debug: true,
				globalChannel: 'chat-engine-angular2-simple'
			});
		this.create = ChatEngineCore.create.bind(this);
		this.plugin = ChatEngineCore.plugin;
	}
}

