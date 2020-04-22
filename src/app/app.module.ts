import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
    path: "",
    component: HomeComponent
  }, {
    path: "about",
    loadChildren: "./about/about.module#AboutModule"
  }, {
    path: "viewdetails",
    loadChildren: "./viewdetails/viewdetails.module#ViewdetailsModule"
  }, {
    path: "viewdetails/:id",
    loadChildren: "./line-item-details/line-item-details.module#LineItemDetailsModule",
    // resolve: {
    //   info: 'Hiii'
    // }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
