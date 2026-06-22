import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../../service/animals-service';
import { Animals } from '../../class/Animals';
import { FeedingTimes } from '../../class/FeedingTimes';
import { forkJoin } from 'rxjs';
import { FeedingTimesService } from '../../service/feeding-times-service';

@Component({
  selector: 'app-our-animals',
  standalone: false,
  templateUrl: './our-animals.html',
  styleUrl: './our-animals.css',
})
export class OurAnimals implements OnInit {

  constructor(public s:AnimalsService , public sf:FeedingTimesService){}

 a:Array<Animals> = new Array<Animals>();

 f:Array<FeedingTimes> = new Array<FeedingTimes>();

ngOnInit(): void {
  this.loadData();
  this.send();
}

loadData() {
  this.send();
}

//  a = this.s.GetAllAnimals();
modalOpen = false;
  selectedImage: string | null = null;


send(){
  this.s.GetAllAnimals().subscribe(
    data => {
      this.a = data;
      this.sendF();
      },
      err => console.error(err)
      )
}

sendF(){
  // this.sf.GetFeedingTimeByCodeAnimals(this.a.codeAnimals).subscribe(
  //   dataF => {
  //     this.f = dataF;
  //   }
  // )
  const codes = this.a
    .map(an => an.codeAnimals)
    .filter((c): c is number => c !== undefined && c !== null);

  if (codes.length === 0) {
    this.f = [];
    return;
  }

    const requests = codes.map(code => this.sf.GetFeedingTimeByCodeAnimals(code));
    forkJoin(requests).subscribe({
      next: resultsArray => {
        // resultsArray הוא מערך של מערכים — מאחדים לבלוק אחד
        this.f = resultsArray.flat();
      },
      error: err => console.error(err)
    });
}


openModalFromEvent(ev: Event){
    const el = ev.target as HTMLImageElement;
    const src = el.getAttribute('src') || el.src;
    if(src){
      this.selectedImage = src;
      this.modalOpen = true;
    }
  }

  // openModalSrc(src:string){
  //   this.selectedImage = src;
  //   this.modalOpen = true;
  // }

  closeModal(){
    this.modalOpen = false;
    this.selectedImage = null;
  }


getFoodsForAnimal(codeAnimal: number | undefined) {
  return this.f.filter(x => x.codeAnimals === codeAnimal);
}

openModalSrc(src: string | undefined) {
  if (!src) return; // אם אין src, סתם מחזיר
  this.selectedImage = src;
  this.modalOpen = true;
}

}
