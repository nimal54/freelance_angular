import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


interface stateSelector {
  value: string;
  viewValue: string;
}
interface operatorSelector {
  value: string;
  viewValue: string;
}
interface cusIdSelector {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-utility-card',
  templateUrl: './utility-card.component.html',
  styleUrls: ['./utility-card.component.scss']
})
export class UtilityCardComponent {

  form: FormGroup;
  stateSelectorList: stateSelector[] = [
    { value: '0', viewValue: 'Karnadaka' },
    { value: '1', viewValue: 'Kerala' },
    { value: '2', viewValue: 'Maharashra' }
  ];
  operatorSelectorList: operatorSelector[] = [
    { value: '3', viewValue: 'Operator1' },
    { value: '4', viewValue: 'Operator2' },
    { value: '5', viewValue: 'Operator3' }
  ];
  cusIdSelectorList: cusIdSelector[] = [
    { value: '3', viewValue: 'Cus!' },
    { value: '4', viewValue: 'Cus2' },
    { value: '5', viewValue: 'Cus3' }
  ];


  stateSelectorController = new FormControl(this.stateSelectorList[2].value);
  operatorSelectorController = new FormControl(this.operatorSelectorList[2].value);
  cusIdSelectorController = new FormControl(this.operatorSelectorList[1].value);


  constructor() {
    this.form = new FormGroup({
      state: this.stateSelectorController,
      operator: this.operatorSelectorController,
      cusId: this.cusIdSelectorController
    });
  }

  ngOnInit(): void {
  }
}
