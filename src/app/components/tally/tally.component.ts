import { Component, OnInit, Input, HostListener } from '@angular/core';
import { SimpleState, StateService } from '../../../lib/service/state.service';
import { TallyMeta } from '../../../lib/model/theme.model';

@Component({
  selector: 'tally',
  templateUrl: './tally.html',
  styleUrls: ['./tally.css']
})
export class TallyComponent {
  @Input()
  activeTally: TallyMeta = null;

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

  getCount() {
      return this.state[this.activeTally.name];
  }

  tally(count: number) {
      this.state[this.activeTally.name] += count;

      this.stateService.update(this.state);
  }

  @HostListener('window:keyup', ['$event'])
  handleButtons(event: KeyboardEvent) {
    if (event.keyCode === 187 || event.keyCode === 107) {
      this.tally(1);
    } else if (event.keyCode === 189 || event.keyCode === 109) {
      this.tally(-1);
    }
  }
}
