import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceService } from '../auth-service.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-marketdata',
  templateUrl: './marketdata.component.html',
  styleUrls: ['./marketdata.component.css']
})
export class MarketdataComponent {
  constructor(private authService: AuthServiceService, private dialogRef : MatDialog){}

  marketData: any = [];
  userDetails?:any = [];
  ngOnInit() {
    this.getMarketData();
    this.getUserDetails();
  }

  getMarketData(){
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
  getUserDetails(){
    console.log("Getting user's details");
    const userEmail = sessionStorage.getItem("userEmail");
    const userName = sessionStorage.getItem("userName");
    const userBalance = sessionStorage.getItem("userBalance");
    const userRole = sessionStorage.getItem("userRole");
    this.userDetails.push(userEmail,userName,userBalance);
    console.log(this.userDetails);
  }

}
