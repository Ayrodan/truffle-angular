import { Component, OnInit } from '@angular/core';
import { ContractService } from './contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'your first DApp in Angular';
  public accounts: string[] = [];
  transferFrom = '0x4ADc0002099a1dEC63733530F875BfCEca2d7986';
  balance ='0 ETH';
  transferTo = '0xbcf3a13BA45e75b8AC74a95dD6945269FBdEE38A';
  amount = 0;
  remarks = '';

  constructor(
    private service: ContractService
  ) {
    this.service.getAccounts().then(x => this.accounts = x);
  }

  public ngOnInit(): void {
    console.log(this.accounts);
    console.warn(this.service.getAccountInfo());
  }

  public transferEther(event): void {
  console.log(this.transferTo);
    this.service.sendEther(
      this.transferFrom,
      this.transferTo,
      this.amount,
      this.remarks
    )
    // ).then(function(){
    //   that.initAndDisplayAccount();
    // }).catch(function(error){
    //   console.log(error);
    //   that.initAndDisplayAccount();
    // });
  }
}
