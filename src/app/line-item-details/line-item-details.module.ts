import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LineItemDetailsRoutingModule } from './line-item-details-routing.module';
import { LineItemDetailsComponent } from './line-item-details.component';

@NgModule({
  declarations: [LineItemDetailsComponent],
  imports: [
    CommonModule,
    LineItemDetailsRoutingModule
  ]
})
export class LineItemDetailsModule { }
