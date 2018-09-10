import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExampleModel } from '../../models/example.model';


@Component({
	selector: 'app-item',
	templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
	@Input() item: ExampleModel;

	constructor(private router: Router) {}

	ngOnInit() {}

}
