import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
  standalone: false,
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll | undefined;

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any) {
    console.log(event);
    setTimeout(() => {
      if (this.data.length > 50) {
        //event.target.disabled = true;
        this.infiniteScroll!.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      //event.target.complete();
      this.infiniteScroll?.complete();
    }, 1500);
  }
}
