import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../services/store-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  constructor(private dataService: StoreDataService) { }
  items: any;
  ngOnInit() {
    let data = this.dataService.getUserData();
    if(data instanceof Observable){
      data.subscribe((res)=>{
        this.items = res;
      });
    } else {
      this.items = data;
    }
  }

}
