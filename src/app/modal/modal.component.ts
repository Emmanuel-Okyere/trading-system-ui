import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

  portfolio: any = [];
  portfolios: any = [];
  portfolioName?: String;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthServiceService){
    this.portfolioName = data.name
  }

  tradeFormGroup = new FormGroup({
    product: new FormControl({value: this.data.name, disabled: false}),
    quantity: new FormControl(""),
    price: new FormControl(""),
    side: new FormControl(""),
    type: new FormControl(""),
    portfolioId: new FormControl("")
  });

  ngOnInit(): void {
    this.getUserPortfolio();
  }

  makeTrade(){
    console.log("In Make Trade");
    console.log(this.tradeFormGroup.value);
    console.log(this.tradeFormGroup.value.product);
    console.log(this.tradeFormGroup.value.portfolioId);

    if(this.tradeFormGroup.valid){
      this.authService.tradeStock(this.tradeFormGroup.value).subscribe(result => {
        console.log("I got a response.");
        if(result.status == "00"){
          console.log(result);
          alert(result.message);
          console.log("We have traded");
          window.location.href = '/marketdata';
        } else {
          console.log(result.message);
          alert(result.message);
        }
      })
    } else {
      console.log("You tricked me.")
      alert("Inputs can not be empty")
    }


  }



  getUserPortfolio(){
    console.log("Come and see me");
    console.log(this.data);

    this.authService.getUserPortfolio().subscribe(results => {
      this.portfolio = results;
      this.portfolios = this.portfolio.data;
      console.log("poooolll");
      console.log(this.portfolio.data);
      console.log("oojsdifsadf");
    });
  }

}
