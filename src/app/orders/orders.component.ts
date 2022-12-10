import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceService } from '../auth-service.service';
import { ModalComponent } from '../modal/modal.component';
import {PortfolioComponent} from "../portfolio/portfolio.component";
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  constructor(private authService: AuthServiceService, private dialogRef : MatDialog){}
  userDetails?:any = [];
  orders:any= PortfolioComponent.orders;
  ngOnInit() {
    console.log("***************************11")
    this.getUserDetails();
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
