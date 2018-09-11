import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-demo-form-group',
	templateUrl: './demo-form-group.component.html'
})
export class DemoFormGroupComponent implements OnInit {

	constructor() {}

	ngOnInit() {
		let personInfo: FormGroup = new FormGroup({
			firstName: new FormControl(`Nate`),
			lastName: new FormControl(`Murray`),
			zip: new FormControl(`90210`)
		});

		personInfo.value;

		personInfo.errors;
		personInfo.dirty;
		personInfo.valid;
	}

}
