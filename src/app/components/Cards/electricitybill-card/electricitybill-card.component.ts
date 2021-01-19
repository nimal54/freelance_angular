import { Component, OnInit } from '@angular/core';
import { CountryListsService } from "../../../services/country-lists.service";
import { CountryLists } from '../../../Modals/country';


interface stateSelector {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-electricitybill-card',
  templateUrl: './electricitybill-card.component.html',
  styleUrls: ['./electricitybill-card.component.scss']
})
export class ElectricitybillCardComponent implements OnInit {

  // stateSelectorList: CountryLists[] = [];

  stateSelectorList: stateSelector[] = [
    { value: '0', viewValue: 'Karnadaka' },
    { value: '1', viewValue: 'Kerala' },
    { value: '2', viewValue: 'Maharashra' }
  ];
  ngOnInit() {
    // this.getCountryList()
  }
constructor() {}
  // constructor(private countryList: CountryListsService, private countryModal : CountryLists) { }
  // getCountryList() {
  //   this.countryList.getCountryListData().subscribe((data) => {
  //     this.stateSelectorList = data['data']
  //     console.log("ffffffffff");
  //     console.log(this.stateSelectorList);


  //     console.log(this.countryList.getCountryListData);

  //   })
  // }

}
