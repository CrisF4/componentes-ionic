import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: false,
})
export class SegmentPage implements OnInit {

  superHeroes!: Observable<any>;
  publisher: string= '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event: any) {
    //console.log(event.detail.value);
    this.publisher = event.detail.value;
  }

}
