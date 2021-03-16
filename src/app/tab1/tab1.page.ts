import { Component } from '@angular/core';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public fotoService:FotoService) {}

  TambahFoto(){
    this.fotoService.tambahFoto()
  }

  async ngOnInit(){
    await this.fotoService.loadFoto()
  }

}
