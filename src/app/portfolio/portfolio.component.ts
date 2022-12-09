import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AuthServiceService} from "../auth-service.service";
import {ModalComponent} from "../modal/modal.component";
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolio: any = [];
  portfolios: any = [];
  portfolioName?: String;

  constructor(private authService: AuthServiceService){
  }

  ngOnInit(): void {
    this.getUserPortfolio();
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

  getOrders() {
    console.log("Come and see me");
  }
}
