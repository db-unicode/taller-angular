import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component';



@NgModule({
  imports: [
    CommonModule,
    SeriesListComponent
  ],
  exports: [
    SeriesListComponent
  ]
})
export class SeriesModule { }
