import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlockchainService, IWalletKey } from '../../services/blockchain.service';
import { Transaction } from 'src/app/myBlockchain/myBlockchain';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './make-transaction.component.html',
  styleUrls: ['./make-transaction.component.scss']
})
export class MakeTransactionComponent implements OnInit {
  public newTransaction = new Transaction();
  public ownWalletKey: IWalletKey;

  constructor(private blockchainService: BlockchainService, private router: Router) {
    this.newTransaction = new Transaction();
    this.ownWalletKey = blockchainService.walletKeys[0];
  }

  ngOnInit() {
  }

  createTransaction() {
    // Set the FROM address and sign the transaction
    this.newTransaction.fromAddress = this.ownWalletKey.publicKey;
    this.newTransaction.signTransaction(this.ownWalletKey.keyObj);

    try {
      this.blockchainService.addTransaction(this.newTransaction);
    } catch (e) {
      alert(e);
      return;
    }

    this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
    this.newTransaction = new Transaction();
  }
}
