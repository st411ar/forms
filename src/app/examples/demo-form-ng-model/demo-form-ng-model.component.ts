import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-demo-form-ng-model',
	templateUrl: './demo-form-ng-model.component.html'
})
export class DemoFormNgModelComponent implements OnInit {
	myForm: FormGroup;
	productName: string;

	constructor(fb: FormBuilder) {
		this.myForm = fb.group({
			'productName': [``, Validators.required]
		});
	}

	ngOnInit() {}


	onSubmit(value: any): void {
		console.log(`you submitted value: `, value);
	}

}
