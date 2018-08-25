import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class StateService {
    stateSubject: Subject<SimpleState> = new Subject<SimpleState>();
    
    state: SimpleState = {
        isLoggedIn: false,
        workout: 0,
        nutrition: 0,
        water: 0,
        dailyCalories: 2200
    }

    getState():SimpleState {
        return this.state;
    }

    setState(state: SimpleState) {
        this.state = state;
    }

    update(state: SimpleState) {
        this.setState(state);

        this.stateSubject.next(this.state);
    }
}

export class SimpleState {
    isLoggedIn: boolean;
    workout: number;
    nutrition: number;
    water: number;
    dailyCalories: number;
}