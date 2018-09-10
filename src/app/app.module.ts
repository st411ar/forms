import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ExampleModel } from './models/example.model';
import { SidebarComponent } from './sidebar/sidebar.component';


export const examples: ExampleModel[] = [ 
	{ label: 'Intro' }
];

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent
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
