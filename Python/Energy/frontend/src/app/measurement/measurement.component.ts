import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Measurement } from '../entities/measurement';
import { MeasurementService } from '../services/measurement.service';
import { CommandResult } from '../entities/command-result';
import { Router } from '@angular/router';

@Component({
	selector: 'app-measurement',
	templateUrl: './measurement.component.html',
	styleUrls: ['./measurement.component.scss']
})
export class MeasurementComponent implements OnInit {

	@ViewChild('f') form: NgForm;
	model: Measurement;
	constructor(private measurementService: MeasurementService, private router: Router) { }

	ngOnInit() {
		this.create();
	}

	create(): void {
		this.model = new Measurement();
	}

	update(model: Measurement): void {
		this.model = model;
	}

	onSubmit(): void {

		console.log(this.form);
		this.model.date_taken = this.form.value['dateTaken'];
		this.model.electricity_high_rate_kwh = this.form.value['eleHighRate'];
		this.model.electricity_low_rate_kwh = this.form.value['eleLowRate'];
		this.model.gas_m3 = this.form.value['gas'];

		console.log(this.model);

		this.measurementService.insert(this.model).subscribe((cr: CommandResult) => {
			if (cr.isOk) {
				this.router.navigate(['/measurements']);
			}
			else {
				console.error(cr.message);
			}
		});
	}
}
