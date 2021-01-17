import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-bill-payment-header',
  templateUrl: './bill-payment-header.component.html',
  styleUrls: ['./bill-payment-header.component.scss']
})
export class BillPaymentHeaderComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
  }

}
