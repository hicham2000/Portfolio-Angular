import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SkillsComponent} from "./skills/skills.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {CertificateComponent} from "./certificate/certificate.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path:"",redirectTo:"/Home",pathMatch:'full'},
  {path:"Home" , component:HomeComponent},
  {path:"Skills" , component:SkillsComponent},
  {path:"Portfolio" , component:PortfolioComponent},
  {path:"Certificate" , component:CertificateComponent},
  {path:"Contact" , component:ContactComponent},
  {path:"**", redirectTo:"/Home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
