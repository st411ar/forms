import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ExampleModel } from './models/example.model';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemComponent } from './sidebar/item/item.component';
import { IntroComponent } from './intro/intro.component';


export const examples: ExampleModel[] = [ 
	{ label: 'Intro' }
];

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		ItemComponent,
		IntroComponent
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
