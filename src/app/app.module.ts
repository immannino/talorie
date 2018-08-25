import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TalorieComponent } from './talorie/talorie.component';
import { StateService } from '../lib/service/state.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TallyComponent } from './components/tally/tally.component';
import { AppMaterialsModule } from './app-materials.module';
import { DailyStatsComponent } from './components/daily-stats/dailystats.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TalorieComponent,
    DashboardComponent,
    TallyComponent,
    DailyStatsComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialsModule
  ],
  providers: [ StateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
