import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { Observable } from 'rxjs';
import { TestMessage } from './test-message';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  test$: Observable<TestMessage>;

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.test$ = this.testService.getTest()
  }

}
