import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false,
})
export class SearchPage implements OnInit {
  albumes: any[] = [];

  textoBuscar: string = '';

  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getAlbumes().subscribe((albumes: any) => {
      this.albumes = albumes;
    });

  }

  onSearchChange(event: any) {
    this.textoBuscar = event.target.value;
  }


}
