import { Component } from '@angular/core';
import { Usuarios } from '../Interface/interface';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.scss']
})
export class BancoComponent {

  usuario: Usuarios = {
    nome:'',
    sobrenome: '',
    saldoBancario: 0,
  }

  usuarios2: Usuarios[] = []

  salvarUsuario(){
    this.usuarios2.push({ ...this.usuario });
      this.usuario = {
      nome: '',
      sobrenome: '',
      saldoBancario: 0,
    };

    
  }
}


