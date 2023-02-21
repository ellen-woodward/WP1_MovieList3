import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    { title: 'The Godfather I', year: '1972', director: 'Francis Ford Coppola'},
    { title: 'The Godfather II', year: '1978', director: 'Francis Ford Coppola'},
    { title: 'The Godfather III', year: '1982', director: 'Francis Ford Coppola'}
  ];

  getMovies(){
    return this.movieList;
  }

  addMovie(movietitle:string, moviedirector:string, movieyear:string){
    this.movieList.push({title:movietitle, director:moviedirector, year:movieyear});
  }
}
