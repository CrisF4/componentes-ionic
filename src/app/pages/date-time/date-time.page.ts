import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: false
})
export class DateTimePage implements OnInit {

  ngOnInit() {}

  constructor() { }

  fechaNaci: Date = new Date();
  fechaGuardada: string = new Date().toISOString();

  cambioFecha(event: any) {
    console.log(event);
    console.log(new Date(event.detail.value));
  }

  fechaConfirmada(event: any) {
    console.log('Fecha confirmada:', event.detail.value);
  }


}
