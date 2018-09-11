import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-demo-form-group',
	templateUrl: './demo-form-group.component.html'
})
export class DemoFormGroupComponent implements OnInit {
	personForm: FormGroup;

	constructor() {
		this.personForm = new FormGroup({
			firstName: new FormControl(`Nate`),
			lastName: new FormControl(`Murray`),
			zip: new FormControl(`90210`)
		});

		this.personForm.valueChanges.subscribe(() => this.logPersonFormState());
	}

	ngOnInit() {
	}


	onSubmit(): void {
		this.logPersonFormState();
	}


	private logPersonFormState(): void {
		console.log(this.personForm);
	}

}
