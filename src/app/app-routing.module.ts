import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddapplicationComponent } from './component/company/addapplication/addapplication.component';
import { CompanyloginComponent } from './component/company/companylogin/companylogin.component';
import { CompanyregistrationComponent } from './component/company/companyregistration/companyregistration.component';
import { LoginComponent } from './component/user/login/login.component';
import { UserprofileComponent } from './component/user/userprofile/userprofile.component';
import { JobsDisplayComponent } from './component/application/jobs-display/jobs-display.component';
import { RegistrationComponent } from './component/user/registration/registration.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterValidationComponent } from './component/user/register-validation/register-validation.component';

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
  {
    path:"userprofile",
  component:UserprofileComponent},
  {
    path:"companyregistration",
    component:CompanyregistrationComponent,
  },
  {
    path:"companylogin",
    component:CompanyloginComponent,

  },
  {
    path:"addapplication",
    component:AddapplicationComponent
  },{
    path:"userRegistration",
    component:RegistrationComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:'',redirectTo:"home",pathMatch:"full"
  },
  {
    path:'registervalidate',
    component:RegisterValidationComponent
  }
  // {
  //   path:'items',
  //   loadChildren: ()=> import('./component/user/register-validation').then(m=> m.ItemsModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
