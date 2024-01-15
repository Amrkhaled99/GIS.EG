import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  supportLanguages = ['en', 'ar'];
  cLanguage:any="en";


  ngOnInit(): void {

     this.renderJsFile()

  }
   constructor(private cookies:CookieService,public translate: TranslateService
    , @Inject(DOCUMENT) private document: Document
    ,private render2:Renderer2,
    @Inject(DOCUMENT) private _document:Document) {
    this.cLanguage=this.getCookies()
    translate.addLangs(this.supportLanguages);
    if(this.cLanguage==0){
      this.cLanguage='en';
      this.translate.setDefaultLang(this.cLanguage)
      this.setDirection(this.cLanguage)

    }else{
      this.checkCurrentLanguage()
    }
    // console.log(this.cLanguage)




  }



  checkCurrentLanguage(){
     if(this.cLanguage=="ar"){
      this.translate.use(this.cLanguage);
      this.setDirection(this.cLanguage);

     }else{
      this.translate.use(this.cLanguage);
      this.setDirection(this.cLanguage);
     }
  }

  getCookies(){
   return this.cookies.get("cLanguage");
  }


  switchLang(lang:string){

    this.cookies.set("cLanguage",lang);
    this.translate.use(lang);
    this.setDirection(lang);
    this.refresh()
  }


  refresh(): void {
    window.location.reload();
}

  setDirection(lang:any){

    const htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    htmlTag.lang = lang;
  }


  onClickAnchor() {

    const url = `/`;
    const newTab = window.open(url, '_self');
    if (newTab !== null) {
      newTab.focus();
    }

  }


  renderJsFile(){

    const s=this.render2.createElement('script');
    s.type='text/javascript';
    s.src="/assets/main2.js";

    this.render2.appendChild(this._document.body,s);

  }




  // renderHeader() {


  //   const windowOn = $(window);

  //   ////////////////////////////////////////////////////
  //   // 01. PreLoader Js
  //   windowOn.on("load", () => {
  //     $("#loading").fadeOut(500);
  //   });

  //   ////////////////////////////////////////////////////
  //   // 02. Mobile Menu Js


  //   // 03. Sidebar Js
  //   $(".side-info-close, .offcanvas-overlay").on("click", () => {
  //     $(".side-info").removeClass("info-open");
  //     $(".offcanvas-overlay").removeClass("overlay-open");
  //   });

  //   $(".side-toggle").on("click", () => {
  //     $(".side-info").addClass("info-open");
  //     $(".offcanvas-overlay").addClass("overlay-open");
  //   });

  //   ////////////////////////////////////////////////////
  //   // 04. Cart Toggle Js
  //   $(".cart-toggle-btn").on("click", () => {
  //     $(".cartmini__wrapper").addClass("opened");
  //     $(".body-overlay").addClass("opened");
  //   });

  //   $(".cartmini__close-btn").on("click", () => {
  //     $(".cartmini__wrapper").removeClass("opened");
  //     $(".body-overlay").removeClass("opened");
  //   });

  //   $(".body-overlay").on("click", () => {
  //     $(".cartmini__wrapper").removeClass("opened");
  //     $(".sidebar__area").removeClass("sidebar-opened");
  //     $(".header__search-3").removeClass("search-opened");
  //     $(".body-overlay").removeClass("opened");
  //   });

  //   ////////////////////////////////////////////////////
  //   // 05. Search Js
  //   $(".search-toggle").on("click", () => {
  //     $(".search__area").addClass("opened");
  //   });

  //   $(".search-close-btn").on("click", () => {
  //     $(".search__area").removeClass("opened");
  //   });

  //   ////////////////////////////////////////////////////
  //   // 06. Sticky Header Js
  //   windowOn.on("scroll", () => {
  //     const scroll = $(window).scrollTop();
  //     if (scroll < 100) {
  //       $(".sticky-header").removeClass("sticky");
  //     } else {
  //       $(".sticky-header").addClass("sticky");
  //     }
  //   });

  //   ////////////////////////////////////////////////////
  //   // 07. Data Background Js
  //   // $("[data-background]").each(function () {
  //   //   $(this).css(
  //   //     "background-image",
  //   //     "url( " + $(this).attr("data-background") + "  )"
  //   //   );
  //   // });

  //   ////////////////////////////////////////////////////
  //   // 08. Nice Select Js
  //   $("select").niceSelect();
  // }


}
