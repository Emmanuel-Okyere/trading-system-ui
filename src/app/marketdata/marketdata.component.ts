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

  orders: any = [];

  ngOnInit() {
    this.getMarketData();
  }

  getMarketData(){
    this.authService.getMarketDataService().subscribe(results => {
      this.orders = results;
      console.log(this.orders);
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
