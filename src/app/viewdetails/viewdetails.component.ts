import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

  constructor() { }

  public itemList: any[];

  ngOnInit() {
    this.itemList = [{
      name: 'resolve property',
      id: 1
    }, {
      name: 'paramMap',
      id: 2
    }, {
      name: 'queryParamMap',
      id: 3
    }, {
      name: 'snapshot',
      id: 4
    }, {
      name: 'forChildren()',
      id: 5
    }]
  }

}
