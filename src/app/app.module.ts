import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LineItemDetailsService } from './line-item-details.service';
import { LineItemResolver } from './line-item-resolver';

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
    resolve: {
      info: LineItemResolver
    }
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
  providers: [
    LineItemDetailsService,
    LineItemResolver,
  //   {
  //   provide: 'contact',
  //   useValue: () => {
  //     return {
  //       id: 1,
  //       name: 'Some Contact',
  //       website: 'http://some.website.com'
  //     };
  //   }
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
