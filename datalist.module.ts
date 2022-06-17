import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DatalistRoutingModule } from './datalist-routing.module';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DatalistRoutingModule,
    ReactiveFormsModule,
    DatePipe

  ]
})
export class DatalistModule { }
