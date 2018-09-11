import { FormControl } from '@angular/forms';

export class SkuValidator {
	static validate(control: FormControl): {[s: string]: boolean} {
		if (!control.value.match(/^123/)) {
			return {invalidSku: true};
		} else {
			return null;
		}
	}
}