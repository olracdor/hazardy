import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private dataSource: any;
  constructor() { }

  ngOnInit(): void {
  }

  onTableScroll(e) {
    const offsetHeight = e.target.offsetHeight 
    const scrollHeight = e.target.scrollHeight 
    const scrollLocation = e.target.scrollTop; 
    
    const buffer = 230; // Add more data if user at the 230px range from the bottom
    const limit = scrollHeight - offsetHeight - buffer;    
    if (scrollLocation > limit) {
      this.dataSource = this.dataSource.concat(this.getHazardData());
    }
  }

  getHazardData(){

  }
}
