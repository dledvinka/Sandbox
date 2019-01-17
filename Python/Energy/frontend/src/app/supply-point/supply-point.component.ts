import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SupplyPointService } from '../services/supply-point.service';
import { SupplyPointDetailDto } from '../entities/supply-point-detail-dto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-supply-point',
  templateUrl: './supply-point.component.html',
  styleUrls: ['./supply-point.component.scss']
})
export class SupplyPointComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  id: number;
  model: SupplyPointDetailDto;

  constructor(private supplyPointService: SupplyPointService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    const idParam = this.route.snapshot.paramMap.get('id');
    const idParamValue: number = idParam ? Number(idParam) : undefined;

    if (idParamValue && idParamValue !== 0) {
      this.id = idParamValue;
      this.supplyPointService.get(this.id)
        .subscribe(data => {
          this.model = data;
        });
    } else {
      this.model = new SupplyPointDetailDto();
    }
  }

  onSubmit(): void {
    this.model.name = this.form.value['name'];
    this.model.address = this.form.value['address'];
    this.model.comment = this.form.value['comment'];

    if (this.id) {
      this.supplyPointService.update(this.model).subscribe(_ => {
        this.router.navigate(['/supply-points']);
      });
    } else {
      this.supplyPointService.insert(this.model).subscribe(_ => {
        this.router.navigate(['/supply-points']);
      });
    }
  }
}
