import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../movie.service';
import {Movie} from '../movie.model';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent {
  movies=[] as any;
  private currentMovie!: Movie;

  @Output()
  onSelectedMovie!: EventEmitter<Movie>;

  constructor(private movieServie: MovieService){
    this.onSelectedMovie = new EventEmitter();
  }

  selectMovie(myMovie:Movie):void{
    console.log(myMovie);
    this.currentMovie = myMovie;
    this.onSelectedMovie.emit(myMovie);
  }

  isSelected(movie:Movie):boolean{
    if (!movie || !this.currentMovie){
      return false;
    }
    return movie.title === this.currentMovie.title;
  }

  ngOnInit(){
    this.movies = this.movieServie.getMovies();
    console.log(this.movies);
  }
}
