import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export  class RequestBaseService {


  constructor(protected http: HttpClient) { }



  get getHeaders(): HttpHeaders{
   return new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'MyClientCert': '',        // This is empty
      'MyToken': ''              // This is empty
    }
     );
   }
}
