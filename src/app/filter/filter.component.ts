import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() allProducts: number =0

  @Input() availableProducts: number = 0

  @Input() unavailableProducts: number = 0

  selectedRadioButtonValue: string = "All"


  @Output()
  filterRadioButtonSelectionchanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionchanged.emit(this.selectedRadioButtonValue)
  }
}
