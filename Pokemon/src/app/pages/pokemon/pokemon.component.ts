import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../Service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent implements OnInit {
  resultado: string = '';

  constructor(private PService: PokemonService) {}
  
  ngOnInit(): void {
    this.PService.getData('ditto').subscribe((result) => {
      this.resultado = JSON.stringify(result);
    });
  }


}
