import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InsurancePolicyListComponent } from './insurance-policy-list/insurance-policy-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
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

import { FaqComponent } from './faq/faq.component';
import { MainImagePolicyComponent } from './main-image-policy/main-image-policy.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { OsagoFormComponent } from './osago-form/osago-form.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { KaskoFormComponent } from './kasko-form/kasko-form.component';
import { ProfileComponent } from './profile/profile.component';
import { InsuranceFraudComponent } from './insurance-fraud/insurance-fraud.component';
import { JourneyComponent } from './journey/journey.component';
import { LegalEntityComponent } from './legal-entity/legal-entity.component';
import { AccidentComponent } from './accident/accident.component';
import { LegalPropertyComponent } from './legal-property/legal-property.component';
import { AboutInsuranceComponent } from './about-insurance/about-insurance.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VirusFormComponent } from './virus-form/virus-form.component';
import { PolicyOsagoComponent } from './policy-osago/policy-osago.component';
import { DmcComponent } from './dmc/dmc.component';


const appRoutes: Routes = [


  {path: '', component: HomePageComponent},
  {path: 'legal-entity', component: LegalEntityComponent},
  {path: 'osago-kasko', component: OsagoKaskoComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contacts-page', component: ContactsPageComponent},
  {path: 'mortgage', component: MortgageComponent},
  {path: 'journey', component: JourneyComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'fraud', component: InsuranceFraudComponent},
  {path: 'about-insurance', component: AboutInsuranceComponent},
  {path: 'kasko', component: KaskoFormComponent},
  {path: 'osago-form', component: OsagoFormComponent},
  {path: 'legal-property', component: LegalPropertyComponent},
  {path: 'accident', component: AccidentComponent},
  {path: 'autorization', component: AuthorizationComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'virus', component: VirusFormComponent},
  {path: 'dmc', component: DmcComponent},

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

    FaqComponent,
    MainImagePolicyComponent,
    HeaderInfoComponent,
    AboutUsComponent,
    ContactsPageComponent,
    HamburgerComponent,
    OsagoFormComponent,
    MortgageComponent,
    KaskoFormComponent,
    ProfileComponent,
    InsuranceFraudComponent,
    JourneyComponent,
    LegalEntityComponent,
    AccidentComponent,
    LegalPropertyComponent,
    AboutInsuranceComponent,
    VirusFormComponent,
    PolicyOsagoComponent,
    DmcComponent
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
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
