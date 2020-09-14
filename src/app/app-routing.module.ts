import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { MakeTransactionComponent } from './pages/make-transaction/make-transaction.component';
import { OptionsComponent } from './pages/options/options.component';
import { PendTransactionComponent } from './pages/pend-transaction/pend-transaction.component'


const routes: Routes = [
  {path: '', component: BlockchainViewerComponent},
  {path: 'about', component: AboutComponent},
  {path: 'options', component: OptionsComponent},
  {path: 'new/transaction', component: MakeTransactionComponent },
  {path: 'new/transaction/pending', component: PendTransactionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
