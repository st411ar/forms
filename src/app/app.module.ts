import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExampleModel } from './models/example.model';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemComponent } from './sidebar/item/item.component';
import { IntroComponent } from './intro/intro.component';
import { DemoFormControlComponent } from './examples/demo-form-control/demo-form-control.component';
import { DemoFormGroupComponent } from './examples/demo-form-group/demo-form-group.component';
import { DemoFormSkuComponent } from './examples/demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './examples/demo-form-sku-with-builder/demo-form-sku-with-builder.component';


export const examples: ExampleModel[] = [ 
	{ label: 'Intro', path: '' },
	{ label: 'Form Control', path: 'control' },
	{ label: 'Form Group', path: 'group' },
	{ label: 'SKU', path: 'sku' },
	{ label: 'SKU (with Builder)', path: 'sku-builder' },
];

const routes: Routes = [
	{ path: '', component: IntroComponent, pathMatch: 'full' },
	{ path: 'control', component: DemoFormControlComponent, pathMatch: 'full' },
	{ path: 'group', component: DemoFormGroupComponent, pathMatch: 'full' },
	{ path: 'sku', component: DemoFormSkuComponent, pathMatch: 'full' },
	{ path: 'sku-builder', component: DemoFormSkuWithBuilderComponent, pathMatch: 'full' },
];

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		ItemComponent,
		IntroComponent,
		DemoFormControlComponent,
		DemoFormGroupComponent,
		DemoFormSkuComponent,
		DemoFormSkuWithBuilderComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		{ provide: 'Examples', useValue: examples }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
