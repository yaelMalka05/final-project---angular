import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animals } from '../class/Animals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {

  constructor(public http:HttpClient){}

  GetAllAnimals():Observable<Array<Animals>>{
      return this.http.get<Array<Animals>>(`https://localhost:7293/api/Animals/GetAllAnimals`)
  }
  

  a:Animals = new Animals();

  

}
