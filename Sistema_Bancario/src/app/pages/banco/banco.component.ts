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

  selectedUser: Usuarios = {
    nome: '',
    sobrenome:'',
    saldoBancario: 0,
  };
  
  editMode = false;

  usuarios2: Usuarios[] = []

  salvarUsuario(){
    this.usuarios2.push({ ...this.usuario });
      this.usuario = {
      nome: '',
      sobrenome: '',
      saldoBancario: 0,
    };
  }

  editarUsuario(usuario: Usuarios) {
    this.selectedUser = { ...usuario };
    this.editMode = true;
  }


  updateUser() {
    const index = this.usuarios2.findIndex(u => u.nome === this.selectedUser.nome);
    this.usuarios2[index] = this.selectedUser;
    this.selectedUser = {
      nome: '',
      sobrenome: '',
      saldoBancario: 0,      
    };
    this.editMode = false;
  }

  deletarUsuario(usuario: Usuarios) {
    const index = this.usuarios2.findIndex(u => u.nome === usuario.nome);
    this.usuarios2.splice(index, 1);
  }
  
}


