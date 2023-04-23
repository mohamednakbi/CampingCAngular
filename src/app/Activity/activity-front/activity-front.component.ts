import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/Servicee/activity.service';

import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {RequestBaseService} from "../../Servicee/request-base.service";
import { ActivityLiked } from 'src/app/Models/post-like';
import { Post } from 'src/app/Models/post';
import { ActivityModel, Evaluation } from 'src/app/Models/activity';
@Component({
  selector: 'app-activity-front',
  templateUrl: './activity-front.component.html',
  styleUrls: ['./activity-front.component.css']
})
export class ActivityFrontComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
    private service: ActivityService,
    private router: Router,
    http: HttpClient) { }

 
    postLike: ActivityLiked = new ActivityLiked();
  
    post1: Post = new Post;

    postid?: string;
    routeSub?: Subscription;
    activitydata:ActivityModel[] = [];
    listInitial:ActivityModel[] = [];

  ngOnInit(): void {
    this.getAllActivity();
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.postid = params['id'];
    });
  }
  getAllActivity(){
    this.service.getAllActivity().subscribe((res: ActivityModel[]) => {this.activitydata = res,this.listInitial=this.activitydata;
      console.log(this.activitydata);
    });
  
  }

  like : ActivityLiked = new ActivityLiked();
  addLikeToPost(id:any){
    this.like.isLiked = "true"
    console.log(id)
    this.service  .addPostLike(id ,this.like ).subscribe()
    this.getAllActivity();
  
  }

  
  // addDisLikePost(id: string) {
  //   this.service.addPostDisLike(id, this.postLike).subscribe(p => {
  //     console.log(this.postLike);
  //     let currentUrl = this.router.url;
  //     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //     this.router.onSameUrlNavigation = 'reload';
  //     this.router.navigate([currentUrl]);
  //   });
  // }


  eval : Evaluation = new Evaluation();
addEvaluation(id:any , val : string){

  this.service.addeval(id ,val ).subscribe()
  this.getAllActivity();

}
}
