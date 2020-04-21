import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewdetailsComponent } from './viewdetails.component';

const routes: Routes = [{
  path: "",
  component: ViewdetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewdetailsRoutingModule { }
