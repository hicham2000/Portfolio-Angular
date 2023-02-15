import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SkillsComponent} from "./skills/skills.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {CertificateComponent} from "./certificate/certificate.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path:"",redirectTo:"/Home",pathMatch:'full'},
  {path:"Home" , loadChildren:()=>
  import("./home/home.module").then(m=>m.HomeModule)
  },
  {path:"Skills" ,loadChildren: ()=>
  import('./skills/skills.module').then(m=> m.SkillsModule)
  },
  {path:"Portfolio" , loadChildren:()=>
  import("./portfolio/portfolio.module").then(m=>m.PortfolioModule)
  },
  {path:"Certificate" , loadChildren:()=>
  import("./certificate/certificate.module").then(m=>m.CertificateModule)
  },
  {path:"Contact" , loadChildren:()=>
  import("./contact/contact.module").then(m=>m.ContactModule)
  },
  {path:"**", redirectTo:"/Home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
