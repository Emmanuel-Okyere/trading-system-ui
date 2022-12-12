import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {AuthServiceService} from "../auth-service.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.css']
})
export class CreatePortfolioComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialog, private authService: AuthServiceService) {
  }

  tradeFormGroup = new FormGroup({
    ticker: new FormControl(""),
  });

  createPortfolio() {
    if(this.tradeFormGroup.valid){
      this.authService.createPortfolio(this.tradeFormGroup.value).subscribe(result => {
        console.log("I got a response.");
        if(result.status == "00"){
          console.log(result);
          alert(result.message);
          console.log("We have traded");
          this.dialogRef.closeAll();
        } else {
          console.log(result.message);
          alert(result.error);
        }
      })
    } else {
      console.log("You tricked me.")
      alert("Inputs can not be empty")
    }
  }


}
