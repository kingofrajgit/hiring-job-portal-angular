import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobsDisplayComponent } from './component/application/jobs-display/jobs-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card';
import { MatDivider} from '@angular/material/divider';
import { LoginComponent } from './component/user/login/login.component';
import { RegistrationComponent } from './component/user/registration/registration.component';
import { ForgetpasswordComponent } from './component/user/forgetpassword/forgetpassword.component';
import { UserprofileComponent } from './component/user/userprofile/userprofile.component';
import { CompanyloginComponent } from './component/company/companylogin/companylogin.component';
import { CompanyregistrationComponent } from './component/company/companyregistration/companyregistration.component';
import { AddapplicationComponent } from './component/company/addapplication/addapplication.component';
import { UpdateapplicationComponent } from './component/company/updateapplication/updateapplication.component';
import { ProfieComponent } from './component/admin/profie/profie.component';
import { HomeComponent } from './component/home/home.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { RegisterValidationComponent } from './component/user/register-validation/register-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    JobsDisplayComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetpasswordComponent,
    UserprofileComponent,
    CompanyloginComponent,
    CompanyregistrationComponent,
    AddapplicationComponent,
    UpdateapplicationComponent,
    ProfieComponent,
    HomeComponent,
    RegisterValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
