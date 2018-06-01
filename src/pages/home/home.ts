import { Component } from '@angular/core';

//Componentes
import { ToastController } from 'ionic-angular';

//Plugin
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController) {}

  scan (){

    console.log("Realizando Scan...");

    //promesa que controla q lo haga todo bien
    this.barcodeScanner.scan().then(barcodeData => {
        //Success!! Barcode data is here
        console.log('Data del scan:', barcodeData);
        }).catch(err => {
            //An error ocurred
            console.log('Error', err);
            this.mostrar_error(" Error: "+ err);
            });
  }

  mostrar_error( mensaje:string ){

      let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500
    });

    toast.present();
  }

}
