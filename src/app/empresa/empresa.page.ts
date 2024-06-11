import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {
  constructor(public navCtrl:NavController) {}

  ngOnInit() {}
  paginaHome() {
    this.navCtrl.navigateForward('home');
  }
}
