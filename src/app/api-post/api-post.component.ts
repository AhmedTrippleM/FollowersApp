import { BadRequestError } from './../bad-input';
import { NotFoundError } from './../not-found-error';
import { AppError } from './../app-error';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post-service.service';

@Component({
  selector: 'api-post',
  templateUrl: './api-post.component.html',
  styleUrls: ['./api-post.component.css']
})
export class ApiPostComponent implements OnInit {
  posts;

  constructor(private service: PostService) {

  }
  ngOnInit() {
    this.service.getAll()
      .subscribe(response => {
        this.posts = response;
      }, (error: Response) => {
        if (error.status == 400)
          alert('bad Request');
        else {
          alert('un Expected Error');
          console.log(error);
        }
      })
  }
  createPost(Input: HTMLInputElement) {
    let post = { title: Input.value };
    this.posts.splice(0, 0, post);
    Input.value = '';

    this.service.create(post)
      .subscribe(response => {

      }, (error: AppError) => {
        this.posts.splice(0, 1);
        if (error instanceof BadRequestError)
          alert('bad Request');
        else {
          alert('un Expected Error');
          console.log(error);
        }
      })
  }
  updatePost(post) {
    this.service.update(post)
      .subscribe(response => {
        console.log(response);
      }, (error: Response) => {
        if (error.status == 400)
          alert('bad Request');
        else {
          alert('un Expected Error');
          console.log(error);
        }
      })
  }
  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post.id)
      .subscribe(null, (error: AppError) => {
        this.posts.splice(index, 0, post)
        if (error instanceof NotFoundError)
          alert('bad Request');
        else {
          alert('un Expected Error');
          console.log(error);
        }
      })
  }



}
