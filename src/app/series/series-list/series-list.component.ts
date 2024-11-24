import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from '../Serie';
import { SerieService } from '../series.service';

@Component({
    selector: 'app-series',
    standalone: true, 
    imports: [CommonModule],
    templateUrl: './series-list.component.html',
    styleUrls: ['./series-list.component.css'],
})
export class SeriesListComponent implements OnInit {
    series: Array<Serie> = [];
    averageSeasons: number = 0;

    constructor(private serieService: SerieService) { }

    getSeries() {
        this.serieService.getSeries().subscribe(series => {
            this.series = series;
            this.calculateAverageSeasons();
        });
    }

    calculateAverageSeasons() {
        if (this.series.length > 0) {
            const totalSeasons = this.series.reduce((total, serie) => total + serie.seasons, 0);
            this.averageSeasons = totalSeasons / this.series.length;
        } else {
            this.averageSeasons = 0;
        }
    }

    ngOnInit() {
        this.getSeries();
    }
}
