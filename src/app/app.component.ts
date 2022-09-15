import { Component } from '@angular/core';
import { SearchService } from './services/search.service';

export interface WorkOrder {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: object[];
  status: string;
  priority: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friendly-solutions';

  constructor(private searchService: SearchService) {

  }

  async ngOnInit(){
    await this.searchService.getWorkOrders();
    this.searchService.searchByDescription(' ');
  }
}
