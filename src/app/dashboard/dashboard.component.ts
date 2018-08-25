import { Component, OnInit } from '@angular/core';
import { StateService, SimpleState } from '../../lib/service/state.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
    state: SimpleState = null;

    constructor(private stateService: StateService) {
        this.stateService.stateSubject.subscribe((state) => {
            this.state = {
                ...this.state,
                ...state
            };
        });
    }

    ngOnInit() {
        this.state = this.stateService.getState();
    }
}
