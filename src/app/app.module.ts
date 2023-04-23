import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { HeaderUserComponent } from './frontOffice/header-user/header-user.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { ActivityCampingComponent } from './backOffice/activity-camping/activity-camping.component';
import { AddActivityComponent } from './Activity/add-activity/add-activity.component';
import { DetailActivityComponent } from './Activity/detail-activity/detail-activity.component';
import { ActivityFrontComponent } from './Activity/activity-front/activity-front.component';
import { ActivityComponent } from './Activity/activity/activity.component';


import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatCardModule } from '@angular/material/card'
import { MatSelectModule } from '@angular/material/select'
import { PopupComponent } from './Activity/popup/popup.component';
import { MaterialModule } from 'src/MaterialModule';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AllTemplateAdminComponent,
    BodyAdminComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    SideAdminComponent,
    HeaderUserComponent,
    FooterUserComponent,
    BodyUserComponent,
    AllTemplateUserComponent,
    ActivityCampingComponent,
    AddActivityComponent,
    DetailActivityComponent,
    ActivityFrontComponent,
    ActivityComponent,
    PopupComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatSlideToggleModule








    







    

    


    
    



    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
