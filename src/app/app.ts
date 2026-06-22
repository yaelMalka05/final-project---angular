import { Component, signal } from '@angular/core';
import { VisitorsService } from './service/visitors-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my_project');

  constructor(public s:VisitorsService){}


  // log = this.s.sighIn
  // name:string=""
  // n(){
  //   this.name = this.s.name
  // }
  
// sighIn:boolean = false


}
