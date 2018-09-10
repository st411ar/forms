import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ExampleModel } from './models/example.model';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemComponent } from './sidebar/item/item.component';


export const examples: ExampleModel[] = [ 
	{ label: 'Intro' }
];

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		ItemComponent
	],
	imports: [
		BrowserModule
	],
	providers: [
		{ provide: 'Examples', useValue: examples }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
