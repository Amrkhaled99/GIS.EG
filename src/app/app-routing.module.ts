import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './client/layouts/about-page/about-page.component';
import { FaqsPageComponent } from './client/layouts/faqs-page/faqs-page.component';
import { HomePageComponent } from './client/layouts/home-page/home-page.component';
import { BlogsPageComponent } from './client/layouts/blogs-page/blogs-page.component';
import { ExpolorePageComponent } from './client/layouts/expolore-page/expolore-page.component';
import { ApplyPageComponent } from './client/layouts/apply-page/apply-page.component';
import { UniversityDetailsComponent } from './client/layouts/university-details/university-details.component';
import { BlogDetailsComponent } from './client/layouts/blog-details/blog-details.component';
import { ContactUsComponent } from './client/layouts/contact-us/contact-us/contact-us.component';
import { NotFoundComponent } from './client/layouts/not-found/not-found/not-found.component';
import { ServerErrorComponent } from './client/layouts/server-error/server-error/server-error.component';
import { PlacesPageComponent } from './client/layouts/places-page/places-page.component';
import { SafetyPageComponent } from './client/layouts/safety-page/safety-page.component';
import { SafetyDetailsComponent } from './client/layouts/safety-details/safety-details.component';



const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'faqs', component: FaqsPageComponent },
  { path: 'safety', component: SafetyPageComponent },
  { path: 'services', component: PlacesPageComponent },
  { path: 'applynow', component: ApplyPageComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'services/:name', component: UniversityDetailsComponent },
  { path: 'safety/:slug', component: SafetyDetailsComponent },
  { path: 'serverError', component: ServerErrorComponent },

  { path: '**', component: NotFoundComponent },

];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{useHash:true})],
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }



