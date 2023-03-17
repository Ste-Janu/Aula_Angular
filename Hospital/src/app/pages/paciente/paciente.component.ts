import { Component } from '@angular/core';
import { Dependente, Paciente } from '../interface/interface';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent {

  paciente: Paciente = {
    nome:'',
    sobrenome: '',
    idade: 0,
    dependentes: [],
  }

  dependente: Dependente = {
    nome: '',
    sobrenome: '',
    idade: 0,
  }

  pacientes: Paciente[] = [];

  salvarDependente(){
    this.paciente.dependentes.push(this.dependente)
    this.dependente = {nome: '', sobrenome: '', idade: 0,}
  }

  salvarPaciente(){
   this.pacientes.push({ ...this.paciente });
    this.paciente = {
      nome: '',
      sobrenome: '',
      idade: 0,
      dependentes: []
    };
  }
}
