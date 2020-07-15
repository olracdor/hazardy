import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../home.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  onTableScroll(e) {
    const offsetHeight = e.target.offsetHeight 
    const scrollHeight = e.target.scrollHeight 
    const scrollLocation = e.target.scrollTop; 
    
    const buffer = 230; // Add more data if user at the 230px range from the bottom
    const limit = scrollHeight - offsetHeight - buffer;    
    if (scrollLocation > limit) {
      this.dataSource.data.push(this.getHazardData());
    }
  }

  getHazardData(){
    this.homeService.getHazards().subscribe((res: any) => {
        this.dataSource = res;
    }, err => {
        console.log(err);
    });
  }
}
