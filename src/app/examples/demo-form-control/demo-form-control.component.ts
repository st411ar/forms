import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-demo-form-control',
	templateUrl: './demo-form-control.component.html'
})
export class DemoFormControlComponent implements OnInit {

	constructor() {}

	ngOnInit() {
		let nameControl: FormControl = new FormControl(`Nate`);

		let name = nameControl.value;

		nameControl.errors;
		nameControl.dirty;
		nameControl.valid;

	}

}
