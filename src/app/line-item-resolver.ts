import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { LineItemDetailsService } from './line-item-details.service';

@Injectable()
export class LineItemResolver implements Resolve<any> {

    constructor(private lineItemService: LineItemDetailsService,) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.lineItemService.getLineItems(route.paramMap.get('id'))
    }
}
