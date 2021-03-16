import { Component } from '@angular/core';
import {ToastController} from '@ionic/angular'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  angka:Number
  jawaban:Number
  pesan:string
  ngOnInit(){
    this.jawaban=Math.floor((Math.random()*10)+1)
    console.log(this.jawaban)
  }
  constructor(public toastControllor:ToastController) {}

  tebak(){
    if(this.angka==this.jawaban){
      this.pesan='jawaban anda benar'
    }else{
      this.pesan='jawaban anda salah'
    }
    this.presentToast()
  }

    async presentToast(){
      const toast = await this.toastControllor.create({
        message:this.pesan,
        duration:1000
      });
      toast.present();
    }

}
