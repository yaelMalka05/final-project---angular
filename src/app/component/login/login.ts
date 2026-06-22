import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitorsService } from '../../service/visitors-service';
import { Visitors } from '../../class/Visitors';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{

  constructor( public r:Router, public ac:ActivatedRoute , public s:VisitorsService){}
  ngOnInit(): void {
    
    
    this.newV=new FormGroup({
      id:new FormControl(null,[Validators.required,Validators.pattern("[0-9]{1,}"),Validators.maxLength(9)]),
      email:new FormControl(null,[Validators.required]),
    })
  }

  // name(){
  //   this.ac.params.subscribe(p=>{this.n=p['name']})
  // }

  // n:string=""

  newV: FormGroup = new FormGroup({})
  v:Visitors = new Visitors()

  // data(id:string , email:string){
  //   this.v.emailVisitors = email
  //   this.v.idVisitors = id
    
  // }

  get getId(){
    return this.newV.controls['id']
  }
  get getEmail(){
    return this.newV.controls['email']
  }

  ok() {
    // alert("you entered")
    this.r.navigate(["./personal-area"])
    this.s.sighIn = true
    this.newV.value
    
    
  }


  back(){
     this.s.sighIn = false
     this.r.navigate(["./login"])
  }
 

  // send(id:string , email:string){
  //   // לבדוק אם קיים במערכת
  //   if(this.s.GetVisitorsById(id,email))
  //   this.r.navigate(["./personal-area"])
  //   if(!this.s.GetVisitorsById(id,email))
  //     this.r.navigate(["./order-tickets"])
  // }
  send(){
  //   this.s.sighIn = true
  //   this.newV.value
  //   this.s.GetVisitorsById(this.s.v.idVisitors!,this.s.v.emailVisitors!).subscribe(
  //   data => { this.s.v=data; this.r.navigate(['./personal-area'])},
  //   error => {this.r.navigate(['./order-tickets'])}
  // )
   this.s.GetVisitorsByIdAndMail(this.getId.value!, this.getEmail.value!).subscribe(
  // this.s.GetVisitorsByIdAndMail(this.s.v.idVisitors || '', this.s.v.emailVisitors || '').subscribe(
    data => {
    // next: (data: any) => {
      // if (!data || (Array.isArray(data) && data.length === 0) || !data.idVisitors) {
      //   this.r.navigate(['./order-tickets']);
      //   return;
      // }
      // this.newV.value
      this.s.v = data;
      this.s.sighIn = true;
      this.r.navigate(['./personal-area']);
    },
    // error:
    error => {
      // debugger
      // this.s.sighIn = true;
      this.r.navigate(['./order-tickets']);
    }
  );
}

  //end



































}


