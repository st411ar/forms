import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExampleModel } from './models/example.model';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemComponent } from './sidebar/item/item.component';
import { IntroComponent } from './intro/intro.component';
import { DemoFormControlComponent } from './examples/demo-form-control/demo-form-control.component';


export const examples: ExampleModel[] = [ 
	{ label: 'Intro', path: '' },
	{ label: 'Form Control', path: 'control' },
];

const routes: Routes = [
	{ path: '', component: IntroComponent, pathMatch: 'full' },
	{ path: 'control', component: DemoFormControlComponent, pathMatch: 'full' },
];

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		ItemComponent,
		IntroComponent,
		DemoFormControlComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		{ provide: 'Examples', useValue: examples }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
