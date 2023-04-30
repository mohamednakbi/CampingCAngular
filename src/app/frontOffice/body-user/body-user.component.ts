import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityModel, Evaluation } from 'src/app/Models/activity';
import { ActivityLiked } from 'src/app/Models/post-like';
import { ActivityService } from 'src/app/Servicee/activity.service';

@Component({
  selector: 'app-body-user',
  templateUrl: './body-user.component.html',
  styleUrls: ['./body-user.component.css']
})
export class BodyUserComponent implements OnInit {
  isRequired=false;

  activitydata:ActivityModel[] = [];
  listInitial:ActivityModel[] = [];

  constructor(public dialog: MatDialog,private activatedRoute: ActivatedRoute, 
    private service: ActivityService,
    private router: Router,
    http: HttpClient) { }

  ngOnInit(): void {
    this.getAllActivitys();
  }
  getAllActivitys(){
    this.service.getAllActivity().subscribe((res: ActivityModel[]) => {this.activitydata = res,this.listInitial=this.activitydata;
      console.log(this.activitydata);
    });
  
  }

  Openpopup() {
    
   
    this.router.navigate(['Graph'])
    
    }


    eval : Evaluation = new Evaluation();
    addEvaluation(id:any , val : string){
      this.isRequired=!this.isRequired ;
      this.service.addeval(id ,val ).subscribe()
      this.getAllActivitys();
    
    }


    like : ActivityLiked = new ActivityLiked();
    addLikeToPost(id:any){
      this.like.isLiked = "true"
      console.log(id)
      this.service  .addPostLike(id ,this.like ).subscribe()
      this.getAllActivitys();
    
    }
}
