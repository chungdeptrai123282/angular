import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cats:any;
  constructor(private cat:CategoryService) { }

  ngOnInit(): void {
     this.cat.getCategories().subscribe(res=>{
      console.log(res);
    });
  }

}
