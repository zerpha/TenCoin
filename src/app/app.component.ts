import { Component, OnInit } from '@angular/core';
import { BlockchainService } from './services/blockchain.service';

declare var VANTA;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// class has a blockchain and walletID contained in blockchainService
export class AppComponent implements OnInit {
  public blockchain;
  public showInfoMessage = true;

  constructor(private blockchainService: BlockchainService) {
    this.blockchain = blockchainService.blockchainInstance;
  }

  // background animation
  ngOnInit() {
    VANTA.WAVES({
      el: "#vantaBackground",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x94a2aa,
      waveHeight: 9.50
    })
  }

  thereArePendingTransactions() {
    return this.blockchain.pendingTransactions.length > 0;
  }

  dismissInfoMessage() {
    this.showInfoMessage = false;
  }
}