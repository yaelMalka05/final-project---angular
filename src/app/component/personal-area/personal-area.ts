import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitorsService } from '../../service/visitors-service';
import { TicketsService } from '../../service/tickets-service';

@Component({
  selector: 'app-personal-area',
  standalone: false,
  templateUrl: './personal-area.html',
  styleUrl: './personal-area.css',
})
export class PersonalArea {
  constructor(public ar:ActivatedRoute, public sv:VisitorsService , public r:Router , public st:TicketsService){}



  




  back(){
    this.r.navigate(["./login"])
    this.sv.sighIn=false;
  }






}
