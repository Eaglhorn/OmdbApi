import { Component, OnInit } from '@angular/core';
import {OmdbService} from '../services/omdb.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private omdbService: OmdbService) { }

  private movieList;

  async ngOnInit() {
    this.movieList = await this.omdbService.getMovie();

    this.omdbService.addMovie
      .subscribe((rec) => {
        this.omdbService.getMovie().then(res => this.movieList = res);
        console.log('new' + this.movieList);
        console.log(rec);
      });
  }

  onDeleteMovie(id) {
    this.omdbService.deleteMovie(id)
      .subscribe((res) => {this.omdbService
        .getMovie()
        .then(ress => this.movieList = ress);
      });
  }
}
