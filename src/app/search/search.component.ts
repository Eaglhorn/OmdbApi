import { Component, OnInit } from '@angular/core';
import {OmdbService} from '../services/omdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public title = '';
  public result: Object;
  public detailResult: Object;
  public add = false;
  public list = false;
  public page = 1;
  public detail = false;
  public addCount;

  constructor(private omdbService: OmdbService) {

  }

  ngOnInit() {
  }

  onSearch(title, page) {
    this.list = true;
    page = this.page = 1;
    this.omdbService.search(title, page)
      .subscribe((res: Response) => {
        this.result = res;
        console.log(this.result);
      });
  }


  onDetail(title) {
    console.log(title);
    if (title) {
      console.log('true  ' + title);
       this.detail = true;
    } else { this.detail = false; }

    this.omdbService.detail(title)
      .subscribe((res: Response) => {
        this.detailResult = res;
        console.log(this.detailResult);
      });
    scrollTo(0, 0);
  }

  onAddMovie(movie) {
    this.add = true;
    console.log(movie);
    this.omdbService.addNewMovie(movie);
    this.addCount = this.addCount + 1;
/*    this.omdbService.search()*/
  }

  onPaginationN(title, page) {
    this.page = page + 1;
    this.omdbService.search(title, this.page)
      .subscribe(res => {
        this.result = res;
        console.log(res);
      });
    console.log(title, this.page);
  }

  onPaginationP(title, page) {
    if (page > 1) {
      this.page = page - 1;
      this.omdbService.search(title, this.page)
        .subscribe(res => {
          this.result = res;
          console.log(res);
        });
      console.log(title, this.page);
    } else {}
  }

}
