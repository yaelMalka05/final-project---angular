import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tickets } from '../class/Tickets';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {

 url:string="https://localhost:7293/api/Tickets/"

  constructor(public http:HttpClient){}

  t:Tickets = new Tickets()

  GetTicketsByIdVisitors(id:string):Observable<Array<Tickets>>{
    return this.http.get<Array<Tickets>>(`${this.url}GetTicketsByIdVisitors`)
  }

  AddTickets(ticket:Tickets):Observable<Tickets>{
    return this.http.put<Tickets>(`${this.url}AddTickets`,ticket)
  }

  UpdateTickets(code:number ,ticket:Tickets):Observable<Tickets>{
      return this.http.post<Tickets>(`${this.url}UpdateTickets/${code}`, ticket)
  }

  DeleteTicketsToVisitors(code:number):Observable <boolean>{
     return this.http.delete<boolean>(`${this.url}DeleteTickets/${code}`)
  }
  
   public tickets: Tickets[] = [];
   addTicket(t: Tickets) {
    const copy = Object.assign(new Tickets(), t);
    this.tickets.push(copy);
  }
   getTickets(): Tickets[] {
    return this.tickets;
  }
  
}
