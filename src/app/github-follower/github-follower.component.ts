import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Pipe } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';


@Component({
  selector: 'github-follower',
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.css']
})
export class GithubFollowerComponent implements OnInit {
  followers;
  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
      switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        return this.service.getAll();
      })).subscribe(follwers => this.followers = follwers)





  }

}
