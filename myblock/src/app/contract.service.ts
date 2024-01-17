import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
import { abi } from 'web3/lib/commonjs/eth.exports';

const contract = require('@truffle/contract');
let tokenAbi = require('../../../build/contracts/Payment.json');

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private web3Provider: any;
  private web3: any;

  constructor(
  ) {
    this.web3Provider = new Web3.HttpProvider('http://localhost:8545');
    this.web3 = new Web3.Web3('http://localhost:8545');
  }

  public getAccounts(): any {
    return this.web3.eth.getAccounts();
  }

  public getAccountInfo(): any {
    console.warn(this.web3Provider);
    console.warn(this.web3.eth.accounts);

    let info: any = {};

    this.web3.eth.getCoinbase().then(
      (value: string) => {
        console.warn(value);
        info = {
          ...info,
          account: value,
        }

        this.web3.eth.getBalance(value).then(
          (value: number) => {
          console.warn(value);

            info = {
              ...info,
              balance: this.web3.utils.fromWei(value, 'ether')
            }

            console.warn(info);
        });
      }
    );

    return info;
  }

  public sendEther( sendingFrom: any, sendingTo: any, amount: any, remarks: any): any {
    console.warn(contract);
    console.warn(tokenAbi.abi);
    let paymentContract = contract(tokenAbi);
    const web3 = this.web3
    paymentContract.setProvider('http://localhost:8545');
    paymentContract.deployed().then(( file: any ) => {
      file.sending(
        sendingTo,
        {
          from: sendingFrom,
          value: web3.utils.toWei(amount, "ether")
        }
      );
    }).then(( status: any ) => console.log(status))
  }
}
