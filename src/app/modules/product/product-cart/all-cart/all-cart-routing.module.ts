import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCartComponent } from './all-cart.component';

const routes: Routes = [{ path: '', component: AllCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCartRoutingModule {}
