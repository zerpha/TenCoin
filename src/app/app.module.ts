import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';
import { OptionsComponent } from './pages/options/options.component';
import { BlockchainService } from './services/blockchain.service';
import { MakeTransactionComponent } from './pages/make-transaction/make-transaction.component';
import { PendTransactionComponent } from './pages/pend-transaction/pend-transaction.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainViewerComponent,
    BlockViewComponent,
    TransactionTableComponent,
    OptionsComponent,
    MakeTransactionComponent,
    PendTransactionComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BlockchainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
