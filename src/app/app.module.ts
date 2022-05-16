import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InsurancePolicyListComponent } from './insurance-policy-list/insurance-policy-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { InfoInsuranceComponent } from './info-insurance/info-insurance.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorizationComponent } from './authorization/authorization.component';

import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { OsagoKaskoComponent } from './osago-kasko/osago-kasko.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'autorization', component: AuthorizationComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'osago-kasko', component: OsagoKaskoComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    InsurancePolicyListComponent,
    HeaderComponent,
    InfoInsuranceComponent,
    FooterComponent,
    AuthorizationComponent,
    HomePageComponent,
    HeaderLinksComponent,
    RegistrationComponent,
    OsagoKaskoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
