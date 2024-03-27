import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GeneralLedgerComponent } from './finance/general-ledger/general-ledger.component';
import { AccountsPayableComponent } from './finance/accounts-payable/accounts-payable.component';
import { UsersRolesComponent } from './user/users-roles/users-roles.component';
import { AuthComponent } from './user/auth/auth.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'finance',
    children: [
      { path: 'accounts-payable', component: AccountsPayableComponent },
      { path: 'general-ledger', component: GeneralLedgerComponent },
    ]
  },
  { path: 'user',
    children: [
      { path: 'auth', component: AuthComponent },
      { path: 'users-roles', component: UsersRolesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 145],
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }