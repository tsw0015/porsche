import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCompareComponent } from './layout/compare/layout-compare.component';
import { LayoutBuildComponent } from './layout/build/layout-build.component';
import { LayoutOfferComponent } from './layout/offer/layout-offer.component';
import { LayoutFinancialComponent } from './layout/financial/layout-financial.component';
import { LayoutHomeComponent } from './layout/home/layout-home.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'home', component: LayoutHomeComponent },
  { path: 'compare', component: LayoutCompareComponent },
  { path: 'build', component: LayoutBuildComponent },
  { path: 'offer', component: LayoutOfferComponent },
  { path: 'porschefinancialservices', component: LayoutFinancialComponent },
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
