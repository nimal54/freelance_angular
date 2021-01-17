import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CountryLists } from '../../../Modals/country';
import { ApiServices } from '../../../services/apiservices';
import { HttpClient } from '@angular/common/http';



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

  stateSelectorList: stateSelector[] = [
    { value: '0', viewValue: 'Karnadaka' },
    { value: '1', viewValue: 'Kerala' },
    { value: '2', viewValue: 'Maharashra' }
  ];
  dataArray3: CountryLists[] = [];
  ngOnInit() {
    console.log("hhsfdgsgfdghmu");
    //  this.apiService.CountryList().subscribe(data => {this.dataArray3 = data, console.log(data)}
    //  );


    // console.log(this.countryList.CountryName);


  }

  constructor() {
    // public  countryList : CountryLists, public apiService : ApiServices

  }
}
