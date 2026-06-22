import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedingTimes } from '../class/FeedingTimes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedingTimesService {

  constructor(public http:HttpClient){}

  GetFeedingTimeByCodeAnimals(code:number):Observable<Array<FeedingTimes>>{
    return this.http.get<Array<FeedingTimes>>(`https://localhost:7293/api/FeedingTimes/GetFeedingTimeByCodeAnimals`)

  }


  
}
