import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line-item-details',
  templateUrl: './line-item-details.component.html',
  styleUrls: ['./line-item-details.component.css']
})
export class LineItemDetailsComponent implements OnInit {

  public topicDetails: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.topicDetails = this.route.snapshot.data.info;
  }

}
