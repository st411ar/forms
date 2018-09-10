import { Component, Inject } from '@angular/core';

import { ExampleModel } from './models/example.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(@Inject('Examples') public examples: ExampleModel[]) {}
}
