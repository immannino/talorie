import { Component } from '@angular/core';
import { SimpleState, StateService } from '../../lib/service/state.service';
import { TallyMeta, tallys } from '../../lib/model/theme.model';

@Component({
  selector: 'talorie',
  templateUrl: './talorie.html',
  styleUrls: ['./talorie.css']
})
export class TalorieComponent {
  state: SimpleState = null;
  activeTally: TallyMeta = undefined;
  
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
  
  openTally(fieldName: string) {
    if (this.state[fieldName] !== undefined) {
      console.log(tallys[fieldName]);
      this.activeTally = tallys[fieldName];
    }
  }
}
