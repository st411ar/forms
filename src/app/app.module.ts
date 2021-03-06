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
import { DemoFormWithValidationsExplicitComponent } from './examples/demo-form-with-validations-explicit/demo-form-with-validations-explicit.component';
import { DemoFormWithValidationsShorthandComponent } from './examples/demo-form-with-validations-shorthand/demo-form-with-validations-shorthand.component';
import { DemoFormWithCustomValidationComponent } from './examples/demo-form-with-custom-validation/demo-form-with-custom-validation.component';
import { DemoFormWithEventsComponent } from './examples/demo-form-with-events/demo-form-with-events.component';
import { DemoFormNgModelComponent } from './examples/demo-form-ng-model/demo-form-ng-model.component';


export const examples: ExampleModel[] = [ 
	{ label: 'Intro', path: '' },
	{ label: 'Form Control', path: 'control' },
	{ label: 'Form Group', path: 'group' },
	{ label: 'SKU', path: 'sku' },
	{ label: 'SKU (with Builder)', path: 'sku-builder' },
	{ label: 'Validation Explicit', path: 'validations-explicit' },
	{ label: 'Validation Shorthand', path: 'validations-shorthand' },
	{ label: 'Custom Validation', path: 'custom-validation' },
	{ label: 'Events', path: 'events' },
	{ label: 'NgModel', path: 'ng-model' }
];

const routes: Routes = [
	{ path: '', component: IntroComponent, pathMatch: 'full' },
	{ path: 'control', component: DemoFormControlComponent, pathMatch: 'full' },
	{ path: 'group', component: DemoFormGroupComponent, pathMatch: 'full' },
	{ path: 'sku', component: DemoFormSkuComponent, pathMatch: 'full' },
	{ path: 'sku-builder', component: DemoFormSkuWithBuilderComponent, pathMatch: 'full' },
	{ path: 'validations-explicit', component: DemoFormWithValidationsExplicitComponent, pathMatch: 'full' },
	{ path: 'validations-shorthand', component: DemoFormWithValidationsShorthandComponent, pathMatch: 'full' },
	{ path: 'custom-validation', component: DemoFormWithCustomValidationComponent, pathMatch: 'full' },
	{ path: 'events', component: DemoFormWithEventsComponent, pathMatch: 'full' },
	{ path: 'ng-model', component: DemoFormNgModelComponent, pathMatch: 'full' }
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
		DemoFormSkuWithBuilderComponent,
		DemoFormWithValidationsExplicitComponent,
		DemoFormWithValidationsShorthandComponent,
		DemoFormWithCustomValidationComponent,
		DemoFormWithEventsComponent,
		DemoFormNgModelComponent
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
