import { Component, OnInit } from '@angular/core';
import { SupplyPointService } from '../services/supply-point.service';
import { SupplyPointListItemDto } from '../entities/supply-point-list-item-dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-supply-points',
  templateUrl: './supply-points.component.html',
  styleUrls: ['./supply-points.component.scss']
})
export class SupplyPointsComponent implements OnInit {

  constructor(private supplyPointService: SupplyPointService) { }
  supplyPoints$: Observable<SupplyPointListItemDto[]>;

  ngOnInit() {
    this.supplyPoints$ = this.supplyPointService.getAll();
  }

}
