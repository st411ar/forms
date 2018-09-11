import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SkuValidator } from '../../validators/sku.validator';


@Component({
	selector: 'app-demo-form-with-custom-validation',
	templateUrl: './demo-form-with-custom-validation.component.html'
})
export class DemoFormWithCustomValidationComponent implements OnInit {
	myForm: FormGroup;
	sku: AbstractControl;

	constructor(fb: FormBuilder) {
		this.myForm = fb.group({
			'sku': [
				``,
				Validators.compose([
					Validators.required,
					SkuValidator.validate
				])
			]
		});

		this.sku = this.myForm.controls['sku'];
	}

	ngOnInit() {}


	onSubmit(value: string): void {
		console.log(`you submitted value: `, value);
	}

}
