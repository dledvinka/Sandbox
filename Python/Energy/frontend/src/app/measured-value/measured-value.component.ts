import { Component, OnInit, Input } from '@angular/core';
import { MeasuredValueDto } from '../entities/measured-value-dto';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-measured-value',
  templateUrl: './measured-value.component.html',
  styleUrls: ['./measured-value.component.scss']
})
export class MeasuredValueComponent implements OnInit {

  @Input() measuredValue: MeasuredValueDto;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  get isValid() { return this.form.controls['values'][this.measuredValue.label].valid; }

}
