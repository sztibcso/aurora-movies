import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id: string;
  title: string;
  description: string;
  image_url: string;
  rating: number;
}

export interface PaginatedMovies {
  total: number;
  items: Movie[];
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly apiUrl = 'https://november7-730026606190.europe-west1.run.app/movies/';

  constructor(private http: HttpClient) { }

  getMovies(skip: number = 0, limit: number = 10, query?: string): Observable<PaginatedMovies> {
    let params = new HttpParams()
      .set('skip', skip.toString())
      .set('limit', limit.toString());

    if (query) {
      params = params.set('query', query);
    }

    return this.http.get<PaginatedMovies>(this.apiUrl, { params });
  }
}
