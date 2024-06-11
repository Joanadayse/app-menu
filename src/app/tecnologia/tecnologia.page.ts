import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.page.html',
  styleUrls: ['./tecnologia.page.scss'],
})
export class TecnologiaPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  paginaHome() {
    this.navCtrl.navigateForward('home');
  }
}
