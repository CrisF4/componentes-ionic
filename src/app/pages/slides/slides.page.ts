import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
  standalone: false,
})
export class SlidesPage implements OnInit {

  slides = [
    {
      img: '/assets/slides/photos.svg',
      titulo: 'Comparte Fotos',
      desc: 'Mira y comparte increíbles fotos de todo el mundo'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      titulo: 'Escucha Música',
      desc: 'Toda tu música favorita está aquí'
    },
    {
      img: '/assets/slides/calendar.svg',
      titulo: 'Nunca olvides nada',
      desc: 'El mejor calendario del mundo a tu disposición'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      titulo: 'Tu ubicación',
      desc: 'Encuentra lugares increíbles cerca de ti'
    },
    {
      img: '/assets/slides/user-6.svg',
      titulo: 'Tu Perfil',
      desc: 'Personaliza tu experiencia'
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClick() {
    this.navCtrl.navigateBack('/');
  }

}
