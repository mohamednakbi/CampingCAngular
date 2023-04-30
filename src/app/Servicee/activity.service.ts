import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest}  from '@angular/common/http';
import { Observable } from 'rxjs';

import {RequestBaseService} from './request-base.service';
import { ActivityModel, Evaluation } from '../Models/activity';
import { ActivityLiked } from '../Models/post-like';

@Injectable({
  providedIn: 'root'
})
export class ActivityService  extends RequestBaseService { 
  activitydata:ActivityModel[] = [];


    //CustomersUrl:string='http://localhost:8090/api/v1/api/activitys';

  private baseUrl = `http://localhost:8090/api/v1`;

  AddActURL : string;
  updateAcTUrl : string;
  deleteAcTUrl : string;
  PDFUrl  : string;
  baseUrlMosTEVA! : string;
  constructor(private httpClient: HttpClient,) {
    super(httpClient);
    this.AddActURL = 'http://localhost:8090/api/v1/AddActivityToUserAEva/1';
    this.PDFUrl = 'http://localhost:8090/api/v1/api/activitys/exportpdf';
    this.baseUrlMosTEVA='http://localhost:8090/api/v1/mostEvaluation';
    this.updateAcTUrl = 'http://localhost:8090/api/v1/api/activitys/modify-Activity';
    this.deleteAcTUrl ='http://localhost:8090/api/v1/api/activitys/remove-Activ';
  }
  SERVER_URL: string = "http://localhost:8090/api/v1/file-system/image";  



  // public upload(formData:any) {
  //   console.log("upload service function is called")
  //   console.log(formData)
  //   return this.httpClient.post<FormData>(this.SERVER_URL, formData, {  
  //       reportProgress: true,  
  //       observe: 'events'  
  //     });  
  // }

    

  getAllActivity(): Observable<ActivityModel []>{
    return this.httpClient.get<ActivityModel []>(this.baseUrl+"/retrieve-all-Activty",{headers: this.getHeaders});
  }
 


addActivity22(ACT: ActivityModel): Observable<ActivityModel>{
return this.httpClient.post<ActivityModel>(this.AddActURL,ACT)
}




updateActivity(ACT: ActivityModel) : Observable<ActivityModel>{
  return this.http.put<ActivityModel>('http://localhost:8090/api/v1/modify-Activity' + '/1', ACT);
}

PDF1997(){
  return this.http.get<ActivityModel>(this.PDFUrl);
}



deleteActivity33(idActivity : any){
  return this.http.delete(this.baseUrl+`/remove-Activ/${idActivity}`);
}





// image(file: File, id: string): Observable<HttpEvent<any>> {
//   const formData: FormData = new FormData();
//   formData.append('Image', file);
//   const req = new HttpRequest('POST', '' + id , formData, {
//     reportProgress: true,
//     responseType: 'json'
//   });
//   return this.http.request(req);
// }



// postFile(courseId: string, file: File) {
//   const formParams = new FormData();
//   // @ts-ignore
//   formParams.append('image', file);
//   const options: { headers: HttpHeaders } = {
//     headers: new HttpHeaders({
//       'Content-Type': 'multipart/form-data'
//     })
//   };
//   return this.http.post('' + courseId, formParams );
// }



addPostLike(id: string, postLike: ActivityLiked) {
  return this.http.post<ActivityLiked>('http://localhost:8090/api/v1/add-Like-post/' + id + '/1', postLike, {headers: this.getHeaders});
}


addeval(id: string, evala: string) {
  return this.http.post<ActivityLiked>('http://localhost:8090/api/v1/AddEvaToActivityyy/' + id +"/"+evala, {headers: this.getHeaders});
}





addPostDisLike(id: string, postLike: ActivityLiked) {
  return this.http.post<ActivityLiked>('http://localhost:8090/api/v1/Delete-Like/' + id + '/1', postLike, {headers: this.getHeaders});
}


/**temchi */
uploadImage(id: number, image: File): Observable<any> {
  // Create a FormData object to send the image as multipart/form-data
  const formData = new FormData();
  formData.append('image', image, image.name);

  // Send a POST request to the backend API to upload the image
  return this.http.post<any>(`http://localhost:8090/api/v1/file-system/image/${id}`, formData);
}



/*hedhi memchetch */
getMostEvaluation(): Observable<string> {
  return this.http.get<string>(`${this.baseUrlMosTEVA}`);
}




Getchartinfo(){
  return this.http.get("http://localhost:8090/api/v1/StatEvaluation");
}

}