import { Injectable } from '@angular/core';
import { WorkOrder } from '../app.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  workOrders: WorkOrder[] = [];
  private orderSource = new BehaviorSubject({});
  private shouldClearOrders = new BehaviorSubject(true);
  searchedOrder = this.orderSource.asObservable();
  clearOrders = this.shouldClearOrders.asObservable();
  
  constructor() { }

  async getWorkOrders() {
    await fetch('../../assets/work-orders.json').then(res => res.json())
    .then(jsonData => {
      this.workOrders = jsonData.response.data;
    });
  }

  searchByDescription(searchInput: string) {
    let found = false;
    this.shouldClearOrders.next(true);
    this.workOrders.forEach(element => {
      if(element.description.toLowerCase().includes(searchInput.toLowerCase())){
        this.orderSource.next(element);
        found = true;
      }
    })
    if(!found) alert('work orders not found');
  }
}