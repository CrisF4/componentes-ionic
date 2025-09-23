import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/Componente';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {
  componentes!: Observable<Componente[]>;

  constructor(private menu: MenuController, private dataService: DataService) {}

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu() {
    this.menu.open('first');
  }
}
