import { BadRequestError } from './../bad-input';
import { AppError } from './../app-error';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { NotFoundError } from '../not-found-error';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'any'
})
export class PostService extends DataService {

  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }


}
