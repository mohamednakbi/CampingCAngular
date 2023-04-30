import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityModel } from 'src/app/Models/activity';
import { ActivityService } from 'src/app/Servicee/activity.service';

@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.component.html',
  styleUrls: ['./detail-activity.component.css']
})
export class DetailActivityComponent implements OnInit {

  constructor(public dialog: MatDialog,private activatedRoute: ActivatedRoute, 
    private service: ActivityService,
    private router: Router,
    http: HttpClient) { }
    activitydata:ActivityModel[] = [];

  ngOnInit(): void {
  }
 
}
