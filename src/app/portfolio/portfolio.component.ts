import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {AuthServiceService} from "../auth-service.service";
import {ModalComponent} from "../modal/modal.component";
import {CreatePortfolioComponent} from "../create-portfolio/create-portfolio.component";
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolio: any = [];
  portfolios: any = [];
  portfolioName?: String;
  userDetails?:any = [];
  static order?:any;
  static orders?:any;
  createPortfolio(){
    this.dialogRef.open(CreatePortfolioComponent);
  }

  constructor(private authService: AuthServiceService,private dialogRef : MatDialog){
  }

  ngOnInit(): void {
    this.getUserPortfolio();
    this.getUserDetails();
  }

  getUserPortfolio(){
    console.log("Come and see me");
    this.authService.getUserPortfolio().subscribe(results => {
      this.portfolio = results;
      this.portfolios = this.portfolio.data;
      console.log("poooolll");
      console.log(this.portfolio.data);
      console.log("oojsdifsadf");
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

  getOrders(item: any) {
    console.log("Come and see me");
    console.log("Getting you order for this portfolio");
    console.log("Haaaayyyy**** "+ item.id);
    this.authService.getPortfolioOrders(item.id).subscribe(results => {
      PortfolioComponent.order = results;
      PortfolioComponent.orders = PortfolioComponent.order.data;
      console.log("poooolll");
      console.log(PortfolioComponent.orders);
      console.log("oojsdifsadf");
    });
  }
}
