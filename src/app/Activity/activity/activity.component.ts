import { Component, OnInit } from '@angular/core';
import { ActivityModel } from 'src/app/Models/activity';
import { PopupComponent } from '../popup/popup.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ActivityService } from 'src/app/Servicee/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  animal: string | undefined;
  name: string | undefined;

  constructor(public dialog: MatDialog,private api:ActivityService) { }
  activitydata!:ActivityModel[];

  ngOnInit(): void {
   this.LoadActivity();
  }

  displayColmuns :string[]=["id","name","description","capacity","disponibility","startTime","endTime","favourite"]
  
   Openpopup(id:any) {
    
   this.dialog.open(PopupComponent,{
     width:'500px',
   // exitAnimationDuration: '1000ms',
     // enterAnimationDuration: '1000ms',
  data: {id: id}
 
  })
  
  }

  


LoadActivity(){
  this.api.getAllActivity().subscribe
  (
    eventsRslt=>{

    this.activitydata = eventsRslt;
    console.log(this.activitydata);
  })
}

}
