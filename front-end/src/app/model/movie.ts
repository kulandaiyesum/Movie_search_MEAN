export interface Movie {
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    dvd: string;
    lastUpdated: string;
  };
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  metacritic: number;
  rated: string;
  cast: string[];
  poster: string;
  title: string;
  fullplot: string;
  languages: string[];
  released: string;
  directors: string[];
  writers: string[];
  lastupdated: string;
  year: number;
  countries: string[];
  type: string;
  num_mflix_comments: number;
}
