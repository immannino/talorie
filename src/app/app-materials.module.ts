import { NgModule }                           from '@angular/core';
import { NoopAnimationsModule, BrowserAnimationsModule }                 from '@angular/platform-browser/animations';
import { MatCommonModule, MatButtonModule, MatCardModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [ BrowserAnimationsModule, MatCommonModule, MatButtonModule, MatCardModule, MatProgressBarModule],
  exports: [ BrowserAnimationsModule, MatCommonModule, MatButtonModule, MatCardModule, MatProgressBarModule],
})
export class AppMaterialsModule { }