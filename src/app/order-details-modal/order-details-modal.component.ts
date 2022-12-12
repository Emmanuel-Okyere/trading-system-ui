import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {AuthServiceService} from "../auth-service.service";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-order-details-modal',
  templateUrl: './order-details-modal.component.html',
  styleUrls: ['./order-details-modal.component.css']
})
export class OrderDetailsModalComponent  {
  order:any;
  orderDetails:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialog, private authService: AuthServiceService) {
  }

  ngOnInit(): void {
    this.getOrdersByID(this.data.orderId);
  }

  getOrdersByID(orderId:string){
    console.log("Come and see me");
    console.log(this.data);
    console.log(orderId);
    this.authService.getOrderByID(orderId).subscribe(results => {
      this.order = results;
      this.orderDetails = this.order;
      console.log("poooolll");
      console.log(this.orderDetails);
      console.log("oojsdifsadf");
    });
  }

  cancelOrder(orderID: string) {
    this.authService.cancelOrderByID(orderID).subscribe(result =>{
      if(result.status =="00"){
        alert(result.message)
        this.dialogRef.closeAll();
      }
      else {
        alert(result.message)
        this.dialogRef.closeAll();
      }
    })
  }
}
