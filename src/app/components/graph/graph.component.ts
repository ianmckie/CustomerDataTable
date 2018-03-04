import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent{

  @Input() graphXUnits;

  graphYUnits = [0,200,400,600,800,1000];

  ngOnChanges(changes: SimpleChange) {
    for (let propName in changes) {
      if(propName === 'graphXUnits'){
        this.graphXUnits = changes[propName].currentValue;
      }
    }
  }
}