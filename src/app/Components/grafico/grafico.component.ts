// Suggested code may be subject to a license. Learn more: ~LicenseLog:3867349846.
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonService } from 'services/pokemon.service.ts';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
})
export class GraficoComponent implements OnChanges {
  @Input() id: string = '#000';
  @Input() nombrePokemon: string = 'UNKNOWN';
  @Input() tipoPokemon: string = 'NORMAL';
  @Input() vidaPokemon: number = 0;
  @Input() ataquePokemon: number = 0;
  @Input() defensaPokemon: number = 0;
  pesoPokemon: number = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['nombrePokemon'] && !changes['nombrePokemon'].firstChange) {
    this.pokemonService.getPokemonData(this.nombrePokemon.toLowerCase()).subscribe(
      (data) => {
        this.pesoPokemon = data.weight / 10; // Peso en kg
      },
      (error) => {
        console.error('Error al obtener datos del Pokémon:', error);
      }
    );
    }
  }
}
