import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.scss']
})
export class MeasurementComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.form);
  }

}
