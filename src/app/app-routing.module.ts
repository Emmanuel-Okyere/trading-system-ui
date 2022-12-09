import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MarketdataComponent } from './marketdata/marketdata.component';
import { OrdersComponent } from './orders/orders.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'profile', component: ProfileComponent},
  {path:'orders', component: OrdersComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'marketdata', component: MarketdataComponent},
  {path:'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
