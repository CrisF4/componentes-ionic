import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/Componente';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  componentes!: Observable<Componente[]>;

  constructor(
    private platform: Platform,
    private dataService: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.componentes = this.dataService.getMenuOpts();
    });
  }

}
