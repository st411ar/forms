import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-demo-form-control',
	templateUrl: './demo-form-control.component.html'
})
export class DemoFormControlComponent implements OnInit {
	control: FormControl;

	constructor() {}

	ngOnInit() {
		this.control = new FormControl(`Nate`);

		this.control.valueChanges.subscribe(() => this.logControlState());
	}


	onSubmit(): void {
		this.logControlState();
	}


	private logControlState(): void {
		console.log(`this.control.value: ${this.control.value}`);
		console.log(`this.control.errors: ${this.control.errors}`);
		console.log(`this.control.dirty: ${this.control.dirty}`);
		console.log(`this.control.valid: ${this.control.valid}`);
	}
}
