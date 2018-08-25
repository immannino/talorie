import { Component, OnInit } from '@angular/core';
import { SimpleState, StateService } from '../../../lib/service/state.service';

@Component({
  selector: 'dailystats',
  templateUrl: './dailystats.html',
  styleUrls: ['./dailystats.css']
})
export class DailyStatsComponent {
  state: SimpleState = null;

  constructor(private stateService: StateService) {
    this.stateService.stateSubject.subscribe((state) => {
        this.state = {
            ...this.state,
            ...state
        };
    });
  }
  
  getProgressBarPercentage = () => ((this.state.dailyCalories - this.getCaloriesLeft()) / this.state.dailyCalories) * 100;
  getNutritionCalculatedTotal = () => this.state.nutrition * 50;
  getWaterCalculatedTotal = () => this.state.water * 8;
  getWorkoutCalculatedTotal = () => this.state.workout * 50;
  getCaloriesLeft = () => (this.state.dailyCalories - this.getNutritionCalculatedTotal()) + this.getWorkoutCalculatedTotal();
  getNetCalories = () => (this.getNutritionCalculatedTotal() - this.getWorkoutCalculatedTotal())

  ngOnInit() {
    this.state = this.stateService.getState();
  }
}