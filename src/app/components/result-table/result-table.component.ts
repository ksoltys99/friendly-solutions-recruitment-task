import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  subscription!: Subscription;
  clearOrders!: Subscription;
  workOrdersToDisplay: any = [];
  showWorkOrders: boolean = false;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.clearOrders = this.searchService.clearOrders.subscribe(message => {
      if(message) this.clearWorkOrders();
    })

    this.subscription = this.searchService.searchedOrder.subscribe(message => {
      if(message.hasOwnProperty('description')) {
        this.workOrdersToDisplay.push(message);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clearWorkOrders(): void {
    this.workOrdersToDisplay = [];
  }
}
