import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';
import {InfinitescrollDirective} from '../../infinitescroll.directive'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  search: string = '';
  movies: Movie[] = [];
  pageNumber: number = 1;
  showLoadButton: boolean = false;
  isLoading = false;
  private lastScrollPosition: number = 0;
  @ViewChild(InfinitescrollDirective)
  infiniteScrollDirective!: InfinitescrollDirective;
  constructor(private readonly movieService: MovieService) {}
  ngOnInit(): void {
    this.getMovies();
  }

  searchMovies() {
    this.isLoading = true;
    this.pageNumber = 1;
    this.movieService.getMovies(this.pageNumber, this.search).subscribe({
      next: (doc: any) => {
        if (doc.movies.length === 10) {
          this.showLoadButton = true;
        } else {
          this.showLoadButton = false;
        }
        console.log(this.showLoadButton);
        // doc.movies.forEach((m: any) => this.movies.push(m));
        this.movies = doc?.movies;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
  getMovies() {
    this.isLoading = true;
    this.movieService.getMovies(this.pageNumber, this.search).subscribe({
      next: (doc: any) => {
        console.log(doc);
        if (doc.movies.length === 10) {
          this.showLoadButton = true;
        } else {
          this.showLoadButton = false;
        }
        doc.movies.forEach((m: any) => this.movies.push(m));
        this.infiniteScrollDirective.restoreScrollPosition();
        // this.movies = doc?.movies;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
  loadMore() {
    this.pageNumber = this.pageNumber + 1;
    if (this.showLoadButton) this.getMovies();
  }
}
