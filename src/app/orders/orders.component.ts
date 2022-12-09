import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceService } from '../auth-service.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  constructor(private authService: AuthServiceService, private dialogRef : MatDialog){}

  orders: any = [];

  ngOnInit() {
    this.getOrders();
  }

  getOrders(){
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
