// instalar: npm install chart.js


import { Component, EventEmitter, Input, Output, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, ChartData, ChartOptions, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements AfterViewInit {
  @Input() imageURL: string = "";
  @Input() attackInfo = { name: "", description: "" };
  @Input() stats = { hp: 0, speed: 0, attack: 0, defense: 0, specialAttack: 0, specialDefense: 0 };
  @Output() pokemonId: EventEmitter<number> = new EventEmitter();

  @ViewChild('radarChart') radarChart!: ElementRef; // Referencia al canvas del radar chart
  chart: Chart | undefined;

  showInfo: boolean = false;

  previousPokemon(): void {
    this.pokemonId.emit(-1);
  }

  nextPokemon(): void {
    this.pokemonId.emit(1);
  }

  toggleInfoPopup(): void {
    this.showInfo = !this.showInfo;
  }

  ngAfterViewInit(): void {
    this.createRadarChart();
  }

  createRadarChart(): void {
    const data: ChartData = {
      labels: ['HP', 'Speed', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense'],
      datasets: [
        {
          label: 'Estadísticas',
          data: [
            this.stats.hp,
            this.stats.speed,
            this.stats.attack,
            this.stats.defense,
            this.stats.specialAttack,
            this.stats.specialDefense
          ],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2
        }
      ]
    };

    const config: ChartConfiguration = {
      type: 'radar' as ChartType,
      data: data,
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    };

    this.chart = new Chart(this.radarChart.nativeElement, config);
  }
}
