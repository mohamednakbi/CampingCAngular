import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { ActivityCampingComponent } from './backOffice/activity-camping/activity-camping.component';
import { AddActivityComponent } from './Activity/add-activity/add-activity.component';
import { ActivityComponent } from './Activity/activity/activity.component';
import { DetailActivityComponent } from './Activity/detail-activity/detail-activity.component';
import { ActivityFrontComponent } from './Activity/activity-front/activity-front.component';
import { PopupComponent } from './Activity/popup/popup.component';

const routes: Routes =  [
  {
    path:'admin',
    component:AllTemplateAdminComponent,
    children:[
      {
        path:'admin',
        component:BodyAdminComponent,
       
      }
    ]

  },
  {
    path:'',
    component: AllTemplateUserComponent,
    children:[
      {
        path:'user',
        component: BodyUserComponent
      }
    ]
  },
  { path:'Activity',component:ActivityCampingComponent},


{path: 'addActivity', component: AddActivityComponent, },
{path: 'Activityy', component: ActivityComponent, },

{path: 'detailActivity', component: DetailActivityComponent},
{path: 'ActivityUser', component: ActivityFrontComponent},
{path: 'Graph', component: PopupComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
