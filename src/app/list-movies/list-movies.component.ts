import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent {
  movies=[] as any;

  constructor(private movieServie: MovieService){}

  ngOnInit(){
    this.movies = this.movieServie.getMovies();
    console.log(this.movies);
  }
}
