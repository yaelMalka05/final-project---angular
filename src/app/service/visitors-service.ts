import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visitors } from '../class/Visitors';
import { Tickets } from '../class/Tickets';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VisitorsService {
  
  constructor(public http:HttpClient){}

    url:string="https://localhost:7293/api/Visitors/"


  GetVisitorsById(id:string, email:string):Observable<Tickets>{
      return this.http.get<Tickets>(`${this.url}GetVisitorsById/${id}/${email}`)
  }

  AddVisitors(visitor:Visitors):Observable<boolean>{
      return this.http.put<boolean>(`${this.url}AddVisitors`,visitor)
  }

}

