import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SupplyPointService } from '../services/supply-point.service';
import { SupplyPointDetailDto } from '../entities/supply-point-detail-dto';

@Component({
  selector: 'app-supply-point',
  templateUrl: './supply-point.component.html',
  styleUrls: ['./supply-point.component.scss']
})
export class SupplyPointComponent implements OnInit {

  id: number;
  model: SupplyPointDetailDto;

  constructor(private supplyPointService: SupplyPointService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.id = Number(idParam);
      this.supplyPointService.get(this.id)
        .subscribe(data => {
          this.model = data;
        });
    } else {
      this.model = new SupplyPointDetailDto();
    }
  }

  onSubmit(): void {
    // this.model.date_taken = this.form.value['dateTaken'];
    // this.model.electricity_high_rate_kwh = this.form.value['eleHighRate'];
    // this.model.electricity_low_rate_kwh = this.form.value['eleLowRate'];
    // this.model.gas_m3 = this.form.value['gas'];

    // console.log(this.model);

    // if (this.id) {
    //   this.measurementService.update(this.model).subscribe(_ => {
    //     this.router.navigate(['/measurements']);
    //   });
    // } else {
    //   this.measurementService.insert(this.model).subscribe(_ => {
    //     this.router.navigate(['/measurements']);
    //   });
    // }
  }
}
