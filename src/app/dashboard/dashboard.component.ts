import { Component, OnInit } from '@angular/core';
import { ResponseLoan } from '../model/loan';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loans:ResponseLoan[];
  constructor(public ls:LoginService) {
    this.loans = []
   }

  ngOnInit(): void {
    let email = this.ls.getEmail();
    this.ls.fetchLoans(email).subscribe(response=>{
      console.log(response);
      this.loans = response;
    });
  }

}
