import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryLists } from '../Modals/country';

@Injectable({
  providedIn: 'root'
})
export class CountryListsService {

  constructor(private http: HttpClient) { }

  // getCountryListData():Observable<any[]>{
  //   // const url ="https://api.first.org/data/v1/countries";
  //   // console.log(this.http.get<any[]>(url));

  //   return null;
  //   //  (this.http.get<CountryLists[]>(url))['data']
  // }
}
