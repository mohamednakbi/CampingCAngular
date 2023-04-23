import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivityModel } from 'src/app/Models/activity';
import { ActivityService } from 'src/app/Servicee/activity.service';
import {FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms'
import {Router} from "@angular/router";
import { ActivityLiked } from 'src/app/Models/post-like';


@Component({
  selector: 'app-activity-camping',
  templateUrl: './activity-camping.component.html',
  styleUrls: ['./activity-camping.component.css']
})
export class ActivityCampingComponent implements OnInit {


  @ViewChild("fileUpload", {static: false}) fileUpload!: ElementRef ;files  = [];  
  fileName:string | undefined;
  
  ActivDetail!: FormGroup;
  Activityss?: ActivityModel[];
  Activityobj: ActivityModel = new ActivityModel();
  startTime: string | undefined;



  constructor(private FormBuilder : FormBuilder,private api:ActivityService, private router: Router) {}

 
  activitydata:ActivityModel[] = [];
  listInitial:ActivityModel[] = [];

  ngOnInit(): void {
     this.getAllActivity();


     this.ActivDetail = this.FormBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      capacity: ['', Validators.required],
      disponibility: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      favourite: ['', Validators.required]
    });
   
  }
  

  
  
  getAllActivity(){
    this.api.getAllActivity().subscribe((res: ActivityModel[]) => {this.activitydata = res,this.listInitial=this.activitydata;
      console.log(this.activitydata);
    });
  
  }
  
addActivity2(){
  console.log(this.ActivDetail);
  this.Activityobj.id = this.ActivDetail.value.id;
  this.Activityobj.name = this.ActivDetail.value.name;
  this.Activityobj.description = this.ActivDetail.value.description;
  this.Activityobj.capacity = this.ActivDetail.value.capacity;
  this.Activityobj.disponibility = this.ActivDetail.value.disponibility;
  this.Activityobj.startTime = this.ActivDetail.value.startTime;
  this.Activityobj.endTime = this.ActivDetail.value.endTime;
  this.Activityobj.favourite = this.ActivDetail.value.favourite;

this.api.addActivity22(this.Activityobj).subscribe(res=>{
  console.log(res);
  window.location.reload();
},err=>{
  console.log(err)
  window.location.reload();

});
}


addAdmission(){

}




emp :ActivityModel = new ActivityModel()

editActivity(a : ActivityModel) {
  this.emp = a;
  console.log(this.emp)
  this.ActivDetail.controls['id'].setValue(this.emp.id);
  this.ActivDetail.controls['name'].setValue(this.emp.name);
  this.ActivDetail.controls['description'].setValue(this.emp.description);
  this.ActivDetail.controls['capacity'].setValue(this.emp.capacity);
  this.ActivDetail.controls['disponibility'].setValue(this.emp.disponibility);
  this.ActivDetail.controls['startTime'].setValue(this.emp.startTime);
  this.ActivDetail.controls['endTime'].setValue(this.emp.endTime);
  this.ActivDetail.controls['favourite'].setValue(this.emp.favourite);


}

// updateActivityy() {

//   this.Activityobj.id = this.ActivDetail.value.id;
//   this.Activityobj.name = this.ActivDetail.value.name;
//   this.Activityobj.description = this.ActivDetail.value.description;
//   this.Activityobj.capacity = this.ActivDetail.value.capacity;
//   this.Activityobj.disponibility = this.ActivDetail.value.disponibility;
//   this.Activityobj.startTime = this.ActivDetail.value.startTime;
//   this.Activityobj.endTime = this.ActivDetail.value.endTime;
//   this.Activityobj.favourite = this.ActivDetail.value.favourite;


//   this.api.updateActivity(this.Activityobj).subscribe(res=>{
//     console.log(res);
//     this.getAllActivity();
//   },err=>{
//     console.log(err);
//   })

// }


updateActivityy() {
  this.api.updateActivity(this.emp).subscribe(res => this.router.navigate(['Activity']));
}
 

deleteActivityById(idActivity:any){
  this.api.deleteActivity33(idActivity).subscribe(data=>
  this.api.getAllActivity().subscribe(data=>
    this.activitydata=data
    
    ))
    window.location.reload();
}
Pdf(){
  this.api.PDF1997().subscribe(res => this.router.navigate(['Activity']));
  }




searchByDate(data: ActivityModel[]): ActivityModel[]{
  let x : Array <ActivityModel> = new Array();
  for(let i of data){
    if((this.startTime === i.startTime) || (i.startTime.indexOf(this.startTime)!=-1))
    {
      x.push(i);
    }
  }
  return x;
}

Search(){
  if(this.startTime =="")
  {
    this.api.getAllActivity().subscribe(data => this.activitydata=data);
  }
  else if(this.startTime != "")
  {
    this.api.getAllActivity().subscribe(data => this.activitydata=this.searchByDate(data));
  }

}













onCllick() {  
  const fileUpload = this.fileUpload.nativeElement;fileUpload.onchange = () => {  
  for (let index = 0; index < fileUpload.files.length; index++)  
  {  
   const file = fileUpload.files[index];  
    this.fileName = file.name +" is uploaded"
   
  }  
    this.uploadFiles();  
  };  
  fileUpload.click();  
}
private uploadFiles() {  
this.fileUpload.nativeElement.value = '';  
this.files.forEach(file => {  
  this.uploadFile(file);  
});  
}
uploadFile(file: any) {  
const formData = new FormData();  
formData.append('file', file.data);  
file.inProgress = true;  
this.api.upload(formData).subscribe(
  rsp => {
    console.log(rsp.type)


   
},
  error => {
    console.log(error)
  });

}

like : ActivityLiked = new ActivityLiked();
addLikeToPost(id:any){
  this.like.isLiked = "true"
  console.log(id)
  this.api.addPostLike(id ,this.like ).subscribe()
  this.getAllActivity();

}

imageFile!: File;
onImageSelect(event: any) {
  this.imageFile = event.target.files[0];
}

onImageUpload(id: any) {
  if (!this.imageFile) {
    console.error('Aucune image sélectionnée');
    return;
  }
  this.api.uploadImage(id, this.imageFile).subscribe(
  );
  window.location.reload()

}
}