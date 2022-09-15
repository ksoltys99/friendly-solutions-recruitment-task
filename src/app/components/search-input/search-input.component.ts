import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
   
  }

  async handleSearch(value: string){
    await this.searchService.getWorkOrders();
    this.searchService.searchByDescription(value);
  }
}
