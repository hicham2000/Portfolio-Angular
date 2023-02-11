import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfilComponent } from './profil/profil.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ContactComponent } from './contact/contact.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ButtonsComponent } from './buttons/buttons.component';
import { DropDirective } from './drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SkillsComponent,
    ProfilComponent,
    PortfolioComponent,
    CertificateComponent,
    ContactComponent,
    ButtonsComponent,
    DropDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
