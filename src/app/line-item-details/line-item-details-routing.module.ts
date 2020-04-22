import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineItemDetailsComponent } from './line-item-details.component';

const routes: Routes = [{
  path: "",
  component: LineItemDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineItemDetailsRoutingModule { }
