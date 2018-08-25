import { Component, OnInit } from '@angular/core';
import { StateService, SimpleState } from '../../lib/service/state.service';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
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

  login() {
    this.state.isLoggedIn = true;
    
    this.stateService.update(this.state);
  }
}
