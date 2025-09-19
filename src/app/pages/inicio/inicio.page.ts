import { Component, OnInit } from '@angular/core';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {

  public componentes: Componente[] = [
    {icon: 'american-football-outline', name: 'Action Sheet', redirectTo: '/action-sheet' },
    { icon: 'alert-circle-outline', name: 'Alert', redirectTo: '/alert' },
    { icon: 'beaker-outline', name: 'Avatar', redirectTo: '/avatar' },
    { icon: 'radio-button-off-outline', name: 'Button', redirectTo: '/button' },
    { icon: 'card-outline', name: 'Card', redirectTo: '/card' },
    { icon: 'checkmark-circle-outline', name: 'Checkbox', redirectTo: '/checkbox' },
    { icon: 'calendar-number-outline', name: 'Date Time', redirectTo: '/date-time' },
    { icon: 'car-outline', name: 'Fab', redirectTo: '/fab'},
    { icon: 'grid-outline', name: 'Grid', redirectTo: '/grid' },
    { icon: 'infinite-outline', name: 'Infinite Scroll', redirectTo: '/infinite' },
    { icon: 'arrow-up-circle-outline', name: 'Input', redirectTo: '/input' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
