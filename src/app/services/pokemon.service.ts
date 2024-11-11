// src/app/services/pokemon.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonData(pokemonName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${pokemonName}`);
  }
}
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

getPokemonData(pokemonName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${pokemonName}`).pipe(
        catchError(error => {
            console.error('Error fetching Pokémon data', error);
            return of(null); // Devuelve un valor por defecto o null en caso de error
        })
    );
}