import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro-pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FiltroPipe
  ],
  exports: [
    FiltroPipe
  ]
})
export class PipesModule { }
