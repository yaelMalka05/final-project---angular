import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Visitors } from '../class/Visitors';
import { Tickets } from '../class/Tickets';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class VisitorsService {
  
  
  constructor(public http:HttpClient , public r:Router){}

  // listV: Array<Visitors> = new Array<Visitors>()
  // ngOnInit(): void {
  //   this.listV.push(new Visitors("110000111", "poo","poo@gmail.com" ))
  //   this.listV.push(new Visitors("220000222", "aro","aro@gmail.com" ))
  //   this.listV.push(new Visitors("330000333", "dov","dov@gmail.com" ))
  // }
v:Visitors = new Visitors()
sighIn:boolean = false

    url:string="https://localhost:7293/api/Visitors/"

    GetVisitorsByIdAndMail(idVisitors:string, emailVisitors:string):Observable<Visitors>{
      // debugger
      return this.http.get<Visitors>(`${this.url}GetVisitorsByIdAndMail/${idVisitors}/${emailVisitors}`)
  }

  GetVisitorsById(id:string):Observable<Visitors>{
      return this.http.get<Visitors>(`${this.url}GetVisitorsById/${id}`)
  }

  AddVisitors(visitor:Visitors):Observable<boolean>{
      return this.http.put<boolean>(`${this.url}AddVisitors`,visitor)
  }

  back(){
     this.sighIn = false
     this.r.navigate(["./login"])
  }
  

  // sigh(){
  //   // if()
  //   this.sighIn = true
  // }
  // name:string=""
  // nameAllOver(n:string){
  //   this.name = n
  // }

  // n=this.GetVisitorsById
  // nameVisitors = this.n.nameVisitors


  

}
