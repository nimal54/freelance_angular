import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CountryLists } from '../Modals/country';



@Injectable({
  providedIn: 'root'
})

export class ApiServices {


  constructor(public httpC: HttpClient) { }
  // public url: string = "https://api.first.org/data/v1/countries";

  // CountryList(): Observable<CountryLists[]> {
  //   console.log("service----");
  //   console.log(this.httpC.get<CountryLists[]>(this.url));


  //   return null;
  //   // (this.httpC.get<CountryLists[]>(this.url))['data'];
  // }


}
