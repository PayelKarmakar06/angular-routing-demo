import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineItemDetailsService {

  constructor() { }

  getLineItems(id) {
    return of({
      id: id,
      name: 'Pascal Precht',
      website: 'http://thoughtram.io',
    });
  }
}
