import { Component } from '@angular/core';
import { EmpresaPage } from '../empresa/empresa.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  component = HomePage;
  constructor(public navCtrl: NavController) {}

  paginaHome() {
    this.navCtrl.navigateForward('home');
  }

  paginaTecnologia() {
    this.navCtrl.navigateForward('tecnologia');
  }

  
  paginaEmpresa() {
    this.navCtrl.navigateForward('empresa');
  }
}
