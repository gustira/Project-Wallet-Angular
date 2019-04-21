import { Injectable } from '@angular/core';
import { account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  account:account[]=[
    new account("A01", "Gustira", "2000", "05-06-2000", "C01"),
    new account("A01", "Gustira", "2000", "05-06-2000", "C01"),
    new account("A01", "Gustira", "2000", "05-06-2000", "C01"),
    new account("A01", "Gustira", "2000", "05-06-2000", "C01"),
    new account("A01", "Gustira", "2000", "05-06-2000", "C01"),
    new account("A01", "Gustira", "2000", "05-06-2000", "C01"),
    new account("A01", "Gustira", "2000", "05-06-2000", "C01"),
    new account("A01", "Gustira", "2000", "05-06-2000", "C01"),
    new account("A01", "Gustira", "2000", "05-06-2000", "C01"),
    new account("A01", "Gustira", "2000", "05-06-2000", "C01"),
  
  ]

  getAccount(){
    return this.account;
  }

}
