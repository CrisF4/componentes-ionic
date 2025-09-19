import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: false,
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  // Alerta sencilla
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false, // No se puede cerrar tocando fuera de la alerta
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK'] // Es plural, es decir, puede tener varios botones
    });
    await alert.present();
  }

  // Alerta con varios botones y manejadores
  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Ok!',
          handler: () => {
            console.log('Ok clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo'
        }
      ]
    });
    await alert.present();
  }

  // Alerta con campos de entrada (formulario)
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secundary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (data:any) => {
          console.log('Confirm Ok', data);
        }
      }],
      inputs: [
        // Campo de texto nombre
        {
          name: 'name1',
          placeholder: 'Name',
        },
        // Campo de texto apodo
        {
          name: 'name2',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        // Campo de texto edad (número con mínimo y máximo)
        {
          name: 'name3',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        // Campo de texto fecha (mínimo y máximo)
        {
          name: 'name4',
          type: 'date',
          min: '2007-01-01',
          max: '2025-12-31',
          placeholder: 'Date of Birth',
        },
        // Área de texto libre
        {
          name: 'name5',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

  // Alerta con selección de opciones (radio)
  async presentAlertRadio() {
    const alert = await this.alertCtrl.create({
      header: 'Select your favorite color',
      buttons: ['OK'],
      inputs: [
        {
          label: 'Red',
          type: 'radio',
          value: 'red',
        },
        {
          label: 'Blue',
          type: 'radio',
          value: 'blue',
        },
        {
          label: 'Green',
          type: 'radio',
          value: 'green',
        },
      ],
    });

    await alert.present();
  }

  //Alerta con botones personalizados y estilos CSS
  async presentAlertCustom() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }
}
