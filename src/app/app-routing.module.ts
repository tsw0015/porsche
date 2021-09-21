import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './layout/main/layout-main.component';
import { LayoutCompareComponent } from './layout/compare/layout-compare.component';
import { LayoutBuildComponent } from './layout/build/layout-build.component';
import { LayoutOfferComponent } from './layout/offer/layout-offer.component';
import { LayoutFinancialComponent } from './layout/financial/layout-financial.component';

const routes: Routes = [
  { path: 'home', component: LayoutMainComponent },
  { path: 'compare', component: LayoutCompareComponent },
  { path: 'build', component: LayoutBuildComponent },
  { path: 'offer', component: LayoutOfferComponent },
  { path: 'porschefinancialservices', component: LayoutFinancialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
