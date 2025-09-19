import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  standalone: false,
})
export class AvatarPage implements OnInit {
  // Reproducir audio al entrar en la vista
  // audioGohan = new Audio('/assets/gohan-adulto1.mp3');
  // ionViewDidEnter(){
  //   this.audioGohan.currentTime = 0;
  //   this.audioGohan.play();
  // }
  // /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\

  constructor() { }

  ngOnInit() {
  }
}
