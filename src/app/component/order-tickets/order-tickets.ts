import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tickets } from '../../class/Tickets';
import { Visitors } from '../../class/Visitors';
import { TicketsService } from '../../service/tickets-service';
import { VisitorsService } from '../../service/visitors-service';

@Component({
  selector: 'app-order-tickets',
  standalone: false,
  templateUrl: './order-tickets.html',
  styleUrl: './order-tickets.css',
})
export class OrderTickets implements OnInit {

  constructor(public r: Router, public ac: ActivatedRoute, public st:TicketsService , public sv:VisitorsService) { }

  newT!: FormGroup;
  ngOnInit(): void {
    this.newT = new FormGroup({
      id: new FormControl(this.sv.v.idVisitors, [Validators.required, Validators.pattern("[0-9]{1,}"), Validators.maxLength(9)]),
      email: new FormControl(this.sv.v.emailVisitors, [Validators.required]),
      name: new FormControl(this.sv.v.nameVisitors, [Validators.required]),
      visitDate: new FormControl(null),
      numAdult: new FormControl(null, [Validators.min(0)]),
      numChild: new FormControl(null, [Validators.min(0)]),
    })
     
  }

  // newT: FormGroup = new FormGroup({})
  t: Tickets = new Tickets()
  v: Visitors = new Visitors()

  get getId() {
    return this.newT.controls['id']
  }

get getEmail(){
    return this.newT.controls['email']
  }
  get getVisitDate() {
    return this.newT.controls['visitDate']
  }
get getName(){
    return this.newT.controls['name']
  }

  get getNumAdult() {
    return this.newT.controls['numAdult']
  }
  get getNumChild() {
    return this.newT.controls['numChild']
  }
  getPriceTickets() {
    return this.final
  }

  // tickt: Tickets = new Tickets(this.getId.value!, this.getVisitDate.value! , this.getNumAdult.value! , this.getNumChild.value! )


  send() {
    // this.newT.value
    //
    // this.st.AddTickets(this.tickt).subscribe(
    //   data => {
    //     this.sv.v = data;
          //  this.st.t = data;
        this.calcPrice()
        //
        this.t.idVisitors = this.getId.value!
        this.v.idVisitors = this.getId.value!
        this.v.emailVisitors = this.getEmail.value!
        this.v.nameVisitors = this.getName.value!
        this.t.visitDate = this.getVisitDate.value!
        this.t.numAdult = this.getNumAdult.value!
        this.t.numChild = this.getNumChild.value!
        this.t.priceTickets = Number(this.final || 0)
        // this.st.t = this.t
         this.sv.v = this.v
        this.st.addTicket(this.t);
        //
        this.sv.sighIn = true
        this.r.navigate(['./personal-area']);
    //   }
    // );
    //
  }



  final: Number = 0
  calcPrice() {
    this.final = ((this.getNumAdult.value * 80) + (this.getNumChild.value * 50));
    //this.t.priceTickets = this.final
    alert("the final price is: " + this.final)
  }






}
