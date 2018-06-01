import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';


import { GuardadosPage } from '../guardados/guardados';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1:any = HomePage;
  tab2:any = GuardadosPage;


  constructor( private navCtrl:NavController ) {}

}
