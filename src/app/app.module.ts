import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { SocialNetworkComponent } from './social-network/social-network.component';
import { InsuranceCaseComponent } from './insurance-case/insurance-case.component';
import { FaqComponent } from './faq/faq.component';
import { MainImagePolicyComponent } from './main-image-policy/main-image-policy.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'autorization', component: AuthorizationComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'osago-kasko', component: OsagoKaskoComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contacts-page', component: ContactsPageComponent},
  
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
    OsagoKaskoComponent,
    SocialNetworkComponent,
    InsuranceCaseComponent,
    FaqComponent,
    MainImagePolicyComponent,
    HeaderInfoComponent,
    AboutUsComponent,
    ContactsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
