import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movie: Movie = {
    awards: {
      wins: 15,
      nominations: 48,
      text: 'Nominated for 2 Oscars. Another 13 wins & 48 nominations.',
    },
    imdb: {
      rating: 7.3,
      votes: 494371,
      id: 145487,
    },
    tomatoes: {
      viewer: {
        rating: 3.8,
        numReviews: 84,
        meter: 100,
      },
      dvd: '2008-04-01T00:00:00.000Z',
      lastUpdated: '2015-09-11T17:38:00.000Z',
    },
    _id: '573a139cf29313caabcf6b91',
    plot: 'When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.',
    genres: ['Action', 'Adventure'],
    runtime: 121,
    metacritic: 73,
    rated: 'PG-13',
    cast: ['Tobey Maguire', 'Willem Dafoe', 'Kirsten Dunst', 'James Franco'],
    poster:
      'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SY1000_SX677_AL_.jpg',
    title: 'Spider-Man',
    fullplot:
      "Based on Marvel Comics' superhero character, this is a story of Peter Parker who is a nerdy high-schooler. He was orphaned as a child, bullied by jocks, and can't confess his crush for his stunning neighborhood girl Mary Jane Watson. To say his life is \"miserable\" is an understatement. But one day while on an excursion to a laboratory a runaway radioactive spider bites him... and his life changes in a way no one could have imagined. Peter acquires a muscle-bound physique, clear vision, ability to cling to surfaces and crawl over walls, shooting webs from his wrist ... but the fun isn't going to last. An eccentric millionaire Norman Osborn administers a performance enhancing drug on himself and his maniacal alter ego Green Goblin emerges. Now Peter Parker has to become Spider-Man and take Green Goblin to the task... or else Goblin will kill him. They come face to face and the war begins in which only one of them will survive at the end.",
    languages: ['English'],
    released: '2002-05-03T00:00:00.000Z',
    directors: ['Sam Raimi'],
    writers: [
      'Stan Lee (Marvel comic book)',
      'Steve Ditko (Marvel comic book)',
      'David Koepp (screenplay)',
    ],
    lastupdated: '2015-09-10T12:23:35.977Z',
    year: 2002,
    countries: ['USA'],
    type: 'movie',
    num_mflix_comments: 0,
  };
  private readonly baseUrl = environment.apiEndPoint;
  constructor(private http: HttpClient) {}

  getMovieById(movieId?: string): Observable<Movie> {
    return of(this.movie);
  }

  getMovies(page: number = 1, searchString: string = '') {
    const header = { 'content-type': 'application/json' };
    return this.http.get(
      `${this.baseUrl}movies?page=${page}&search=${searchString}`,
      { headers: header }
    );
  }
}
