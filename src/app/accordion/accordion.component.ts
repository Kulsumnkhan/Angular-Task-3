import { Component } from '@angular/core';
import { DataHandlerService } from '../shared/service/data-handler.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})

export class AccordionComponent {
  accordionData : any[] = []
  constructor( private dataServe : DataHandlerService ){
    this.accordionData = this.dataServe.accordion;
    console.log(this.accordionData);
  }
}
