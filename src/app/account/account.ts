export class account{
    accountNumber: string;
    accountName: string;
    balance: number;
    openDate: string;
    cif: string;
    

    constructor(accountNumber, accountName, balance, openDate, cif){
        this.accountNumber=accountNumber;
        this.accountName=accountName;
        this.balance=balance;
        this.openDate=openDate;
        this.cif=cif;
    }
}