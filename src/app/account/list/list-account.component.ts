import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../account.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { account } from '../account';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  listAccount: any;
  title = "List Account";

  dataSource = new MatTableDataSource<account>(this.listAccount);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _accountService: AccountService) { 
    this.listAccount=this._accountService.getAccount();
  }

  displayedColumns: string[] = ['accountNumber', 'accountName', 'balance', 'openDate'];
  

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
