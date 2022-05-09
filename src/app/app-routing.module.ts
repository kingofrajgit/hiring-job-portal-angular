import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './component/login/login.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { JobsDisplayComponent } from './jobs-display/jobs-display.component';

const routes: Routes = [
  {
    path:"jobsDisplay",
    component:JobsDisplayComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"login",
    component:LoginComponent,

  },
  {path:"userprofile",component:UserprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
