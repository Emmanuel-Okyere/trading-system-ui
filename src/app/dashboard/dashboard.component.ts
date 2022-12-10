import { Component } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  portfolio: any = [];
  portfolios: any = [];
  portfolioName?: String;
  userDetails?:any = [];

  ngOnInit(): void {
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
