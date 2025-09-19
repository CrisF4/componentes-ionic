import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: false,
})
export class InputPage implements OnInit {

  nombre: string = 'Cristian';
  apellidos: string = 'Fuentes Gallardo';
  usuario = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(Formulario: NgForm) {
    console.log('submit');
    console.log(this.usuario);
    console.log(Formulario);
  }

  // customCounterFormatter(inputLength: number, maxLength: number) {
  //   return `${maxLength - inputLength} characters remaining`;
  // }

  // inputModel = '';

  // @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  // onInput(ev: any) {
  //   const value = ev.target!.value;

  //   // Removes non alphanumeric characters
  //   const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');

  //   /**
  //    * Update both the state variable and
  //    * the component to keep them in sync.
  //    */
  //   this.ionInputEl.value = this.inputModel = filteredValue;
  // }
}
