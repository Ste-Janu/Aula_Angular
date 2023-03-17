export interface Paciente {
    nome: string
    sobrenome: string;
    idade: number;
    dependentes: Dependente[];
  
  }
  
export interface Dependente {
    nome: string;
    sobrenome: string;
    idade: number;
}