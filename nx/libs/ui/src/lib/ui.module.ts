import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLibComponent } from './first-lib/first-lib.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FirstLibComponent],
  exports: [FirstLibComponent],
})
export class UiModule {}
