import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class OmdbService {

  constructor(private http: HttpClient) {

  }

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  search(title, page) {
    const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=852159f0&page=' + page;
    return this.http.get(url)
      .map(res => res);
  }
  detail(title) {
    const url = 'http://www.omdbapi.com/?t=' + title + '&apikey=852159f0';
    return this.http.get(url)
      .map(res => res);
  }


  @Output() addMovie = new EventEmitter();

  addNewMovie(movie) {
    return this.http.post('http://localhost:3000/movie', movie)
      .subscribe(() => {
        this.addMovie.emit(movie);
      });

  }

  deleteMovie(id) {
    if (confirm('Вы уверены?')) {
      const url = `http://localhost:3000/movie/${id}`;
      return this.http.delete(url, {headers: this.headers})
        .map(res => {
          console.log(res);
        });
    }
  }

  getMovie() {
    return this.http.get('http://localhost:3000/movie').toPromise()
      .then(res => {
        console.log(res);
        return res;
      });
  }

}
