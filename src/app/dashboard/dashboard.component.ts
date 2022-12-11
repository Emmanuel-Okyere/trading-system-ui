import { Component } from '@angular/core';
import {AuthServiceService} from "../auth-service.service";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  portfolio: any = [];
  portfolios: any = [];
  portfolioName?: String;
  userDetails?: any = [];
  displayedColumns: string[] = ["TICKER", "SELL_LIMIT", "LAST_TRADED_PRICE", "MAX_PRICE_SHIFT", "ASK_PRICE", "BUY_LIMIT", "BID_PRICE"];

  constructor(private authService: AuthServiceService, private dialogRef: MatDialog) {
  }

  marketData: any = [];

  ngOnInit(): void {
    this.getUserDetails();
    this.getMarketData();
  }

  getUserDetails() {
    console.log("Getting user's details");
    const userEmail = sessionStorage.getItem("userEmail");
    const userName = sessionStorage.getItem("userName");
    const userBalance = sessionStorage.getItem("userBalance");
    const userRole = sessionStorage.getItem("userRole");
    this.userDetails.push(userEmail, userName, userBalance);
    console.log(this.userDetails);
  }

  getMarketData() {
    this.authService.getMarketDataService().subscribe(results => {
      this.marketData = results;
      console.log(this.marketData);
    });
  }

  openDialog(item: any){
    console.log(item);
    console.log("-------------");
    this.dialogRef.open(ModalComponent, {
      data : {name : item}
    });
  }
}
