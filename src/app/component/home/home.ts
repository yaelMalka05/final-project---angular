import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor( public r:Router, public ac:ActivatedRoute){}

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  
  


}
