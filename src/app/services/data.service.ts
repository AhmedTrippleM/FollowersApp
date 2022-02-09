import { BadRequestError } from './../bad-input';
import { AppError } from './../app-error';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { NotFoundError } from '../not-found-error';
import { Inject } from '@angular/core';


export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)

      .pipe(catchError(this.handleError))
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        catchError(this.handleError)
      )
  }
  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isready: true }));
  }
  //Delete Post
  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError(this.handleError));
  }
  //handle Error
  private handleError(error: Response) {
    if (error.status == 400)
      return throwError(new BadRequestError(error.json()));

    if (error.status == 404)
      return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }

}
