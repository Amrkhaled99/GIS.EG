import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './client/partials/footer/footer.component';
import { HeaderComponent } from './client/partials/header/header.component';
import { HomePageComponent } from './client/layouts/home-page/home-page.component';
import { AboutPageComponent } from './client/layouts/about-page/about-page.component';
import { FaqsPageComponent } from './client/layouts/faqs-page/faqs-page.component';
import { BlogsPageComponent } from './client/layouts/blogs-page/blogs-page.component';
import { MainSliderComponent } from './client/components/home/main-slider/main-slider.component';
import { ExpolorePageComponent } from './client/layouts/expolore-page/expolore-page.component';
import { ApplyPageComponent } from './client/layouts/apply-page/apply-page.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { BlogCardComponent } from './client/components/blogs/blog-card/blog-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateLoader,TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DiscoverSectionComponent } from './client/components/home/discover-section/discover-section.component';
import { MessageSectionComponent } from './client/components/home/message-section/message-section.component';
import { CategorySectionComponent } from './client/components/home/category-section/category-section.component';
import { QuestionCardComponent } from './client/components/faqs/question-card/question-card.component';
import { TostartCardComponent } from './client/components/faqs/tostart-card/tostart-card.component';
import { UniversityCardComponent } from './client/components/Universities/university-card/university-card.component';
import { UniversityDetailsComponent } from './client/layouts/university-details/university-details.component';
import { BlogDetailsComponent } from './client/layouts/blog-details/blog-details.component';
import { StringToNumberPipe } from './pipes/string-to-number.pipe';

import { CookieService } from 'ngx-cookie-service';
import { ReviewCardComponent } from './client/components/home/review-card/review-card.component';
import { CampusSectionComponent } from './client/components/home/campus-section/campus-section.component';
import { BlogAreaSectionComponent } from './client/components/home/blog-area-section/blog-area-section.component';
import { PartnaerAreaSectionComponent } from './client/components/home/partnaer-area-section/partnaer-area-section.component';
import { ChooseAreaSectionComponent } from './client/components/aboutUs/choose-area-section/choose-area-section.component';
import { FeaturesAreaSectionComponent } from './client/components/aboutUs/features-area-section/features-area-section.component';
import { CounterAreaSectionComponent } from './client/components/aboutUs/counter-area-section/counter-area-section.component';
import { LanguageInterceptor } from './interceptor/language.interceptor';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QuillModule } from 'ngx-quill'


import { NgxFileDropModule } from 'ngx-file-drop';
import { ContactUsComponent } from './client/layouts/contact-us/contact-us/contact-us.component';
import { StartsComponent } from './client/components/home/starts/starts.component';
import { NotFoundComponent } from './client/layouts/not-found/not-found/not-found.component';
import { ServerErrorComponent } from './client/layouts/server-error/server-error/server-error.component';
import { DataRoundPipe } from './pipes/data-round.pipe';
import { PlacesPageComponent } from './client/layouts/places-page/places-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent, 
    AboutPageComponent,
    FaqsPageComponent ,
    BlogsPageComponent,
    MainSliderComponent,
    ExpolorePageComponent,
    ApplyPageComponent,
    DateFormatPipe,
    BlogCardComponent,
    DiscoverSectionComponent,
    MessageSectionComponent,
    CategorySectionComponent,
    QuestionCardComponent,
    TostartCardComponent,
    UniversityCardComponent,
    UniversityDetailsComponent,
    BlogDetailsComponent,
    StringToNumberPipe,
    ReviewCardComponent,
    CampusSectionComponent,
    BlogAreaSectionComponent,
    PartnaerAreaSectionComponent,
    ChooseAreaSectionComponent,
    FeaturesAreaSectionComponent,
    CounterAreaSectionComponent,
    ContactUsComponent,
    StartsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    DataRoundPipe,
    PlacesPageComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    QuillModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgxPaginationModule,
    NgxFileDropModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers:[
    CookieService, {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true,

    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(httpClient:HttpClient){
   return new TranslateHttpLoader(httpClient);
}


