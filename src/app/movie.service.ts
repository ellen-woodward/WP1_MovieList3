import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie!: Movie;

  constructor() { }

  movieList = [
    new Movie('The Godfather I', '1972', 'Francis Ford Coppola'),
    new Movie('The Godfather II', '1978', 'Francis Ford Coppola'),
    new Movie('The Godfather III', '1982', 'Francis Ford Coppola'),
  ];

  getMovies(){
    return this.movieList.sort();
  }

  addMovie(movietitle:string, moviedirector:string, movieyear:string){
    this.movieList.push(new Movie(movietitle, movieyear, moviedirector));
  }
}
