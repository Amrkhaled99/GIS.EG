import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { City } from 'src/app/interfaces/city';
import { Place } from 'src/app/interfaces/place';
import { Review } from 'src/app/interfaces/review';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  placesEgypt:Place[] = [

      {
        longitude: 31.23720270000007,
        latitude: 30.046167300000036,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "الحاره كافيه",
    isMostVisited: false
      },
      {
        longitude: 31.239326600000027,
        latitude: 30.043308900000056,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "بينوس",
    isMostVisited: false
      },
      {
        longitude: 31.241059000000064,
        latitude: 30.051113900000075,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Up town cafe&Restaurant",
    isMostVisited: false
      },
      {
        longitude: 31.24202260000004,
        latitude: 30.049970700000074,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Kunst Cafe",
    isMostVisited: false
      },
      {
        longitude: 31.242164400000036,
        latitude: 30.04896640000004,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كوستا كافيه",
    isMostVisited: false
      },
      {
        longitude: 31.23620200000005,
        latitude: 30.045087000000024,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "مقهي نادي وادي النيل _ Nadi Wadi Elnile Cafe",
    isMostVisited: false
      },
      {
        longitude: 31.23856420000004,
        latitude: 30.043267100000037,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "مطعم وكافيه اولدش",
    isMostVisited: false
      },
      {
        longitude: 31.23835760000003,
        latitude: 30.046901000000048,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كافيه ريش",
    isMostVisited: false
      },
      {
        longitude: 31.239132700000027,
        latitude: 30.046877300000062,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "زهرة البستان",
    isMostVisited: false
      },
      {
        longitude: 31.24250200000006,
        latitude: 30.048769400000026,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Nile café",
    isMostVisited: false
      },
      {
        longitude: 31.23835760000003,
        latitude: 30.046901000000048,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كافيه ريش",
    isMostVisited: false
      },
      {
        longitude: 31.242595400000027,
        latitude: 30.04884590000006,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "البلد كافيه",
    isMostVisited: false
      },
      {
        longitude: 31.235175600000048,
        latitude: 30.046362600000066,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "لابوار",
    isMostVisited: false
      },
      {
        longitude: 31.23749300000003,
        latitude: 30.050602600000047,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كرما كافيه",
    isMostVisited: false
      },
      {
        longitude: 31.235481400000026,
        latitude: 30.04747400000008,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Down Town Cafe-كافيه وسط البلد",
    isMostVisited: false
      },
      {
        longitude: 31.240152700000067,
        latitude: 30.05222310000005,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "سيتى كافيه",
    isMostVisited: false
      },
      {
        longitude: 31.237172600000065,
        latitude: 30.04837020000008,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كوفى شوب وسط البلد - السويسى",
    isMostVisited: false
      },
      {
        longitude: 31.241210100000046,
        latitude: 30.051901400000077,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كافتريا جار القمر",
    isMostVisited: false
      },
      {
        longitude: 31.240591600000073,
        latitude: 30.051311100000078,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Aflam cafe",
    isMostVisited: false
      },
      {
        longitude: 31.24168530000003,
        latitude: 30.05252470000005,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "آلاميريكين كوفى شوب - طلعت حرب",
    isMostVisited: false
      },
      {
        longitude: 31.237837700000057,
        latitude: 30.046738400000038,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Café Reem",
    isMostVisited: false
      },
      {
        longitude: 31.241200500000048,
        latitude: 30.051414100000045,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "اكسلسيور",
    isMostVisited: false
      },
      {
        longitude: 31.239122800000075,
        latitude: 30.04881000000006,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "SIP Specialty Coffee",
    isMostVisited: false
      },
      {
        longitude: 31.239047200000073,
        latitude: 30.04691070000007,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "زهرة البستان",
    isMostVisited: false
      },
      {
        longitude: 31.240343000000053,
        latitude: 30.04522090000006,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "مقهى و كافيه وبار الحرية",
    isMostVisited: false
      },
      {
        longitude: 31.242446500000028,
        latitude: 30.055295800000067,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "قهوة أم كلثوم",
    isMostVisited: false
      },
      {
        longitude: 31.241857800000048,
        latitude: 30.044996300000037,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Sugar gallary",
    isMostVisited: false
      },
      {
        longitude: 31.242256500000053,
        latitude: 30.04509150000007,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "بوفية السعادة",
    isMostVisited: false
      },
      {
        longitude: 31.24086170000004,
        latitude: 30.04599900000005,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كافيه الممر",
    isMostVisited: false
      },
      {
        longitude: 31.242164400000036,
        latitude: 30.04896640000004,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كوستا كافيه",
    isMostVisited: false
      },
      {
        longitude: 31.24242460000005,
        latitude: 30.046649400000035,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Moonlight cafe",
    isMostVisited: false
      },
      {
        longitude: 31.24148210000004,
        latitude: 30.04331460000003,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كوفى شوب شارع شريف",
    isMostVisited: false
      },
      {
        longitude: 31.242133100000046,
        latitude: 30.046548700000073,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Paris Cafee",
    isMostVisited: false
      },
      {
        longitude: 31.242137600000035,
        latitude: 30.050210900000025,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Cafelino cafe",
    isMostVisited: false
      },
      {
        longitude: 31.242372300000056,
        latitude: 30.050480400000026,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كافيه MOON LIGHT",
    isMostVisited: false
      },
      {
        longitude: 31.240143200000034,
        latitude: 30.051268100000073,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "El komy",
    isMostVisited: false
      },
      {
        longitude: 31.241666400000042,
        latitude: 30.051393800000028,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كوفى شوب المضيفة",
    isMostVisited: false
      },
      {
        longitude: 31.24341060000006,
        latitude: 30.052355900000066,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كافيه بابا عبده",
    isMostVisited: false
      },
      {
        longitude: 31.242762800000037,
        latitude: 30.051340800000048,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "قهوه زعبوط",
    isMostVisited: false
      },
      {
        longitude: 31.244799300000068,
        latitude: 30.051729200000068,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كوفي شوب الأمراء",
    isMostVisited: false
      },
      {
        longitude: 31.242612700000052,
        latitude: 30.051072500000032,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Crafted Home - كرافتيد هوم",
    isMostVisited: false
      },
      {
        longitude: 31.24439330000007,
        latitude: 30.051035700000057,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Caribou Coffee",
    isMostVisited: false
      },
      {
        longitude: 31.240061900000057,
        latitude: 30.050287500000024,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "ملك كافية",
    isMostVisited: false
      },
      {
        longitude: 31.236047600000063,
        latitude: 30.050155200000063,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "قهوة الكمال",
    isMostVisited: false
      },
      {
        longitude: 31.243957200000068,
        latitude: 30.040087700000072,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "قهوة الدمس",
    isMostVisited: false
      },
      {
        longitude: 31.24397700000003,
        latitude: 30.041678000000047,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "قهوة الصعايدة",
    isMostVisited: false
      },
      {
        longitude: 31.24295980000005,
        latitude: 30.042529200000047,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "El gamil coffee",
    isMostVisited: false
      },
      {
        longitude: 31.243282400000055,
        latitude: 30.047401800000046,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Offside Cafe",
    isMostVisited: false
      },
      {
        longitude: 31.24398700000006,
        latitude: 30.040706900000032,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "قهوة توشكي شطرنج",
    isMostVisited: false
      },
      {
        longitude: 31.242221200000074,
        latitude: 30.05364110000005,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كافيه ليالينا Laylena",
    isMostVisited: false
      },
      {
        longitude: 31.242709300000058,
        latitude: 30.053687000000025,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كافيه الصعيدي",
    isMostVisited: false
      },
      {
        longitude: 31.242693100000054,
        latitude: 30.05544560000004,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "القهوة",
    isMostVisited: false
      },
      {
        longitude: 31.242505100000074,
        latitude: 30.05330070000008,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Lialy",
    isMostVisited: false
      },
      {
        longitude: 31.242441400000075,
        latitude: 30.05457720000004,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "3Roof space",
    isMostVisited: false
      },
      {
        longitude: 31.24325220000003,
        latitude: 30.053689700000064,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "أفندينا",
    isMostVisited: false
      },
      {
        longitude: 31.243094300000052,
        latitude: 30.055141500000047,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "البلكونه",
    isMostVisited: false
      },
      {
        longitude: 31.243878900000027,
        latitude: 30.054113700000073,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "قهوة عنتر وسط البلد",
    isMostVisited: false
      },
      {
        longitude: 31.24375850000007,
        latitude: 30.054847900000027,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "قهوة بعره",
    isMostVisited: false
      },
      {
        longitude: 31.24448700000005,
        latitude: 30.054311100000064,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "The Jungle café",
    isMostVisited: false
      },
      {
        longitude: 31.24449020000003,
        latitude: 30.05314800000008,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "Hakeem coffee",
    isMostVisited: false
      },
      {
        longitude: 31.244338800000037,
        latitude: 30.055560600000035,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "قهاوي وسط البلد",
    isMostVisited: false
      },
      {
        longitude: 31.24448250000006,
        latitude: 30.054209100000037,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "اتفضل قهوة",
    isMostVisited: false
      },
      {
        longitude: 31.243862500000034,
        latitude: 30.053924900000027,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "نادى الفردوس",
    isMostVisited: false
      },
      {
        longitude: 31.244515600000057,
        latitude: 30.052670000000035,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "آلاميريكين - عماد الدين",
    isMostVisited: false
      },
      {
        longitude: 31.244369800000072,
        latitude: 30.05379910000005,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "كافيه نيو كورسال",
    isMostVisited: false
      },
      {
        longitude: 31.24423070000006,
        latitude: 30.052787800000033,
       code: 1001,
       city: 1010,
        cityName: "Cairo",
         name: "مطعم و كافية بوند",
    isMostVisited: false
      },

      {
        longitude: 31.24354470000003,
        latitude: 30.05024910000003,
        code: 1003,
        city: 1010,
        cityName: "Cairo",
        name: "Aman store-OM-Adly",
       isMostVisited: false
       },
       {
        longitude: 31.24287400000003,
        latitude: 30.05103470000006,
        code: 1003,
        city: 1010,
        cityName: "Cairo",
        name: "نيازا",
       isMostVisited: false
       },
       {
        longitude: 31.245226400000035,
        latitude: 30.05129900000003,
        code: 1003,
        city: 1010,
        cityName: "Cairo",
        name: "ELARABY - Adly",
       isMostVisited: false
       },
       {
        longitude: 31.242312300000037,
        latitude: 30.05110970000004,
        code: 1003,
        city: 1010,
        cityName: "Cairo",
        name: "Dream2000",
       isMostVisited: false
       },
       {
        longitude: 31.242256600000076,
        latitude: 30.052013900000077,
        code: 1003,
        city: 1010,
        cityName: "Cairo",
        name: "GOOD DEAL",
       isMostVisited: false
       },
       {
        longitude: 31.24244470000008,
        latitude: 30.051735200000053,
        code: 1003,
        city: 1010,
        cityName: "Cairo",
        name: "Sherif Shop",
       isMostVisited: false
       },
       {
        longitude: 31.246007000000077,
        latitude: 30.047000800000035,
        code: 1003,
        city: 1010,
        cityName: "Cairo",
        name: "عدلى يوسف للاستيراد‎",
       isMostVisited: false
       },
       {
        longitude: 31.244774000000064,
        latitude: 30.055021600000032,
        code: 1003,
        city: 1010,
        cityName: "Cairo",
        name: "العصرية للادوات الكهربائية",
       isMostVisited: false
       },
       {
        longitude: 31.238625900000045,
        latitude: 30.045043200000066,
        code: 1003,
        city: 1010,
        cityName: "Cairo",
        name: "IG Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.240508600000055,
        latitude: 30.047136300000034,
        code: 1003,
        city: 1010,
        cityName: "Cairo",
        name: "Tag For Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.238625900000045,
        latitude: 30.045043200000066,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "IG Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.23930400000006,
        latitude: 30.04511830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "EL Gammal Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.23571160000006,
        latitude: 30.044419600000026,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "electronics",
       isMostVisited: false
       },
       {
        longitude: 31.246684900000048,
        latitude: 30.044957600000032,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "فرع LG للالكترونيات",
       isMostVisited: false
       },
       {
        longitude: 31.244774000000064,
        latitude: 30.055021600000032,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "العصرية للادوات الكهربائية",
       isMostVisited: false
       },
       {
        longitude: 31.24018190000004,
        latitude: 30.045534200000077,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "شالروا-أجهزة كهربائية",
       isMostVisited: false
       },
       {
        longitude: 31.241327900000044,
        latitude: 30.053069700000037,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "الشركة الوطنية للأدوات الكهربائية",
       isMostVisited: false
       },
       {
        longitude: 31.24962030000006,
        latitude: 30.04848000000004,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "صابر سنتر",
       isMostVisited: false
       },
       {
        longitude: 31.249694900000065,
        latitude: 30.054432500000075,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "مؤسسة الفاتح الالكترونية للمحولات",
       isMostVisited: false
       },
       {
        longitude: 31.238297000000046,
        latitude: 30.04460750000004,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "أولاد محمد أحمد فرج",
       isMostVisited: false
       },
       {
        longitude: 31.23951290000008,
        latitude: 30.046082900000044,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Free Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.23571160000006,
        latitude: 30.044419600000026,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "electronics",
       isMostVisited: false
       },
       {
        longitude: 31.23930400000006,
        latitude: 30.04511830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "EL Gammal Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.246684900000048,
        latitude: 30.044957600000032,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "فرع LG للالكترونيات",
       isMostVisited: false
       },
       {
        longitude: 31.244302900000037,
        latitude: 30.056137800000045,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "El Nile For Electric Supplies",
       isMostVisited: false
       },
       {
        longitude: 31.24856580000005,
        latitude: 30.047418700000037,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "سوق عبدالعزيز للاجهزة الكهربائية المنزلية وبيع التلفونات السيار",
       isMostVisited: false
       },
       {
        longitude: 31.24962030000006,
        latitude: 30.04848000000004,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "صابر سنتر",
       isMostVisited: false
       },
       {
        longitude: 31.242641400000025,
        latitude: 30.05213850000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Sherif Center",
       isMostVisited: false
       },
       {
        longitude: 31.24232260000008,
        latitude: 30.050770400000033,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Azmy",
       isMostVisited: false
       },
       {
        longitude: 31.238504600000056,
        latitude: 30.04565830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "توبى كمبيوتر",
       isMostVisited: false
       },
       {
        longitude: 31.249993200000063,
        latitude: 30.04588700000005,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "شارع عبد العزيز تجار",
       isMostVisited: false
       },
       {
        longitude: 31.249262100000067,
        latitude: 30.048235900000066,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Abd El Aziz",
       isMostVisited: false
       },
       {
        longitude: 31.24856580000005,
        latitude: 30.047418700000037,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "سوق عبدالعزيز للاجهزة الكهربائية المنزلية وبيع التلفونات السيار",
       isMostVisited: false
       },
       {
        longitude: 31.23571160000006,
        latitude: 30.044419600000026,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "ميني شارع عبد العزيز",
       isMostVisited: false
       },
       {
        longitude: 31.248731500000076,
        latitude: 30.04520290000005,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "دكان عبد العزيز",
       isMostVisited: false
       },
       {
        longitude: 31.249993200000063,
        latitude: 30.04588700000005,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "شارع عبد العزيز تجار",
       isMostVisited: false
       },
       {
        longitude: 31.249262100000067,
        latitude: 30.048235900000066,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Abd El Aziz",
       isMostVisited: false
       },
       {
        longitude: 31.24856580000005,
        latitude: 30.047418700000037,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "سوق عبدالعزيز للاجهزة الكهربائية المنزلية وبيع التلفونات السيار",
       isMostVisited: false
       },
       {
        longitude: 31.23571160000006,
        latitude: 30.044419600000026,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "ميني شارع عبد العزيز",
       isMostVisited: false
       },
       {
        longitude: 31.248731500000076,
        latitude: 30.04520290000005,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "دكان عبد العزيز",
       isMostVisited: false
       },
       {
        longitude: 31.240540100000032,
        latitude: 30.045253900000034,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Mazlom",
       isMostVisited: false
       },
       {
        longitude: 31.24244470000008,
        latitude: 30.051735200000053,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Sherif Shop",
       isMostVisited: false
       },
       {
        longitude: 31.24232260000008,
        latitude: 30.050770400000033,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Azmy",
       isMostVisited: false
       },
       {
        longitude: 31.242347100000075,
        latitude: 30.052099500000054,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "City Style",
       isMostVisited: false
       },
       {
        longitude: 31.242108200000075,
        latitude: 30.046330600000033,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Camera Shop",
       isMostVisited: false
       },
       {
        longitude: 31.247432600000025,
        latitude: 30.046550100000047,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "البحيرى للاجهزة الكهربائية",
       isMostVisited: false
       },
       {
        longitude: 31.24348930000008,
        latitude: 30.04548820000008,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "الحوفى ستورز",
       isMostVisited: false
       },
       {
        longitude: 31.24018190000004,
        latitude: 30.045534200000077,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "شالروا-أجهزة كهربائية",
       isMostVisited: false
       },
       {
        longitude: 31.242641400000025,
        latitude: 30.05213850000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Sherif Center",
       isMostVisited: false
       },
       {
        longitude: 31.23951290000008,
        latitude: 30.046082900000044,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Free Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.24962030000006,
        latitude: 30.04848000000004,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "صابر سنتر",
       isMostVisited: false
       },
       {
        longitude: 31.24232260000008,
        latitude: 30.050770400000033,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Azmy",
       isMostVisited: false
       },
       {
        longitude: 31.314194300000054,
        latitude: 30.098673500000075,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Alfy for conditioning and electrical appliances",
       isMostVisited: false
       },
       {
        longitude: 31.199199200000066,
        latitude: 29.99813940000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "الالفي للاجهزة الكهربائية",
       isMostVisited: false
       },
       {
        longitude: 31.245200000000068,
        latitude: 30.055400000000077,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Diabco Electric",
       isMostVisited: false
       },
       {
        longitude: 31.242347100000075,
        latitude: 30.052099500000054,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "City Style",
       isMostVisited: false
       },
       {
        longitude: 31.24962030000006,
        latitude: 30.04848000000004,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "صابر سنتر",
       isMostVisited: false
       },
       {
        longitude: 31.24232260000008,
        latitude: 30.050770400000033,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Azmy",
       isMostVisited: false
       },
       {
        longitude: 31.245200000000068,
        latitude: 30.055400000000077,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Diabco Electric",
       isMostVisited: false
       },
       {
        longitude: 31.24962030000006,
        latitude: 30.04848000000004,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "صابر سنتر",
       isMostVisited: false
       },
       {
        longitude: 31.245200000000068,
        latitude: 30.055400000000077,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Diabco Electric",
       isMostVisited: false
       },
       {
        longitude: 31.24232260000008,
        latitude: 30.050770400000033,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Azmy",
       isMostVisited: false
       },
       {
        longitude: 31.242347100000075,
        latitude: 30.052099500000054,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "City Style",
       isMostVisited: false
       },
       {
        longitude: 31.240073100000075,
        latitude: 30.05012480000005,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Talaat Harb Mall",
       isMostVisited: false
       },
       {
        longitude: 31.23845360000007,
        latitude: 30.047598100000073,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Talaat Harb Square",
       isMostVisited: false
       },
       {
        longitude: 31.240369900000076,
        latitude: 30.050880800000073,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Shalimar",
       isMostVisited: false
       },
       {
        longitude: 31.254270200000065,
        latitude: 30.08897520000005,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "القط",
       isMostVisited: false
       },
       {
        longitude: 31.234712900000034,
        latitude: 30.046714200000054,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Downtown Cairo",
       isMostVisited: false
       },
       {
        longitude: 31.215894500000047,
        latitude: 30.08146970000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "مكتب طلعت حرب لخدمات الكمبيوتر",
       isMostVisited: false
       },
       {
        longitude: 31.23930400000006,
        latitude: 30.04511830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "EL Gammal Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.239271700000074,
        latitude: 30.045814500000063,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Electronics Maintenance Center Bab El Louk",
       isMostVisited: false
       },
       {
        longitude: 31.23951290000008,
        latitude: 30.046082900000044,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Free Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.23571160000006,
        latitude: 30.044419600000026,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "electronics",
       isMostVisited: false
       },
       {
        longitude: 31.246684900000048,
        latitude: 30.044957600000032,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "فرع LG للالكترونيات",
       isMostVisited: false
       },
       {
        longitude: 31.24962030000006,
        latitude: 30.04848000000004,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "صابر سنتر",
       isMostVisited: false
       },
       {
        longitude: 31.238827100000037,
        latitude: 30.044786400000078,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "مركز الفلكي لصيانة الشاشات",
       isMostVisited: false
       },
       {
        longitude: 31.24495410000003,
        latitude: 30.055140900000026,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "الشركة العصرية لتجارة الادوات الكهربائية‎",
       isMostVisited: false
       },
       {
        longitude: 31.238504600000056,
        latitude: 30.04565830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "توبى كمبيوتر",
       isMostVisited: false
       },
       {
        longitude: 31.245200000000068,
        latitude: 30.055400000000077,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Diabco Electric",
       isMostVisited: false
       },
       {
        longitude: 31.23632790000005,
        latitude: 30.04425150000003,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "B.TECH - Tahrir",
       isMostVisited: false
       },
       {
        longitude: 31.23930400000006,
        latitude: 30.04511830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "EL Gammal Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.246684900000048,
        latitude: 30.044957600000032,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "فرع LG للالكترونيات",
       isMostVisited: false
       },
       {
        longitude: 31.236964400000033,
        latitude: 30.045022800000027,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "توب ألكترونيك",
       isMostVisited: false
       },
       {
        longitude: 31.245004400000028,
        latitude: 30.05228640000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "B.TECH - 26th July",
       isMostVisited: false
       },
       {
        longitude: 31.23571160000006,
        latitude: 30.044419600000026,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "electronics",
       isMostVisited: false
       },
       {
        longitude: 31.24856580000005,
        latitude: 30.047418700000037,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "سوق عبدالعزيز للاجهزة الكهربائية المنزلية وبيع التلفونات السيار",
       isMostVisited: false
       },
       {
        longitude: 31.248079000000075,
        latitude: 30.055417700000078,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "المصطفى لقطع غيار الاجهزة المنزلية",
       isMostVisited: false
       },
       {
        longitude: 31.24962030000006,
        latitude: 30.04848000000004,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "صابر سنتر",
       isMostVisited: false
       },
       {
        longitude: 31.247747900000036,
        latitude: 30.04630050000003,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "El Saedy",
       isMostVisited: false
       },
       {
        longitude: 31.24348930000008,
        latitude: 30.04548820000008,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "الحوفى ستورز",
       isMostVisited: false
       },
       {
        longitude: 31.23515240000006,
        latitude: 30.057529700000032,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "ابو علم",
       isMostVisited: false
       },
       {
        longitude: 31.244762500000036,
        latitude: 30.047018500000036,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "الحوفى",
       isMostVisited: false
       },
       {
        longitude: 31.24768400000005,
        latitude: 30.05535400000008,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "ابو سيف للتوريدات الكهربائية",
       isMostVisited: false
       },
       {
        longitude: 31.248079000000075,
        latitude: 30.055417700000078,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "المصطفى لقطع غيار الاجهزة المنزلية",
       isMostVisited: false
       },
       {
        longitude: 31.241081500000064,
        latitude: 30.045447400000057,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "الترقي",
       isMostVisited: false
       },
       {
        longitude: 31.23930400000006,
        latitude: 30.04511830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "EL Gammal Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.239099200000055,
        latitude: 30.045496400000047,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Hi Tech - Hossam Metwaly Sharaf",
       isMostVisited: false
       },
       {
        longitude: 31.246684900000048,
        latitude: 30.044957600000032,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "فرع LG للالكترونيات",
       isMostVisited: false
       },
       {
        longitude: 31.23571160000006,
        latitude: 30.044419600000026,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "electronics",
       isMostVisited: false
       },
       {
        longitude: 31.24962030000006,
        latitude: 30.04848000000004,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "صابر سنتر",
       isMostVisited: false
       },
       {
        longitude: 31.245200000000068,
        latitude: 30.055400000000077,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Diabco Electric",
       isMostVisited: false
       },
       {
        longitude: 31.238504600000056,
        latitude: 30.04565830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "توبى كمبيوتر",
       isMostVisited: false
       },
       {
        longitude: 31.237240000000043,
        latitude: 30.049529800000073,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "شامبليون",
       isMostVisited: false
       },
       {
        longitude: 31.241193700000053,
        latitude: 30.053211600000054,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "اليكتريك سنتر",
       isMostVisited: false
       },
       {
        longitude: 31.24962030000006,
        latitude: 30.04848000000004,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "صابر سنتر",
       isMostVisited: false
       },
       {
        longitude: 31.24495410000003,
        latitude: 30.055140900000026,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "الشركة العصرية لتجارة الادوات الكهربائية‎",
       isMostVisited: false
       },
       {
        longitude: 31.24232260000008,
        latitude: 30.050770400000033,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Azmy",
       isMostVisited: false
       },
       {
        longitude: 31.242347100000075,
        latitude: 30.052099500000054,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "City Style",
       isMostVisited: false
       },
       {
        longitude: 31.245200000000068,
        latitude: 30.055400000000077,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Diabco Electric",
       isMostVisited: false
       },
       {
        longitude: 31.23627870000007,
        latitude: 30.048451400000033,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Shamplion-Boutique",
       isMostVisited: false
       },
       {
        longitude: 31.23607110000006,
        latitude: 30.048459500000035,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "محل شمبليون ملابس",
       isMostVisited: false
       },
       {
        longitude: 31.237526200000048,
        latitude: 30.045543700000053,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Al Boustan Commercial Centre",
       isMostVisited: false
       },
       {
        longitude: 31.23930400000006,
        latitude: 30.04511830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "EL Gammal Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.23853450000007,
        latitude: 30.04556610000003,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "مول البستان للكمبيوتر",
       isMostVisited: false
       },
       {
        longitude: 31.238504600000056,
        latitude: 30.04565830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "توبى كمبيوتر",
       isMostVisited: false
       },
       {
        longitude: 31.23844070000007,
        latitude: 30.045485000000042,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "لاب تك",
       isMostVisited: false
       },
       {
        longitude: 31.238510400000052,
        latitude: 30.04557790000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Bit",
       isMostVisited: false
       },
       {
        longitude: 31.236964400000033,
        latitude: 30.045022800000027,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "توب ألكترونيك",
       isMostVisited: false
       },
       {
        longitude: 31.238514200000054,
        latitude: 30.04553080000005,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "على الامين",
       isMostVisited: false
       },
       {
        longitude: 31.238721100000078,
        latitude: 30.045719100000042,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "El-Badr Group",
       isMostVisited: false
       },
       {
        longitude: 31.246684900000048,
        latitude: 30.044957600000032,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "فرع LG للالكترونيات",
       isMostVisited: false
       },
       {
        longitude: 31.23930400000006,
        latitude: 30.04511830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "EL Gammal Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.246684900000048,
        latitude: 30.044957600000032,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "فرع LG للالكترونيات",
       isMostVisited: false
       },
       {
        longitude: 31.23571160000006,
        latitude: 30.044419600000026,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "electronics",
       isMostVisited: false
       },
       {
        longitude: 31.24856580000005,
        latitude: 30.047418700000037,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "سوق عبدالعزيز للاجهزة الكهربائية المنزلية وبيع التلفونات السيار",
       isMostVisited: false
       },
       {
        longitude: 31.24833380000007,
        latitude: 30.047447800000043,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Ala Barket Alah-Electricity Machines",
       isMostVisited: false
       },
       {
        longitude: 31.249262100000067,
        latitude: 30.048235900000066,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Abd El Aziz",
       isMostVisited: false
       },
       {
        longitude: 31.31869080000007,
        latitude: 30.123951300000044,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "وسط البلد",
       isMostVisited: false
       },
       {
        longitude: 31.238504600000056,
        latitude: 30.04565830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "توبى كمبيوتر",
       isMostVisited: false
       },
       {
        longitude: 31.24232260000008,
        latitude: 30.050770400000033,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Azmy",
       isMostVisited: false
       },
       {
        longitude: 31.237526200000048,
        latitude: 30.045543700000053,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Al Boustan Commercial Centre",
       isMostVisited: false
       },
       {
        longitude: 31.244774000000064,
        latitude: 30.055021600000032,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "العصرية للادوات الكهربائية",
       isMostVisited: false
       },
       {
        longitude: 31.23930400000006,
        latitude: 30.04511830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "EL Gammal Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.244381100000055,
        latitude: 30.05767050000003,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "DATCO SKF",
       isMostVisited: false
       },
       {
        longitude: 31.246684900000048,
        latitude: 30.044957600000032,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "فرع LG للالكترونيات",
       isMostVisited: false
       },
       {
        longitude: 31.23930400000006,
        latitude: 30.04511830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "EL Gammal Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.246684900000048,
        latitude: 30.044957600000032,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "فرع LG للالكترونيات",
       isMostVisited: false
       },
       {
        longitude: 31.23951290000008,
        latitude: 30.046082900000044,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Free Electronics",
       isMostVisited: false
       },
       {
        longitude: 31.23571160000006,
        latitude: 30.044419600000026,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "electronics",
       isMostVisited: false
       },
       {
        longitude: 31.249978600000077,
        latitude: 30.054471400000068,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "المعرض الدولى للاجهزة المنزلية‎",
       isMostVisited: false
       },
       {
        longitude: 31.238504600000056,
        latitude: 30.04565830000007,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "توبى كمبيوتر",
       isMostVisited: false
       },
       {
        longitude: 31.24856580000005,
        latitude: 30.047418700000037,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "سوق عبدالعزيز للاجهزة الكهربائية المنزلية وبيع التلفونات السيار",
       isMostVisited: false
       },
       {
        longitude: 31.24452270000006,
        latitude: 30.05521660000005,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "الهندسية",
       isMostVisited: false
       },
       {
        longitude: 31.244381100000055,
        latitude: 30.05767050000003,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "DATCO SKF",
       isMostVisited: false
       },
       {
        longitude: 31.243976200000077,
        latitude: 30.044573800000023,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Smart Fashion",
       isMostVisited: false
       },
       {
        longitude: 31.24962030000006,
        latitude: 30.04848000000004,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "صابر سنتر",
       isMostVisited: false
       },
       {
        longitude: 31.24232260000008,
        latitude: 30.050770400000033,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Azmy",
       isMostVisited: false
       },
       {
        longitude: 31.238627200000053,
        latitude: 30.045727600000077,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Allewaa",
       isMostVisited: false
       },
       {
        longitude: 31.24452270000006,
        latitude: 30.05521660000005,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "الهندسية",
       isMostVisited: false
       },
       {
        longitude: 31.237526200000048,
        latitude: 30.045543700000053,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Al Boustan Commercial Centre",
       isMostVisited: false
       },
       {
        longitude: 31.245200000000068,
        latitude: 30.055400000000077,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Diabco Electric",
       isMostVisited: false
       },
       {
        longitude: 31.242347100000075,
        latitude: 30.052099500000054,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "City Style",
       isMostVisited: false
       },
       {
        longitude: 31.242763400000058,
        latitude: 30.05608650000005,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "شركة الكرمة للتجارة والتوريدات الكهربائية",
       isMostVisited: false
       },
       {
        longitude: 31.244774000000064,
        latitude: 30.055021600000032,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "العصرية للادوات الكهربائية",
       isMostVisited: false
       },
       {
        longitude: 31.24406440000007,
        latitude: 30.052696600000047,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "مؤسسة اولاد",
       isMostVisited: false
       },
       {
        longitude: 31.244521700000064,
        latitude: 30.055653300000074,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Eamar Electric",
       isMostVisited: false
       },
       {
        longitude: 31.23841770000007,
        latitude: 30.044471100000067,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "كونتاجا التجارية‎",
       isMostVisited: false
       },
       {
        longitude: 31.246627800000056,
        latitude: 30.059726600000033,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "ال جى للالكترونيات",
       isMostVisited: false
       },
       {
        longitude: 31.236572400000057,
        latitude: 30.045097800000065,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "شركة بنها للصناعات الإلكترونية",
       isMostVisited: false
       },
       {
        longitude: 31.234712900000034,
        latitude: 30.046714200000054,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "أدوات تصوير",
       isMostVisited: false
       },
       {
        longitude: 31.245091500000058,
        latitude: 30.055287600000042,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "الراعى للتوريدات الكهربائية",
       isMostVisited: false
       },
       {
        longitude: 31.245077300000048,
        latitude: 30.05559070000004,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "تكنو اليكترك",
       isMostVisited: false
       },
       {
        longitude: 31.248079000000075,
        latitude: 30.055417700000078,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "المصطفى لقطع غيار الاجهزة المنزلية",
       isMostVisited: false
       },
       {
        longitude: 31.24838070000004,
        latitude: 30.05507280000006,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "الشركة التجارية للكهرباء",
       isMostVisited: false
       },
       {
        longitude: 31.247658400000034,
        latitude: 30.055341000000055,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "اولاد عبيد للادوات الكهربائية‎",
       isMostVisited: false
       },
       {
        longitude: 31.249978600000077,
        latitude: 30.054471400000068,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "المعرض الدولى للاجهزة المنزلية‎",
       isMostVisited: false
       },
       {
        longitude: 31.250270700000044,
        latitude: 30.054156600000056,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "El Safa For Air Condition",
       isMostVisited: false
       },
       {
        longitude: 31.248950500000035,
        latitude: 30.055002400000035,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "Economic Co.",
       isMostVisited: false
       },
       {
        longitude: 31.247999700000037,
        latitude: 30.055276700000036,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "شركة بيشوى للتجارة",
       isMostVisited: false
       },
       {
        longitude: 31.249677100000042,
        latitude: 30.054442100000074,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "كنترول سيستم للتوريدات الكهربائية",
       isMostVisited: false
       },
       {
        longitude: 31.249563600000045,
        latitude: 30.05468090000005,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "شركة العبودى لقطع غيار الغسالات الفول اتوماتيك والنصف اتوماتيك",
       isMostVisited: false
       },
       {
        longitude: 31.24807030000005,
        latitude: 30.055422300000032,
        code: 1002,
        city: 1010,
        cityName: "Cairo",
        name: "ام ام لتجارة قطع غيار التبريد والتكييف",
       isMostVisited: false
       },




      {
       longitude: 31.240085300000032,
       latitude: 30.050688600000058,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Lorando",
    isMostVisited: false
      },
      {
       longitude: 31.24056920000004,
       latitude: 30.05089940000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Bola",
    isMostVisited: false
      },
      {
       longitude: 31.237666000000047,
       latitude: 30.04615700000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "نوسة للملابس",
    isMostVisited: false
      },
      {
       longitude: 31.23969930000004,
       latitude: 30.04811440000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "جود هاوس",
    isMostVisited: false
      },
      {
       longitude: 31.24006760000003,
       latitude: 30.049647900000025,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Blanche",
    isMostVisited: false
      },
      {
       longitude: 31.24006550000007,
       latitude: 30.050111800000025,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "TOWN TEAM",
    isMostVisited: false
      },
      {
       longitude: 31.238432100000068,
       latitude: 30.047974600000032,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "CHERRY",
    isMostVisited: false
      },
      {
       longitude: 31.23740840000005,
       latitude: 30.046124700000064,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "First Man",
    isMostVisited: false
      },
      {
       longitude: 31.236870000000067,
       latitude: 30.04546460000006,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Qasr Shahrazad For Clothes",
    isMostVisited: false
      },
      {
       longitude: 31.240056800000048,
       latitude: 30.05009720000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Estras",
    isMostVisited: false
      },
      {
       longitude: 31.24105510000004,
       latitude: 30.051665400000047,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محلات ونان",
    isMostVisited: false
      },
      {
       longitude: 31.23834370000003,
       latitude: 30.047892800000056,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "سيمون - Simone",
    isMostVisited: false
      },
      {
       longitude: 31.23571160000006,
       latitude: 30.044419600000026,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Dutti",
    isMostVisited: false
      },
      {
       longitude: 31.240857900000037,
       latitude: 30.051365100000055,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Men's Club",
    isMostVisited: false
      },
      {
       longitude: 31.240496300000075,
       latitude: 30.05080170000008,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Shalimar",
    isMostVisited: false
      },
      {
       longitude: 31.241030400000056,
       latitude: 30.05198910000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Sure Line for Men's wear and uniform شورلاين للملابس الجاهزة",
    isMostVisited: false
      },
      {
       longitude: 31.238126400000056,
       latitude: 30.04802140000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "مكتب راناش ملابس حريمى",
    isMostVisited: false
      },
      {
       longitude: 31.241063300000064,
       latitude: 30.048647500000072,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Candy Marsh",
    isMostVisited: false
      },
      {
       longitude: 31.240008700000033,
       latitude: 30.048253600000066,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "El Kawthar",
    isMostVisited: false
      },
      {
       longitude: 31.241787500000044,
       latitude: 30.052924000000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "فريندز",
    isMostVisited: false
      },
      {
       longitude: 31.241787500000044,
       latitude: 30.052924000000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "فريندز",
    isMostVisited: false
      },
      {
       longitude: 31.24224350000003,
       latitude: 30.052920200000074,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Kazary",
    isMostVisited: false
      },
      {
       longitude: 31.239212300000077,
       latitude: 30.04837450000008,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Naga Homme",
    isMostVisited: false
      },
      {
       longitude: 31.24100640000006,
       latitude: 30.051591400000063,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "NEW BRAND",
    isMostVisited: false
      },
      {
       longitude: 31.23976680000004,
       latitude: 30.04782700000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Carina",
    isMostVisited: false
      },
      {
       longitude: 31.242116100000032,
       latitude: 30.053043900000034,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Ossama Aziz",
    isMostVisited: false
      },
      {
       longitude: 31.238998800000047,
       latitude: 30.04803940000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Georges Men's wear",
    isMostVisited: false
      },
      {
       longitude: 31.236790300000052,
       latitude: 30.045325200000036,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Onado",
    isMostVisited: false
      },
      {
       longitude: 31.238169200000073,
       latitude: 30.046961100000033,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Nour El Ain",
    isMostVisited: false
      },
      {
       longitude: 31.240369900000076,
       latitude: 30.050880800000073,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Kazary - كازارى للملابس الرجالى",
    isMostVisited: false
      },
      {
       longitude: 31.238701800000058,
       latitude: 30.047332100000062,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Givil",
    isMostVisited: false
      },
      {
       longitude: 31.24004830000007,
       latitude: 30.050082700000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Leonard",
    isMostVisited: false
      },
      {
       longitude: 31.239865800000075,
       latitude: 30.049712600000078,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "يحيى ميجا ستور للاحذيه",
    isMostVisited: false
      },
      {
       longitude: 31.240099300000054,
       latitude: 30.050169200000028,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "2 Side",
    isMostVisited: false
      },
      {
       longitude: 31.240950300000065,
       latitude: 30.050613300000066,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "مكتب أسامة عزيز",
    isMostVisited: false
      },
      {
       longitude: 31.24045760000007,
       latitude: 30.051261100000033,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "ميلانو سنتر",
    isMostVisited: false
      },
      {
       longitude: 31.24138920000007,
       latitude: 30.04995660000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "BigBen",
    isMostVisited: false
      },
      {
       longitude: 31.241779800000074,
       latitude: 30.05290130000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "المصطفى للبدل الرجالى",
    isMostVisited: false
      },
      {
       longitude: 31.24061030000007,
       latitude: 30.051481300000034,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "TiE HOUSE",
    isMostVisited: false
      },
      {
       longitude: 31.241350200000056,
       latitude: 30.052355700000078,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Bavly",
    isMostVisited: false
      },
      {
       longitude: 31.24012460000006,
       latitude: 30.05021160000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Abdel Hafez",
    isMostVisited: false
      },
      {
       longitude: 31.240056800000048,
       latitude: 30.05009720000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Tid Lamond",
    isMostVisited: false
      },
      {
       longitude: 31.239999500000067,
       latitude: 30.048303600000054,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "فانتازيا",
    isMostVisited: false
      },
      {
       longitude: 31.240462800000046,
       latitude: 30.050103200000024,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "One Man",
    isMostVisited: false
      },
      {
       longitude: 31.23969610000006,
       latitude: 30.05017600000008,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "2 Run",
    isMostVisited: false
      },
      {
       longitude: 31.24319070000007,
       latitude: 30.049420600000076,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Chance",
    isMostVisited: false
      },
      {
       longitude: 31.238455600000066,
       latitude: 30.047174100000063,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Lastella Talaat Harb",
    isMostVisited: false
      },
      {
       longitude: 31.242116100000032,
       latitude: 30.053043900000034,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Shaalan",
    isMostVisited: false
      },
      {
       longitude: 31.24398290000005,
       latitude: 30.051724200000024,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محل سندباد - Sindbad Stoe",
    isMostVisited: false
      },
      {
       longitude: 31.241862300000037,
       latitude: 30.049074400000052,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "CHATEAU",
    isMostVisited: false
      },
      {
       longitude: 31.241334900000027,
       latitude: 30.05209140000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Mega ملابس",
    isMostVisited: false
      },
      {
       longitude: 31.24061910000006,
       latitude: 30.05121440000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "M.h",
    isMostVisited: false
      },
      {
       longitude: 31.23607110000006,
       latitude: 30.048459500000035,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محل شمبليون ملابس",
    isMostVisited: false
      },
      {
       longitude: 31.241030400000056,
       latitude: 30.05198910000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "بوب فاشون - Pop Fashion",
    isMostVisited: false
      },
      {
       longitude: 31.241030400000056,
       latitude: 30.05198910000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "التالته شمال للملابس الرياضية",
    isMostVisited: false
      },
      {
       longitude: 31.240369900000076,
       latitude: 30.050880800000073,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "ستايل مان للبدل الرجالي",
    isMostVisited: false
      },
      {
       longitude: 31.242116100000032,
       latitude: 30.053043900000034,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Mony Work",
    isMostVisited: false
      },
      {
       longitude: 31.23929460000005,
       latitude: 30.050266600000043,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "CR7",
    isMostVisited: false
      },
      {
       longitude: 31.241179400000078,
       latitude: 30.051854700000035,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Tatu 2",
    isMostVisited: false
      },
      {
       longitude: 31.239602300000058,
       latitude: 30.049842200000057,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Target",
    isMostVisited: false
      },
      {
       longitude: 31.239980600000024,
       latitude: 30.048248100000023,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "مارولا",
    isMostVisited: false
      },
      {
       longitude: 31.237234100000023,
       latitude: 30.045875800000033,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "4u",
    isMostVisited: false
      },
      {
       longitude: 31.240067800000077,
       latitude: 30.050430300000073,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Dakoor",
    isMostVisited: false
      },
      {
       longitude: 31.240086500000075,
       latitude: 30.05014730000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Dott",
    isMostVisited: false
      },
      {
       longitude: 31.241947800000048,
       latitude: 30.051316100000065,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "CONCRETE",
    isMostVisited: false
      },
      {
       longitude: 31.24210960000005,
       latitude: 30.052246400000058,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Scarf Shop",
    isMostVisited: false
      },
      {
       longitude: 31.242104700000027,
       latitude: 30.048981000000026,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "صاصى",
    isMostVisited: false
      },
      {
       longitude: 31.24299250000007,
       latitude: 30.052370300000064,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "أوبوتييه",
    isMostVisited: false
      },
      {
       longitude: 31.240080100000057,
       latitude: 30.050136500000065,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "And 1",
    isMostVisited: false
      },
      {
       longitude: 31.240042800000026,
       latitude: 30.05007370000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Abou Alaa",
    isMostVisited: false
      },
      {
       longitude: 31.24059340000008,
       latitude: 30.05118760000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "مكتب سنوب",
    isMostVisited: false
      },
      {
       longitude: 31.23571160000006,
       latitude: 30.044419600000026,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "woman clothes",
    isMostVisited: false
      },
      {
       longitude: 31.242116100000032,
       latitude: 30.053043900000034,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Lorando",
    isMostVisited: false
      },
      {
       longitude: 31.240668200000073,
       latitude: 30.04940830000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Jamaica.MegaStore",
    isMostVisited: false
      },
      {
       longitude: 31.239255600000035,
       latitude: 30.050241700000072,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Twelve",
    isMostVisited: false
      },
      {
       longitude: 31.23892920000003,
       latitude: 30.047953500000062,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Mobaco Cottons",
    isMostVisited: false
      },
      {
       longitude: 31.24161890000005,
       latitude: 30.05200300000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "جولدن مان هاوس",
    isMostVisited: false
      },
      {
       longitude: 31.243927400000075,
       latitude: 30.05245510000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "كوبال",
    isMostVisited: false
      },
      {
       longitude: 31.239577100000076,
       latitude: 30.048920700000053,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Voiki",
    isMostVisited: false
      },
      {
       longitude: 31.24472490000005,
       latitude: 30.052416700000038,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Bianco",
    isMostVisited: false
      },
      {
       longitude: 31.243189200000074,
       latitude: 30.04925030000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "يارا",
    isMostVisited: false
      },
      {
       longitude: 31.240076300000055,
       latitude: 30.048316000000057,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "سقراط",
    isMostVisited: false
      },
      {
       longitude: 31.241385000000037,
       latitude: 30.048673500000064,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Soha Style",
    isMostVisited: false
      },
      {
       longitude: 31.240381400000047,
       latitude: 30.048226200000045,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Casileya",
    isMostVisited: false
      },
      {
       longitude: 31.24006010000005,
       latitude: 30.050102800000047,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "New Born",
    isMostVisited: false
      },
      {
       longitude: 31.24115210000008,
       latitude: 30.05181310000006,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Walker",
    isMostVisited: false
      },
      {
       longitude: 31.239773800000023,
       latitude: 30.04816990000006,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Clue",
    isMostVisited: false
      },
      {
       longitude: 31.245277300000055,
       latitude: 30.052709700000037,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "اركوفاشون",
    isMostVisited: false
      },
      {
       longitude: 31.245964800000024,
       latitude: 30.052091700000062,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Roudy Mode",
    isMostVisited: false
      },
      {
       longitude: 31.24014630000005,
       latitude: 30.048380500000064,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Lacaza",
    isMostVisited: false
      },
      {
       longitude: 31.243839000000037,
       latitude: 30.052702400000044,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Sama",
    isMostVisited: false
      },
      {
       longitude: 31.239198200000033,
       latitude: 30.050460900000076,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "7XL Men's Wear \"Big Size\" سڤن اكس لارج للمقاسات الخاصة",
    isMostVisited: false
      },
      {
       longitude: 31.241059300000074,
       latitude: 30.050611400000037,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "العتمانى",
    isMostVisited: false
      },
      {
       longitude: 31.24062370000007,
       latitude: 30.050972400000035,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Adel Abu Hemila",
    isMostVisited: false
      },
      {
       longitude: 31.239984200000038,
       latitude: 30.049036900000033,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محل بدل وملابسLAAVRD",
    isMostVisited: false
      },
      {
       longitude: 31.241039200000046,
       latitude: 30.05037710000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "سنيور أميجو",
    isMostVisited: false
      },
      {
       longitude: 31.24053420000007,
       latitude: 30.050249300000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "فلاش",
    isMostVisited: false
      },
      {
       longitude: 31.239920700000027,
       latitude: 30.050129600000048,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Active",
    isMostVisited: false
      },
      {
       longitude: 31.241097900000057,
       latitude: 30.048721700000044,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "شركة مارولا للملابس الجاهزة",
    isMostVisited: false
      },
      {
       longitude: 31.243991900000026,
       latitude: 30.050618900000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "El Kady & Hussein",
    isMostVisited: false
      },
      {
       longitude: 31.24041710000006,
       latitude: 30.048224300000072,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Al Motahajiba",
    isMostVisited: false
      },
      {
       longitude: 31.238222000000064,
       latitude: 30.047812700000065,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Tulip",
    isMostVisited: false
      },
      {
       longitude: 31.239531500000055,
       latitude: 30.04943080000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "TiE HOUSE",
    isMostVisited: false
      },
      {
       longitude: 31.23389620000006,
       latitude: 30.055357900000047,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "West El Balad",
    isMostVisited: false
      },
      {
       longitude: 31.241693600000076,
       latitude: 30.048741600000028,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Chalons",
    isMostVisited: false
      },
      {
       longitude: 31.240969800000073,
       latitude: 30.05105050000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محل الاسوانى للبدل الرجالي",
    isMostVisited: false
      },
      {
       longitude: 31.238253300000054,
       latitude: 30.04782840000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "بدل بسعر المصنع",
    isMostVisited: false
      },
      {
       longitude: 31.238774300000046,
       latitude: 30.048374300000035,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Karas Kids",
    isMostVisited: false
      },
      {
       longitude: 31.240801400000066,
       latitude: 30.05121040000006,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "De Backer s",
    isMostVisited: false
      },
      {
       longitude: 31.24080710000004,
       latitude: 30.050615900000025,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "El -Mahd",
    isMostVisited: false
      },
      {
       longitude: 31.24093110000007,
       latitude: 30.04829330000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Canilli",
    isMostVisited: false
      },
      {
       longitude: 31.24499060000005,
       latitude: 30.052287200000023,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Remember",
    isMostVisited: false
      },
      {
       longitude: 31.239848600000073,
       latitude: 30.050131600000043,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Ticker",
    isMostVisited: false
      },
      {
       longitude: 31.240066400000046,
       latitude: 30.050113500000066,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "ترو",
    isMostVisited: false
      },
      {
       longitude: 31.23767600000008,
       latitude: 30.047270000000026,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محلات العروسه",
    isMostVisited: false
      },
      {
       longitude: 31.234712900000034,
       latitude: 30.046714200000054,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محلات ابو فهمي للملابس والاحذيه",
    isMostVisited: false
      },
      {
       longitude: 31.243927300000053,
       latitude: 30.052409700000055,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "المنى سنتر",
    isMostVisited: false
      },
      {
       longitude: 31.240056800000048,
       latitude: 30.05009720000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Cellini",
    isMostVisited: false
      },
      {
       longitude: 31.245213100000058,
       latitude: 30.050247600000034,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Zarga",
    isMostVisited: false
      },
      {
       longitude: 31.242133800000033,
       latitude: 30.046476900000073,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Al Ahram Clothing (Men's Dept.)",
    isMostVisited: false
      },
      {
       longitude: 31.242879500000072,
       latitude: 30.052515800000037,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "الشاهبندر مقاسات كبيرة رجالي",
    isMostVisited: false
      },
      {
       longitude: 31.24002740000003,
       latitude: 30.04799120000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "فودو للملابس الجاهزة",
    isMostVisited: false
      },
      {
       longitude: 31.24081590000003,
       latitude: 30.04822340000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Kiki Riki",
    isMostVisited: false
      },
      {
       longitude: 31.239483800000073,
       latitude: 30.049533800000063,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Rolly",
    isMostVisited: false
      },
      {
       longitude: 31.241004200000077,
       latitude: 30.04900980000008,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Marie Louis",
    isMostVisited: false
      },
      {
       longitude: 31.236996500000032,
       latitude: 30.052145100000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "ONE &1",
    isMostVisited: false
      },
      {
       longitude: 31.241209900000058,
       latitude: 30.051901100000066,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "قطونيل(فرع رئيسي)ملابس قطنية وجوارب",
    isMostVisited: false
      },
      {
       longitude: 31.24269510000005,
       latitude: 30.052381500000024,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Maurice Hanna",
    isMostVisited: false
      },
      {
       longitude: 31.24332270000008,
       latitude: 30.052427700000067,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "بور فؤاد T.k",
    isMostVisited: false
      },
      {
       longitude: 31.243692000000067,
       latitude: 30.04699020000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Burston حامد عبد الخالق",
    isMostVisited: false
      },
      {
       longitude: 31.240313400000048,
       latitude: 30.048087700000053,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "بون بون قصر النيل",
    isMostVisited: false
      },
      {
       longitude: 31.242220100000054,
       latitude: 30.05056890000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Land Rose Lingerie",
    isMostVisited: false
      },
      {
       longitude: 31.245811900000035,
       latitude: 30.049506300000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "أم تى كاجوال \/ حريمى",
    isMostVisited: false
      },
      {
       longitude: 31.23571160000006,
       latitude: 30.044419600000026,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "قطونيل",
    isMostVisited: false
      },
      {
       longitude: 31.232364200000063,
       latitude: 30.045645500000035,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Mobaco Cottons",
    isMostVisited: false
      },
      {
       longitude: 31.239460700000052,
       latitude: 30.049573500000065,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "نيو كلفن",
    isMostVisited: false
      },
      {
       longitude: 31.24343950000008,
       latitude: 30.052461600000072,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Castle Kids",
    isMostVisited: false
      },
      {
       longitude: 31.243766700000037,
       latitude: 30.052783900000065,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Baqoroban",
    isMostVisited: false
      },
      {
       longitude: 31.237205300000028,
       latitude: 30.04792610000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Elghriany Sport Wear الغريانى للملابس الرياضيه",
    isMostVisited: false
      },
      {
       longitude: 31.241346600000043,
       latitude: 30.048628500000063,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محل كتاكيت kataket لملابس الاطفال",
    isMostVisited: false
      },
      {
       longitude: 31.235600900000065,
       latitude: 30.04760760000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "مكتب روسيل جملة حريمى كاجوال",
    isMostVisited: false
      },
      {
       longitude: 31.239621000000056,
       latitude: 30.048270200000047,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Daniel Hechter",
    isMostVisited: false
      },
      {
       longitude: 31.239989800000046,
       latitude: 30.051650900000027,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "مصنع ميشو بدلة سواريه اطفال",
    isMostVisited: false
      },
      {
       longitude: 31.24445810000003,
       latitude: 30.05597810000006,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Bab Abedo",
    isMostVisited: false
      },
      {
       longitude: 31.244356700000026,
       latitude: 30.050593500000048,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "TiE HOUSE",
    isMostVisited: false
      },
      {
       longitude: 31.24445910000003,
       latitude: 30.05192370000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Donia El Nagham",
    isMostVisited: false
      },
      {
       longitude: 31.244356200000027,
       latitude: 30.050588400000038,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Halawa",
    isMostVisited: false
      },
      {
       longitude: 31.243412900000067,
       latitude: 30.053188100000057,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Islam Fashion",
    isMostVisited: false
      },
      {
       longitude: 31.23566450000004,
       latitude: 30.051560400000028,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "ملابس رجالي",
    isMostVisited: false
      },
      {
       longitude: 31.244435200000055,
       latitude: 30.05135800000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "بيوتى سيكرت",
    isMostVisited: false
      },
      {
       longitude: 31.242879600000037,
       latitude: 30.05251570000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "ال النونو",
    isMostVisited: false
      },
      {
       longitude: 31.242593200000044,
       latitude: 30.052801200000033,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "LAVITO",
    isMostVisited: false
      },
      {
       longitude: 31.246519900000067,
       latitude: 30.051971200000025,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Tres Cheque Center",
    isMostVisited: false
      },
      {
       longitude: 31.23571160000006,
       latitude: 30.044419600000026,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Embrator",
    isMostVisited: false
      },
      {
       longitude: 31.240064000000075,
       latitude: 30.05010930000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Fire Wood",
    isMostVisited: false
      },
      {
       longitude: 31.24139830000007,
       latitude: 30.048782500000073,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "El Saloun El Akhdar",
    isMostVisited: false
      },
      {
       longitude: 31.244528400000036,
       latitude: 30.050802800000042,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Jil",
    isMostVisited: false
      },
      {
       longitude: 31.244600800000057,
       latitude: 30.05128570000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "ميس فينوس فرع وسط البلد (ابتسام)",
    isMostVisited: false
      },
      {
       longitude: 31.250638800000047,
       latitude: 30.050628500000073,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Halawa",
    isMostVisited: false
      },
      {
       longitude: 31.24238340000005,
       latitude: 30.052771300000074,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Flash",
    isMostVisited: false
      },
      {
       longitude: 31.240760700000067,
       latitude: 30.04823730000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "S.B.R",
    isMostVisited: false
      },
      {
       longitude: 31.24139830000007,
       latitude: 30.049351200000046,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Arzaq El Shawarby",
    isMostVisited: false
      },
      {
       longitude: 31.240929900000026,
       latitude: 30.053014400000052,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "New Born",
    isMostVisited: false
      },
      {
       longitude: 31.245263700000066,
       latitude: 30.05237500000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Euro Style",
    isMostVisited: false
      },
      {
       longitude: 31.23292200000003,
       latitude: 30.055773800000054,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "الحشمة store",
    isMostVisited: false
      },
      {
       longitude: 31.242129900000066,
       latitude: 30.046542200000033,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Diadora",
    isMostVisited: false
      },
      {
       longitude: 31.239455500000076,
       latitude: 30.048319500000048,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Peak Sport Down Town",
    isMostVisited: false
      },
      {
       longitude: 31.24599150000006,
       latitude: 30.052272500000072,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "فرى لاين",
    isMostVisited: false
      },
      {
       longitude: 31.244222600000057,
       latitude: 30.052790000000073,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Baby Loran",
    isMostVisited: false
      },
      {
       longitude: 31.242255600000078,
       latitude: 30.052430600000037,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "حواديت",
    isMostVisited: false
      },
      {
       longitude: 31.241385000000037,
       latitude: 30.048673500000064,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Gioia",
    isMostVisited: false
      },
      {
       longitude: 31.24318040000003,
       latitude: 30.04823520000008,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Underground Store",
    isMostVisited: false
      },
      {
       longitude: 31.23964140000004,
       latitude: 30.049101000000064,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Red Cotton",
    isMostVisited: false
      },
      {
       longitude: 31.239574400000038,
       latitude: 30.053249100000073,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "الحشمة ملابس اوربية",
    isMostVisited: false
      },
      {
       longitude: 31.24259310000008,
       latitude: 30.05055610000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "ايمن للملابس",
    isMostVisited: false
      },
      {
       longitude: 31.238507200000072,
       latitude: 30.047904600000038,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محل لاند مارك للملابس الجاهزة",
    isMostVisited: false
      },
      {
       longitude: 31.241058500000065,
       latitude: 30.05167060000008,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Tawfik bichay",
    isMostVisited: false
      },
      {
       longitude: 31.240073100000075,
       latitude: 30.05012480000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Talaat Harb Mall",
    isMostVisited: false
      },
      {
       longitude: 31.242052900000033,
       latitude: 30.046738300000072,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Al Ahram Clothing",
    isMostVisited: false
      },
      {
       longitude: 31.24594510000003,
       latitude: 30.05145730000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "فرج الله",
    isMostVisited: false
      },
      {
       longitude: 31.240579000000025,
       latitude: 30.050842000000046,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Kimo Fashion",
    isMostVisited: false
      },
      {
       longitude: 31.242890100000068,
       latitude: 30.052808800000037,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Farah",
    isMostVisited: false
      },
      {
       longitude: 31.238204900000028,
       latitude: 30.04593570000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "بلو جينز",
    isMostVisited: false
      },
      {
       longitude: 31.24408130000006,
       latitude: 30.051895200000047,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Rose Kids Downtown \/ روز كيدز وسط البلد",
    isMostVisited: false
      },
      {
       longitude: 31.243976200000077,
       latitude: 30.044573800000023,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Veronique",
    isMostVisited: false
      },
      {
       longitude: 31.239538500000037,
       latitude: 30.049427600000058,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "U-TURN Talaat",
    isMostVisited: false
      },
      {
       longitude: 31.23854570000003,
       latitude: 30.047078800000065,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Beramiz",
    isMostVisited: false
      },
      {
       longitude: 31.241232800000034,
       latitude: 30.052382600000044,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Bianco",
    isMostVisited: false
      },
      {
       longitude: 31.242273200000056,
       latitude: 30.051959000000068,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "قطونيل اول شارع شريف بحوار حلواني العبد",
    isMostVisited: false
      },
      {
       longitude: 31.240056800000048,
       latitude: 30.05009720000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Kasper",
    isMostVisited: false
      },
      {
       longitude: 31.240056800000048,
       latitude: 30.05009720000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Kasper",
    isMostVisited: false
      },
      {
       longitude: 31.23571160000006,
       latitude: 30.044419600000026,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "جلباب رجالي",
    isMostVisited: false
      },
      {
       longitude: 31.244220900000073,
       latitude: 30.047312500000032,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "سنترال الرياضية",
    isMostVisited: false
      },
      {
       longitude: 31.24310200000008,
       latitude: 30.05050190000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Gabr For Clothes",
    isMostVisited: false
      },
      {
       longitude: 31.23571160000006,
       latitude: 30.044419600000026,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Outlet Store",
    isMostVisited: false
      },
      {
       longitude: 31.240795400000025,
       latitude: 30.05081690000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Number One",
    isMostVisited: false
      },
      {
       longitude: 31.240122600000063,
       latitude: 30.047279900000035,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "St. Michel clothing store",
    isMostVisited: false
      },
      {
       longitude: 31.240026800000066,
       latitude: 30.04799090000006,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Arousa العروسة",
    isMostVisited: false
      },
      {
       longitude: 31.240111300000024,
       latitude: 30.048348300000043,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Stook House",
    isMostVisited: false
      },
      {
       longitude: 31.240733500000033,
       latitude: 30.048228300000062,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Just Cute",
    isMostVisited: false
      },
      {
       longitude: 31.23389620000006,
       latitude: 30.055357900000047,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "West El Balad",
    isMostVisited: false
      },
      {
       longitude: 31.240085300000032,
       latitude: 30.050688600000058,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Lorando",
    isMostVisited: false
      },
      {
       longitude: 31.240008700000033,
       latitude: 30.048253600000066,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "El Kawthar",
    isMostVisited: false
      },
      {
       longitude: 31.23969930000004,
       latitude: 30.04811440000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "جود هاوس",
    isMostVisited: false
      },
      {
       longitude: 31.239999500000067,
       latitude: 30.048303600000054,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "فانتازيا",
    isMostVisited: false
      },
      {
       longitude: 31.239212300000077,
       latitude: 30.04837450000008,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Naga Homme",
    isMostVisited: false
      },
      {
       longitude: 31.23976680000004,
       latitude: 30.04782700000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Carina",
    isMostVisited: false
      },
      {
       longitude: 31.241063300000064,
       latitude: 30.048647500000072,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Candy Marsh",
    isMostVisited: false
      },
      {
       longitude: 31.238126400000056,
       latitude: 30.04802140000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "مكتب راناش ملابس حريمى",
    isMostVisited: false
      },
      {
       longitude: 31.237666000000047,
       latitude: 30.04615700000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "نوسة للملابس",
    isMostVisited: false
      },
      {
       longitude: 31.24004830000007,
       latitude: 30.050082700000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Leonard",
    isMostVisited: false
      },
      {
       longitude: 31.241862300000037,
       latitude: 30.049074400000052,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "CHATEAU",
    isMostVisited: false
      },
      {
       longitude: 31.240076300000055,
       latitude: 30.048316000000057,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "سقراط",
    isMostVisited: false
      },
      {
       longitude: 31.23834370000003,
       latitude: 30.047892800000056,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "سيمون - Simone",
    isMostVisited: false
      },
      {
       longitude: 31.239773800000023,
       latitude: 30.04816990000006,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Clue",
    isMostVisited: false
      },
      {
       longitude: 31.240950300000065,
       latitude: 30.050613300000066,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "مكتب أسامة عزيز",
    isMostVisited: false
      },
      {
       longitude: 31.23892920000003,
       latitude: 30.047953500000062,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Mobaco Cottons",
    isMostVisited: false
      },
      {
       longitude: 31.23740840000005,
       latitude: 30.046124700000064,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "First Man",
    isMostVisited: false
      },
      {
       longitude: 31.24006550000007,
       latitude: 30.050111800000025,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "TOWN TEAM",
    isMostVisited: false
      },
      {
       longitude: 31.239602300000058,
       latitude: 30.049842200000057,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Target",
    isMostVisited: false
      },
      {
       longitude: 31.239602300000058,
       latitude: 30.049842200000057,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Target",
    isMostVisited: false
      },
      {
       longitude: 31.239255600000035,
       latitude: 30.050241700000072,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Twelve",
    isMostVisited: false
      },
      {
       longitude: 31.24105510000004,
       latitude: 30.051665400000047,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محلات ونان",
    isMostVisited: false
      },
      {
       longitude: 31.240496300000075,
       latitude: 30.05080170000008,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Shalimar",
    isMostVisited: false
      },
      {
       longitude: 31.240857900000037,
       latitude: 30.051365100000055,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Men's Club",
    isMostVisited: false
      },
      {
       longitude: 31.24398290000005,
       latitude: 30.051724200000024,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محل سندباد - Sindbad Stoe",
    isMostVisited: false
      },
      {
       longitude: 31.24012460000006,
       latitude: 30.05021160000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Abdel Hafez",
    isMostVisited: false
      },
      {
       longitude: 31.24224350000003,
       latitude: 30.052920200000074,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Kazary",
    isMostVisited: false
      },
      {
       longitude: 31.24123110000005,
       latitude: 30.052392600000076,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Hero",
    isMostVisited: false
      },
      {
       longitude: 31.240082700000073,
       latitude: 30.050141100000076,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Graffiti",
    isMostVisited: false
      },
      {
       longitude: 31.241693600000076,
       latitude: 30.048741600000028,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Chalons",
    isMostVisited: false
      },
      {
       longitude: 31.240042800000026,
       latitude: 30.05007370000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Abou Alaa",
    isMostVisited: false
      },
      {
       longitude: 31.240080100000057,
       latitude: 30.050136500000065,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "And 1",
    isMostVisited: false
      },
      {
       longitude: 31.241030400000056,
       latitude: 30.05198910000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Sure Line for Men's wear and uniform شورلاين للملابس الجاهزة",
    isMostVisited: false
      },
      {
       longitude: 31.242104700000027,
       latitude: 30.048981000000026,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "صاصى",
    isMostVisited: false
      },
      {
       longitude: 31.242116100000032,
       latitude: 30.053043900000034,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Ossama Aziz",
    isMostVisited: false
      },
      {
       longitude: 31.243991900000026,
       latitude: 30.050618900000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "El Kady & Hussein",
    isMostVisited: false
      },
      {
       longitude: 31.245277300000055,
       latitude: 30.052709700000037,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "اركوفاشون",
    isMostVisited: false
      },
      {
       longitude: 31.241787500000044,
       latitude: 30.052924000000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "فريندز",
    isMostVisited: false
      },
      {
       longitude: 31.236870000000067,
       latitude: 30.04546460000006,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Qasr Shahrazad For Clothes",
    isMostVisited: false
      },
      {
       longitude: 31.24472490000005,
       latitude: 30.052416700000038,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Bianco",
    isMostVisited: false
      },
      {
       longitude: 31.24041710000006,
       latitude: 30.048224300000072,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Al Motahajiba",
    isMostVisited: false
      },
      {
       longitude: 31.236870000000067,
       latitude: 30.04546460000006,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Qasr Shahrazad For Clothes",
    isMostVisited: false
      },
      {
       longitude: 31.23607110000006,
       latitude: 30.048459500000035,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محل شمبليون ملابس",
    isMostVisited: false
      },
      {
       longitude: 31.24138920000007,
       latitude: 30.04995660000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "BigBen",
    isMostVisited: false
      },
      {
       longitude: 31.24081590000003,
       latitude: 30.04822340000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Kiki Riki",
    isMostVisited: false
      },
      {
       longitude: 31.241779800000074,
       latitude: 30.05290130000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "المصطفى للبدل الرجالى",
    isMostVisited: false
      },
      {
       longitude: 31.245964800000024,
       latitude: 30.052091700000062,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Roudy Mode",
    isMostVisited: false
      },
      {
       longitude: 31.240086500000075,
       latitude: 30.05014730000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Dott",
    isMostVisited: false
      },
      {
       longitude: 31.23767600000008,
       latitude: 30.047270000000026,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محلات العروسه",
    isMostVisited: false
      },
      {
       longitude: 31.238774300000046,
       latitude: 30.048374300000035,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Karas Kids",
    isMostVisited: false
      },
      {
       longitude: 31.23929460000005,
       latitude: 30.050266600000043,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "CR7",
    isMostVisited: false
      },
      {
       longitude: 31.238455600000066,
       latitude: 30.047174100000063,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Lastella Talaat Harb",
    isMostVisited: false
      },
      {
       longitude: 31.240668200000073,
       latitude: 30.04940830000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Jamaica.MegaStore",
    isMostVisited: false
      },
      {
       longitude: 31.23292200000003,
       latitude: 30.055773800000054,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "الحشمة store",
    isMostVisited: false
      },
      {
       longitude: 31.239920700000027,
       latitude: 30.050129600000048,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Active",
    isMostVisited: false
      },
      {
       longitude: 31.240056800000048,
       latitude: 30.05009720000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Tid Lamond",
    isMostVisited: false
      },
      {
       longitude: 31.238169200000073,
       latitude: 30.046961100000033,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Nour El Ain",
    isMostVisited: false
      },
      {
       longitude: 31.240462800000046,
       latitude: 30.050103200000024,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "One Man",
    isMostVisited: false
      },
      {
       longitude: 31.240940300000034,
       latitude: 30.051011000000074,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Diesel",
    isMostVisited: false
      },
      {
       longitude: 31.242297200000053,
       latitude: 30.051104800000076,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "المنصورى",
    isMostVisited: false
      },
      {
       longitude: 31.24161890000005,
       latitude: 30.05200300000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "جولدن مان هاوس",
    isMostVisited: false
      },
      {
       longitude: 31.243927300000053,
       latitude: 30.052409700000055,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "المنى سنتر",
    isMostVisited: false
      },
      {
       longitude: 31.232364200000063,
       latitude: 30.045645500000035,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Mobaco Cottons",
    isMostVisited: false
      },
      {
       longitude: 31.242133800000033,
       latitude: 30.046476900000073,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Al Ahram Clothing (Men's Dept.)",
    isMostVisited: false
      },
      {
       longitude: 31.24061030000007,
       latitude: 30.051481300000034,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "TiE HOUSE",
    isMostVisited: false
      },
      {
       longitude: 31.243299600000057,
       latitude: 30.052371700000037,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Punto",
    isMostVisited: false
      },
      {
       longitude: 31.24059340000008,
       latitude: 30.05118760000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "مكتب سنوب",
    isMostVisited: false
      },
      {
       longitude: 31.239159700000073,
       latitude: 30.053240300000027,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "سعودي",
    isMostVisited: false
      },
      {
       longitude: 31.241350200000056,
       latitude: 30.052355700000078,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Bavly",
    isMostVisited: false
      },
      {
       longitude: 31.239865800000075,
       latitude: 30.049712600000078,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "يحيى ميجا ستور للاحذيه",
    isMostVisited: false
      },
      {
       longitude: 31.24006010000005,
       latitude: 30.050102800000047,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "New Born",
    isMostVisited: false
      },
      {
       longitude: 31.24499060000005,
       latitude: 30.052287200000023,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Remember",
    isMostVisited: false
      },
      {
       longitude: 31.242593200000044,
       latitude: 30.052274200000056,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "جولدن مان هاوس",
    isMostVisited: false
      },
      {
       longitude: 31.244178900000065,
       latitude: 30.05225610000008,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Dodo",
    isMostVisited: false
      },
      {
       longitude: 31.241030400000056,
       latitude: 30.05198910000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "التالته شمال للملابس الرياضية",
    isMostVisited: false
      },
      {
       longitude: 31.239531500000055,
       latitude: 30.04943080000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "TiE HOUSE",
    isMostVisited: false
      },
      {
       longitude: 31.239848600000073,
       latitude: 30.050131600000043,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Ticker",
    isMostVisited: false
      },
      {
       longitude: 31.24276750000007,
       latitude: 30.052474500000073,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "سويدان",
    isMostVisited: false
      },
      {
       longitude: 31.24062370000007,
       latitude: 30.050972400000035,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Adel Abu Hemila",
    isMostVisited: false
      },
      {
       longitude: 31.24061910000006,
       latitude: 30.05121440000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "M.h",
    isMostVisited: false
      },
      {
       longitude: 31.243839000000037,
       latitude: 30.052702400000044,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Sama",
    isMostVisited: false
      },
      {
       longitude: 31.242116100000032,
       latitude: 30.053043900000034,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Shaalan",
    isMostVisited: false
      },
      {
       longitude: 31.241238000000067,
       latitude: 30.05018210000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Oufa",
    isMostVisited: false
      },
      {
       longitude: 31.238222000000064,
       latitude: 30.047812700000065,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Tulip",
    isMostVisited: false
      },
      {
       longitude: 31.24332270000008,
       latitude: 30.052427700000067,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "بور فؤاد T.k",
    isMostVisited: false
      },
      {
       longitude: 31.242116100000032,
       latitude: 30.053043900000034,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Mony Work",
    isMostVisited: false
      },
      {
       longitude: 31.240056800000048,
       latitude: 30.05009720000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Cellini",
    isMostVisited: false
      },
      {
       longitude: 31.241385000000037,
       latitude: 30.048673500000064,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Soha Style",
    isMostVisited: false
      },
      {
       longitude: 31.231425500000057,
       latitude: 30.057939400000066,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "مول أبو جبل لأحدث الملابس الحديثة",
    isMostVisited: false
      },
      {
       longitude: 31.245811900000035,
       latitude: 30.049506300000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "أم تى كاجوال \/ حريمى",
    isMostVisited: false
      },
      {
       longitude: 31.241039200000046,
       latitude: 30.05037710000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "سنيور أميجو",
    isMostVisited: false
      },
      {
       longitude: 31.24115210000008,
       latitude: 30.05181310000006,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Walker",
    isMostVisited: false
      },
      {
       longitude: 31.24053420000007,
       latitude: 30.050249300000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "فلاش",
    isMostVisited: false
      },
      {
       longitude: 31.238253300000054,
       latitude: 30.04782840000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "بدل بسعر المصنع",
    isMostVisited: false
      },
      {
       longitude: 31.24373330000003,
       latitude: 30.05049820000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Borai",
    isMostVisited: false
      },
      {
       longitude: 31.246475300000043,
       latitude: 30.051749200000074,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "خطاب سنتر",
    isMostVisited: false
      },
      {
       longitude: 31.240801400000066,
       latitude: 30.05121040000006,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "De Backer s",
    isMostVisited: false
      },
      {
       longitude: 31.24445910000003,
       latitude: 30.05192370000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Donia El Nagham",
    isMostVisited: false
      },
      {
       longitude: 31.233220300000028,
       latitude: 30.05560090000006,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "سنتر الحرمين",
    isMostVisited: false
      },
      {
       longitude: 31.239999500000067,
       latitude: 30.048303600000054,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "فانتازيا",
    isMostVisited: false
      },
      {
       longitude: 31.236870000000067,
       latitude: 30.04546460000006,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Qasr Shahrazad For Clothes",
    isMostVisited: false
      },
      {
       longitude: 31.23969930000004,
       latitude: 30.04811440000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "جود هاوس",
    isMostVisited: false
      },
      {
       longitude: 31.237666000000047,
       latitude: 30.04615700000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "نوسة للملابس",
    isMostVisited: false
      },
      {
       longitude: 31.240008700000033,
       latitude: 30.048253600000066,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "El Kawthar",
    isMostVisited: false
      },
      {
       longitude: 31.240076300000055,
       latitude: 30.048316000000057,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "سقراط",
    isMostVisited: false
      },
      {
       longitude: 31.23767600000008,
       latitude: 30.047270000000026,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محلات العروسه",
    isMostVisited: false
      },
      {
       longitude: 31.238126400000056,
       latitude: 30.04802140000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "مكتب راناش ملابس حريمى",
    isMostVisited: false
      },
      {
       longitude: 31.238998800000047,
       latitude: 30.04803940000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Georges Men's wear",
    isMostVisited: false
      },
      {
       longitude: 31.243189200000074,
       latitude: 30.04925030000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "يارا",
    isMostVisited: false
      },
      {
       longitude: 31.24319070000007,
       latitude: 30.049420600000076,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Chance",
    isMostVisited: false
      },
      {
       longitude: 31.241063300000064,
       latitude: 30.048647500000072,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Candy Marsh",
    isMostVisited: false
      },
      {
       longitude: 31.239773800000023,
       latitude: 30.04816990000006,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Clue",
    isMostVisited: false
      },
      {
       longitude: 31.239212300000077,
       latitude: 30.04837450000008,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Naga Homme",
    isMostVisited: false
      },
      {
       longitude: 31.240963500000078,
       latitude: 30.051042100000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "القصر",
    isMostVisited: false
      },
      {
       longitude: 31.236790300000052,
       latitude: 30.045325200000036,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Onado",
    isMostVisited: false
      },
      {
       longitude: 31.23389620000006,
       latitude: 30.055357900000047,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "West El Balad",
    isMostVisited: false
      },
      {
       longitude: 31.23607110000006,
       latitude: 30.048459500000035,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محل شمبليون ملابس",
    isMostVisited: false
      },
      {
       longitude: 31.241693600000076,
       latitude: 30.048741600000028,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Chalons",
    isMostVisited: false
      },
      {
       longitude: 31.24142210000008,
       latitude: 30.048720900000035,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Bravo",
    isMostVisited: false
      },
      {
       longitude: 31.238761000000068,
       latitude: 30.048387800000057,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "القصر papion",
    isMostVisited: false
      },
      {
       longitude: 31.24093110000007,
       latitude: 30.04829330000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Canilli",
    isMostVisited: false
      },
      {
       longitude: 31.240381400000047,
       latitude: 30.048226200000045,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Casileya",
    isMostVisited: false
      },
      {
       longitude: 31.23834370000003,
       latitude: 30.047892800000056,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "سيمون - Simone",
    isMostVisited: false
      },
      {
       longitude: 31.23976680000004,
       latitude: 30.04782700000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Carina",
    isMostVisited: false
      },
      {
       longitude: 31.242104700000027,
       latitude: 30.048981000000026,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "صاصى",
    isMostVisited: false
      },
      {
       longitude: 31.24004830000007,
       latitude: 30.050082700000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Leonard",
    isMostVisited: false
      },
      {
       longitude: 31.24179900000007,
       latitude: 30.04900470000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "coctail",
    isMostVisited: false
      },
      {
       longitude: 31.241447600000072,
       latitude: 30.04853490000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "سيمون أرزت",
    isMostVisited: false
      },
      {
       longitude: 31.24041710000006,
       latitude: 30.048224300000072,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Al Motahajiba",
    isMostVisited: false
      },
      {
       longitude: 31.23581340000004,
       latitude: 30.045417600000064,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "عبد الله للحزام",
    isMostVisited: false
      },
      {
       longitude: 31.2414222,
       latitude: 30.048720900000035,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "DalyDress",
    isMostVisited: false
      },
      {
       longitude: 31.238455600000066,
       latitude: 30.047174100000063,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Lastella Talaat Harb",
    isMostVisited: false
      },
      {
       longitude: 31.240080100000057,
       latitude: 30.050136500000065,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "And 1",
    isMostVisited: false
      },
      {
       longitude: 31.24105510000004,
       latitude: 30.051665400000047,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محلات ونان",
    isMostVisited: false
      },
      {
       longitude: 31.23571160000006,
       latitude: 30.044419600000026,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "woman clothes",
    isMostVisited: false
      },
      {
       longitude: 31.24161890000005,
       latitude: 30.05200300000007,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "جولدن مان هاوس",
    isMostVisited: false
      },
      {
       longitude: 31.240086500000075,
       latitude: 30.05014730000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Dott",
    isMostVisited: false
      },
      {
       longitude: 31.240668200000073,
       latitude: 30.04940830000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Jamaica.MegaStore",
    isMostVisited: false
      },
      {
       longitude: 31.232364200000063,
       latitude: 30.045645500000035,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Mobaco Cottons",
    isMostVisited: false
      },
      {
       longitude: 31.240857900000037,
       latitude: 30.051365100000055,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Men's Club",
    isMostVisited: false
      },
      {
       longitude: 31.236819300000036,
       latitude: 30.045376100000055,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Good man",
    isMostVisited: false
      },
      {
       longitude: 31.243927300000053,
       latitude: 30.052409700000055,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "المنى سنتر",
    isMostVisited: false
      },
      {
       longitude: 31.243927400000075,
       latitude: 30.05245510000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "كوبال",
    isMostVisited: false
      },
      {
       longitude: 31.239255600000035,
       latitude: 30.050241700000072,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Twelve",
    isMostVisited: false
      },
      {
       longitude: 31.238701800000058,
       latitude: 30.047332100000062,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Givil",
    isMostVisited: false
      },
      {
       longitude: 31.241246700000033,
       latitude: 30.05024540000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "محل رحمة",
    isMostVisited: false
      },
      {
       longitude: 31.240099300000054,
       latitude: 30.050169200000028,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "2 Side",
    isMostVisited: false
      },
      {
       longitude: 31.241787500000044,
       latitude: 30.052924000000075,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "فريندز",
    isMostVisited: false
      },
      {
       longitude: 31.24014630000005,
       latitude: 30.048380500000064,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Lacaza",
    isMostVisited: false
      },
      {
       longitude: 31.23389620000006,
       latitude: 30.055357900000047,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "West El Balad",
    isMostVisited: false
      },
      {
       longitude: 31.23571160000006,
       latitude: 30.044419600000026,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Embrator",
    isMostVisited: false
      },
      {
       longitude: 31.25528070000007,
       latitude: 30.049032900000043,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Nabih Kamel For Clothes",
    isMostVisited: false
      },
      {
       longitude: 31.24373330000003,
       latitude: 30.05049820000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "Borai",
    isMostVisited: false
      },
      {
       longitude: 31.242906300000072,
       latitude: 30.048910100000057,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "مكتب فينوس لملابس الجمله حريمي",
    isMostVisited: false
      },
      {
       longitude: 31.253282900000045,
       latitude: 30.05179860000004,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "سنتر النهار",
    isMostVisited: false
      },
      {
       longitude: 31.25297210000008,
       latitude: 30.05150880000008,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "وسط البلد القاهرة 1937",
    isMostVisited: false
      },
      {
       longitude: 31.235600900000065,
       latitude: 30.04760760000005,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "مكتب روسيل جملة حريمى كاجوال",
    isMostVisited: false
      },
      {
       longitude: 31.253817600000048,
       latitude: 30.049182100000053,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "احمد انور الموسكي",
    isMostVisited: false
      },
      {
       longitude: 31.265360400000077,
       latitude: 30.09552610000003,
      code: 1003,
      city: 1010,
      cityName: "Cairo",
       name: "West El Balad",
    isMostVisited: false
      },




     {
      longitude: 31.234779,
     latitude: 30.047618,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Egyptian Night Hostel",
      isMostVisited: false
     },
     {
      longitude: 31.2362901,
     latitude: 30.0482252,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Cairo Dream Boutique Hotel",
      isMostVisited: false
     },
     {
      longitude: 31.2392468,
     latitude: 30.0430633,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Cecilia Hotel فندق سيسيليا",
      isMostVisited: false
     },
     {
      longitude: 31.2410826,
     latitude: 30.0496277,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Royal city hotel",
      isMostVisited: false
     },
     {
      longitude: 31.2396991,
     latitude: 30.0475232,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Kings Palace Hostel",
      isMostVisited: false
     },
     {
      longitude: 31.2392519,
     latitude: 30.0491844,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Palace Court Hotel",
      isMostVisited: false
     },
     {
      longitude: 31.2387868,
     latitude: 30.0466656,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Bella Casa Hostel",
      isMostVisited: false
     },
     {
      longitude: 31.2410739,
     latitude: 30.049474,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Egy Days Hotel فندق ايجي دايز",
      isMostVisited: false
     },
     {
      longitude: 31.2403699,
     latitude: 30.0508808,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Gardenia Hotel",
      isMostVisited: false
     },
     {
      longitude: 31.2435417,
     latitude: 30.0548725,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "فندق نيو بالاس",
      isMostVisited: false
     },
     {
      longitude: 31.2353214,
     latitude: 30.0470974,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "فندق المضيفة شامبليون",
      isMostVisited: false
     },
     {
      longitude: 31.2378528,
     latitude: 30.0467747,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Lotus Hotel",
      isMostVisited: false
     },
     {
      longitude: 31.2385317,
     latitude: 30.0471822,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Hotel Grand Royal Cairo",
      isMostVisited: false
     },
     {
      longitude: 31.238945,
     latitude: 30.047631,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Philo Hotel",
      isMostVisited: false
     },
     {
      longitude: 31.234779,
     latitude: 30.047618,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Egyptian Night Hostel",
      isMostVisited: false
     },
     {
      longitude: 31.2485437,
     latitude: 30.0550734,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Nagib Al Rihani",
      isMostVisited: false
     },
     {
      longitude: 31.2445028,
     latitude: 30.055729,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "African House Hostel",
      isMostVisited: false
     },
     {
      longitude: 31.2425033,
     latitude: 30.0565882,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "my place hostel",
      isMostVisited: false
     },
     {
      longitude: 31.2425035,
     latitude: 30.0562368,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "agata hostel",
      isMostVisited: false
     },
     {
      longitude: 31.2478029,
     latitude: 30.0555529,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "فندق الريحاني",
      isMostVisited: false
     },
     {
      longitude: 31.2480145,
     latitude: 30.0589225,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "لوكاندة سوهاج الكبرى",
      isMostVisited: false
     },
     {
      longitude: 31.2499965,
     latitude: 30.0558568,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "لوكاندة الشبيبة المصرية",
      isMostVisited: false
     },
     {
      longitude: 31.245579,
     latitude: 30.0560203,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Happyton Hotel",
      isMostVisited: false
     },
     {
      longitude: 31.2449106,
     latitude: 30.0585472,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Big Ben Hotel",
      isMostVisited: false
     },
     {
      longitude: 31.250177,
     latitude: 30.0551268,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Alchorsnal Hotel",
      isMostVisited: false
     },
     {
      longitude: 31.2382494,
     latitude: 30.0478296,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Cairo Inn",
      isMostVisited: false
     },
     {
      longitude: 31.2434203,
     latitude: 30.0513104,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "فنادق ادم وسط البلد - القاهرة",
      isMostVisited: false
     },
     {
      longitude: 31.235259,
     latitude: 30.0467285,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Steigenberger Hotel El Tahrir Cairo",
      isMostVisited: false
     },
     {
      longitude: 31.2383576,
     latitude: 30.0479572,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Miramar Talaat Harb",
      isMostVisited: false
     },
     {
      longitude: 31.2392519,
     latitude: 30.0491844,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Hostgram Hotel",
      isMostVisited: false
     },
     {
      longitude: 31.2396465,
     latitude: 30.0481962,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Cairo Capital Plaza",
      isMostVisited: false
     },
     {
      longitude: 31.2354973,
     latitude: 30.0459913,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "City View Hotel",
      isMostVisited: false
     },
     {
      longitude: 31.2379437,
     latitude: 30.0463749,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Golden hotel Cairo",
      isMostVisited: false
     },
     {
      longitude: 31.2435199,
     latitude: 30.0454765,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Abdeen palace hotel",
      isMostVisited: false
     },
     {
      longitude: 31.2441556,
     latitude: 30.0515686,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Hotel Velvet 1889",
      isMostVisited: false
     },
     {
      longitude: 31.2439631,
     latitude: 30.0467934,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Bostan Hotel",
      isMostVisited: false
     },
     {
      longitude: 31.2434203,
     latitude: 30.0513104,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Grand lyly Hotel",
      isMostVisited: false
     },
     {
      longitude: 31.2432641,
     latitude: 30.0458115,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Sunset Hostel Cairo فندق صن ست القاهرة",
      isMostVisited: false
     },
     {
      longitude: 31.2438805,
     latitude: 30.0462232,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Happy City Hotel",
      isMostVisited: false
     },
     {
      longitude: 31.2444839,
     latitude: 30.0516014,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Family palace hotel Cairo",
      isMostVisited: false
     },
     {
      longitude: 31.2445626,
     latitude: 30.0520792,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Nitocrisse Hotel",
      isMostVisited: false
     },
     {
      longitude: 31.2424455,
     latitude: 30.0466194,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Golden Star Hotel",
      isMostVisited: true
     },
     {
      longitude: 31.2445268,
     latitude: 30.0517016,
      code: 1004,
      city: 1010,
      cityName: "Cairo",
     name: "Pension Roma",
      isMostVisited: false
     },

     {
      longitude: 31.230301,
      latitude: 30.056907,
      code: 1005,
      city: 1010,
      cityName: "Cairo",
     name: "سوق وكاله البلح",
      isMostVisited: false
     },
     {
      longitude: 31.245355,
      latitude: 30.056349,
      code: 1005,
      city: 1010,
      cityName: "Cairo",
     name: "مول البستان",
      isMostVisited: false

     },
     {
      longitude: 31.244944,
      latitude: 30.053602,
      code: 1005,
      city: 1010,
      cityName: "Cairo",
     name: "سوق الازبكيه",
      isMostVisited: false
     },
     {
      longitude: 31.249757,
      latitude: 30.062119,
      code: 1005,
      city: 1010,
      cityName: "Cairo",
     name: "سوق الموسكي",
      isMostVisited: false
     },
     {
      longitude: 31.235714,
      latitude: 30.044405,
      code: 1005,
      city: 1010,
      cityName: "Cairo",
     name: "مول طلعت حرب ",
      isMostVisited: false
     },
     {
      longitude: 31.237528,
      latitude: 30.045532,
      code: 1005,
      city: 1010,
      cityName: "Cairo",
     name: "سوق الشوربي",
      isMostVisited: false
     },

     {
     longitude: 31.246803000000057,
      latitude: 30.052346000000057,
     code: 1006,
      city: 1010,
      cityName: "Cairo",
      name: "Attaba",
     isMostVisited: false
     },
     {
     longitude: 31.300980000000038,
      latitude: 30.07325700000007,
     code: 1006,
      city: 1010,
      cityName: "Cairo",
      name: "Fair Zone",
     isMostVisited: false
     },
     {
     longitude: 31.244162300000028,
      latitude: 30.04532160000008,
     code: 1006,
      city: 1010,
      cityName: "Cairo",
      name: "Mohamed Naguib",
     isMostVisited: false
     },
     {
     longitude: 31.24205420000004,
      latitude: 30.056688500000064,
     code: 1006,
      city: 1010,
      cityName: "Cairo",
      name: "Orabi",
     isMostVisited: false
     },
     {
     longitude: 31.234423900000024,
      latitude: 30.04413610000006,
     code: 1006,
      city: 1010,
      cityName: "Cairo",
      name: "Sadat",
     isMostVisited: false
     },
     {
     longitude: 31.238362000000052,
      latitude: 30.037033300000076,
     code: 1006,
      city: 1010,
      cityName: "Cairo",
      name: "Saad Zaghloul",
     isMostVisited: false
     },
     {
     longitude: 31.246050600000046,
      latitude: 30.06107140000006,
     code: 1006,
      city: 1010,
      cityName: "Cairo",
      name: "Al-Shohadaa",
     isMostVisited: false
     },
     {
     longitude: 31.238733000000025,
      latitude: 30.053500000000042,
     code: 1006,
      city: 1010,
      cityName: "Cairo",
      name: "Nasser",
     isMostVisited: true
     },
     {
     longitude: 31.235860900000034,
      latitude: 30.043622000000028,
     code: 1006,
      city: 1010,
      cityName: "Cairo",
      name: "Sadat Metro Station",
     isMostVisited: true
     },
     {
     longitude: 31.240837700000043,
      latitude: 30.05260540000006,
     code: 1006,
      city: 1010,
      cityName: "Cairo",
      name: "Gamal Ahabd Al Naser Metro Station G3L",
     isMostVisited: false
     },


     {
      longitude: 31.2440859,
      latitude: 30.0436057,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "Mobile Shop",
      isMostVisited: false
     },
     {
      longitude: 31.2415366,
      latitude: 30.0503919,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "Radio Shack Mobile Shop",
      isMostVisited: false
     },
     {
      longitude: 31.2432681,
      latitude: 30.0454328,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "الأفوكاتو موبايل",
      isMostVisited: false
     },
     {
      longitude: 31.2347129,
      latitude: 30.0467142,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "موبى منجز",
      isMostVisited: false
     },
     {
      longitude: 31.2420346,
      latitude: 30.0464601,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "الأفوكاتو شارع شريف",
      isMostVisited: false
     },
     {
      longitude: 31.2424029,
      latitude: 30.0511026,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "ElAvocato Mobile",
      isMostVisited: false
     },
     {
      longitude: 31.2440468,
      latitude: 30.0417316,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "الو البركة فون لجميع خدمات المحمول",
      isMostVisited: false
     },
     {
      longitude: 31.2425601,
      latitude: 30.0453424,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "شركة عالم المحمول",
      isMostVisited: false
     },
     {
      longitude: 31.2423813,
      latitude: 30.047648,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "المهدي ستور - ElMahdy Store",
      isMostVisited: false
     },
     {
      longitude: 31.2456336,
      latitude: 30.0609192,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "Nasser sons mobile shop",
      isMostVisited: false
     },
     {
      longitude: 31.2496097,
      latitude: 30.0489861,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "الباشا للالكترونيات",
      isMostVisited: false
     },
     {
      longitude: 31.2357116,
      latitude: 30.0444196,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "ميني شارع عبد العزيز",
      isMostVisited: false
     },
     {
      longitude: 31.248922,
      latitude: 30.0476722,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "حنفي ستورز",
      isMostVisited: false
     },
     {
      longitude: 31.2417575,
      latitude: 30.0450183,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "التميمى",
      isMostVisited: false
     },
     {
      longitude: 31.2426414,
      latitude: 30.0521385,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "Sherif Center",
      isMostVisited: false
     },
     {
      longitude: 31.2423804,
      latitude: 30.0455233,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "فرست",
      isMostVisited: false
     },
     {
      longitude: 31.2443562,
      latitude: 30.0505884,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "Halawa",
      isMostVisited: false
     },
     {
      longitude: 31.2436369,
      latitude: 30.0526774,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "Free girl",
      isMostVisited: false
     },
     {
      longitude: 31.2385046,
      latitude: 30.0456583,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "توبى كمبيوتر",
      isMostVisited: false
     },
     {
      longitude: 31.2424767,
      latitude: 30.0471625,
      code: 1007,
      city: 1010,
      cityName: "Cairo",
      name: "First ElSahhar Mobile Shop",
      isMostVisited: false
     },


     {
      longitude: 31.2426729,
      latitude: 30.0470042,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Shoebox",
      isMostVisited: false
     },
     {
      longitude: 31.2400522,
      latitude: 30.0500893,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Hr Shoes",
      isMostVisited: false
     },
     {
      longitude: 31.2407222,
      latitude: 30.0507188,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "B.M SHOES&BAGS",
      isMostVisited: false
     },
     {
      longitude: 31.2434023,
      latitude: 30.0523838,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "احذية اشرف",
      isMostVisited: false
     },
     {
      longitude: 31.2421937,
      latitude: 30.0525181,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "المهر للأحذية- كلاس1",
      isMostVisited: false
     },
     {
      longitude: 31.2409698,
      latitude: 30.0510505,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "الحذاء الذهبى",
      isMostVisited: false
     },
     {
      longitude: 31.2413026,
      latitude: 30.0520423,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "소피코 علاء الدين",
      isMostVisited: false
     },
     {
      longitude: 31.2429959,
      latitude: 30.0491015,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "casual",
      isMostVisited: false
     },
     {
      longitude: 31.2424939,
      latitude: 30.0492865,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "مجرى النيل",
      isMostVisited: false
     },
     {
      longitude: 31.2422316,
      latitude: 30.0489632,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Dejavu",
      isMostVisited: false
     },
     {
      longitude: 31.2466125,
      latitude: 30.0527528,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "احذية مهران",
      isMostVisited: false
     },
     {
      longitude: 31.2452253,
      latitude: 30.0527126,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "B.M SHOES&BAGS",
      isMostVisited: false
     },
     {
      longitude: 31.2391195,
      latitude: 30.0512369,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "برونتو شوز",
      isMostVisited: false
     },
     {
      longitude: 31.2410387,
      latitude: 30.0516405,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "المهر",
      isMostVisited: false
     },
     {
      longitude: 31.2400568,
      latitude: 30.0500972,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Gox man",
      isMostVisited: false
     },
     {
      longitude: 31.2368828,
      latitude: 30.0550062,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "مصنع أحذية أولاد منصور",
      isMostVisited: false
     },
     {
      longitude: 31.2418173,
      latitude: 30.0529063,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "الرملى",
      isMostVisited: false
     },
     {
      longitude: 31.2437057,
      latitude: 30.0508213,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "مصنع و معرض أحذية بابل",
      isMostVisited: false
     },
     {
      longitude: 31.2400796,
      latitude: 30.0497389,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Fi-Fa",
      isMostVisited: false
     },
     {
      longitude: 31.2451553,
      latitude: 30.0513754,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "محل شقاوة",
      isMostVisited: false
     },
     {
      longitude: 31.2394891,
      latitude: 30.0487879,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "زلط",
      isMostVisited: false
     },
     {
      longitude: 31.251531,
      latitude: 30.0520324,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "شوز",
      isMostVisited: false
     },
     {
      longitude: 31.2450907,
      latitude: 30.0496792,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Ma لتجارة الأحذية",
      isMostVisited: false
     },
     {
      longitude: 31.2410042,
      latitude: 30.0490098,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Azab",
      isMostVisited: false
     },
     {
      longitude: 31.2387885,
      latitude: 30.0483691,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "عبده صالح",
      isMostVisited: false
     },
     {
      longitude: 31.2465307,
      latitude: 30.0522597,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "محلات اولاد فتحي للاحذية",
      isMostVisited: false
     },
     {
      longitude: 31.2396961,
      latitude: 30.0491824,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "أبو حلقة",
      isMostVisited: false
     },
     {
      longitude: 31.2420771,
      latitude: 30.0447243,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "فالكون",
      isMostVisited: false
     },
     {
      longitude: 31.2418455,
      latitude: 30.042247,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Eye club",
      isMostVisited: false
     },
     {
      longitude: 31.242829,
      latitude: 30.0489285,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "ساكسون",
      isMostVisited: false
     },
     {
      longitude: 31.242803,
      latitude: 30.0489192,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "روزينا",
      isMostVisited: false
     },
     {
      longitude: 31.2428179,
      latitude: 30.0489246,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "توب",
      isMostVisited: false
     },
     {
      longitude: 31.2427175,
      latitude: 30.0492684,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "كانديس",
      isMostVisited: false
     },
     {
      longitude: 31.2400849,
      latitude: 30.048302,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Enigma",
      isMostVisited: false
     },
     {
      longitude: 31.2395992,
      latitude: 30.0484803,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "روبى",
      isMostVisited: false
     },
     {
      longitude: 31.2397102,
      latitude: 30.0478279,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "محل عرابي للاحذية",
      isMostVisited: false
     },
     {
      longitude: 31.2416353,
      latitude: 30.0488901,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "بى إم",
      isMostVisited: false
     },
     {
      longitude: 31.2392519,
      latitude: 30.048047,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "بوتيك ٢٢",
      isMostVisited: false
     },
     {
      longitude: 31.2397976,
      latitude: 30.0485346,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "لطفى",
      isMostVisited: false
     },
     {
      longitude: 31.242615,
      latitude: 30.049112,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "كابريس",
      isMostVisited: false
     },
     {
      longitude: 31.2418194,
      latitude: 30.0501453,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "كلاركس",
      isMostVisited: false
     },
     {
      longitude: 31.2397775,
      latitude: 30.0503165,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "نبيل الشيخ",
      isMostVisited: false
     },
     {
      longitude: 31.2413849,
      latitude: 30.0486736,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Hook",
      isMostVisited: false
     },
     {
      longitude: 31.23997,
      latitude: 30.0501876,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "السمالوطى",
      isMostVisited: false
     },
     {
      longitude: 31.2422344,
      latitude: 30.052392,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "ناجح جيد",
      isMostVisited: false
     },
     {
      longitude: 31.2419384,
      latitude: 30.0524211,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "ليون جانى",
      isMostVisited: false
     },
     {
      longitude: 31.2407977,
      latitude: 30.0512012,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "المرشدى",
      isMostVisited: false
     },
     {
      longitude: 31.2439762,
      latitude: 30.0445738,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "هناء للاحذية",
      isMostVisited: false
     },
     {
      longitude: 31.2419947,
      latitude: 30.046595,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "ديادورا",
      isMostVisited: false
     },
     {
      longitude: 31.2391252,
      latitude: 30.0482462,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "عرابى",
      isMostVisited: false
     },
     {
      longitude: 31.2413089,
      latitude: 30.0514869,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Pronto Shoes Talaat Harb 2",
      isMostVisited: false
     },
     {
      longitude: 31.2397885,
      latitude: 30.0491245,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "ريتش",
      isMostVisited: false
     },
     {
      longitude: 31.2396841,
      latitude: 30.0490933,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Dido",
      isMostVisited: false
     },
     {
      longitude: 31.2404273,
      latitude: 30.0502677,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "برونتو",
      isMostVisited: false
     },
     {
      longitude: 31.240064,
      latitude: 30.050093,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "بيبو",
      isMostVisited: false
     },
     {
      longitude: 31.24008,
      latitude: 30.0497847,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Ahmed mahmoud أحمد محمود للأحذيه",
      isMostVisited: false
     },
     {
      longitude: 31.2393923,
      latitude: 30.0501733,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "الجباس",
      isMostVisited: false
     },
     {
      longitude: 31.2392519,
      latitude: 30.048047,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "بوتيك ٢٢",
      isMostVisited: false
     },
     {
      longitude: 31.2390088,
      latitude: 30.0486281,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Volley البنا",
      isMostVisited: false
     },
     {
      longitude: 31.2404702,
      latitude: 30.0470351,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "روسيا للاحذيه الرياضيه",
      isMostVisited: false
     },
     {
      longitude: 31.2395003,
      latitude: 30.048781,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Duetto",
      isMostVisited: false
     },
     {
      longitude: 31.2400741,
      latitude: 30.0501264,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "السمالوطى",
      isMostVisited: false
     },
     {
      longitude: 31.240032,
      latitude: 30.0501305,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Rocket",
      isMostVisited: false
     },
     {
      longitude: 31.2433538,
      latitude: 30.04951,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "السروجي للأحذية",
      isMostVisited: false
     },
     {
      longitude: 31.2408521,
      latitude: 30.0497979,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "سيف ستور",
      isMostVisited: false
     },
     {
      longitude: 31.2425607,
      latitude: 30.0466574,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "الجباس",
      isMostVisited: false
     },
     {
      longitude: 31.2410599,
      latitude: 30.0515747,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Golden shoes",
      isMostVisited: false
     },
     {
      longitude: 31.2413175,
      latitude: 30.0520482,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "B.m",
      isMostVisited: false
     },
     {
      longitude: 31.2397655,
      latitude: 30.0492157,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Radio",
      isMostVisited: false
     },
     {
      longitude: 31.2408094,
      latitude: 30.0507101,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Milano Shoes أحذية ميلانو",
      isMostVisited: false
     },
     {
      longitude: 31.2398658,
      latitude: 30.0497126,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "يحيى ميجا ستور للاحذيه",
      isMostVisited: false
     },
     {
      longitude: 31.2434381,
      latitude: 30.0494247,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "الأمراء",
      isMostVisited: false
     },
     {
      longitude: 31.2412866,
      latitude: 30.0502133,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Kenzo",
      isMostVisited: false
     },
     {
      longitude: 31.242502,
      latitude: 30.0487694,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "تيفولى",
      isMostVisited: false
     },
     {
      longitude: 31.243022,
      latitude: 30.050266,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "أحذية كوكو الخواجة",
      isMostVisited: false
     },
     {
      longitude: 31.243873,
      latitude: 30.0524551,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "مرعى",
      isMostVisited: false
     },
     {
      longitude: 31.24418,
      latitude: 30.0523491,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "Taher",
      isMostVisited: false
     },
     {
      longitude: 31.2439762,
      latitude: 30.0445738,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "ميبل",
      isMostVisited: false
     },
     {
      longitude: 31.244522,
      latitude: 30.052412,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "الفطايرى",
      isMostVisited: false
     },
     {
      longitude: 31.2449146,
      latitude: 30.0514181,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "احذية المصرية",
      isMostVisited: false
     },
     {
      longitude: 31.243063,
      latitude: 30.0527404,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "هدهد للاحذية",
      isMostVisited: false
     },
     {
      longitude: 31.2467478,
      latitude: 30.0531098,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "احذية على الدين",
      isMostVisited: false
     },
     {
      longitude: 31.2419384,
      latitude: 30.0524211,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "ليون جانى",
      isMostVisited: false
     },
     {
      longitude: 31.2353614,
      latitude: 30.0391126,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "متجر احذيه",
      isMostVisited: false
     },
     {
      longitude: 31.2464388,
      latitude: 30.0527606,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "مصطفى محمد",
      isMostVisited: false
     },
     {
      longitude: 31.2394838,
      latitude: 30.0495338,
      code: 1008,
      city: 1010,
      cityName: "Cairo",
      name: "روللى",
      isMostVisited: false
     },

     {
      longitude: 31.243768700000032,
      latitude: 30.05362640000004,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "آخر ساعة",
      isMostVisited: false
     },
     {
      longitude: 31.238186400000075,
      latitude: 30.046594800000037,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "Felfela",
      isMostVisited: false
     },
     {
      longitude: 31.243330400000048,
      latitude: 30.053191300000037,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم النجاح للمأكولات الشرقية",
      isMostVisited: false
     },
     {
      longitude: 31.239293100000054,
      latitude: 30.047208500000067,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "القزاز",
      isMostVisited: false
     },
     {
      longitude: 31.240048900000033,
      latitude: 30.04417090000004,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم السوق",
      isMostVisited: false
     },
     {
      longitude: 31.235420700000077,
      latitude: 30.046011700000065,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم علي بابا",
      isMostVisited: false
     },
     {
      longitude: 31.228627300000028,
      latitude: 30.045632400000045,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم دار القمر (مطعم لبناني)",
      isMostVisited: false
     },
     {
      longitude: 31.24371590000004,
      latitude: 30.041036000000076,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم بجه",
      isMostVisited: false
     },
     {
      longitude: 31.244126900000026,
      latitude: 30.046136400000023,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "محمد فريد",
      isMostVisited: false
     },
     {
      longitude: 31.23957180000008,
      latitude: 30.043084300000032,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم الشروق",
      isMostVisited: false
     },
     {
      longitude: 31.240048900000033,
      latitude: 30.04417090000004,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم السوق",
      isMostVisited: false
     },
     {
      longitude: 31.23571160000006,
      latitude: 30.044419600000026,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطبخ الشيف ام ملك آكل بيتي جاهز",
      isMostVisited: false
     },
     {
      longitude: 31.243932700000073,
      latitude: 30.04367170000006,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم التوكل",
      isMostVisited: false
     },
     {
      longitude: 31.23995180000003,
      latitude: 30.045745600000032,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم الجمهورية",
      isMostVisited: false
     },
     {
      longitude: 31.23985780000004,
      latitude: 30.042648300000053,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم برعى",
      isMostVisited: false
     },
     {
      longitude: 31.242762800000037,
      latitude: 30.051341000000036,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "LA Chesa Restaurant",
      isMostVisited: false
     },
     {
      longitude: 31.241430000000037,
      latitude: 30.04322030000003,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "سندوتشات ابو مالك",
      isMostVisited: false
     },
     {
      longitude: 31.245364300000062,
      latitude: 30.04077410000008,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "Amm Mohammed foool cart",
      isMostVisited: false
     },
     {
      longitude: 31.23574640000004,
      latitude: 30.049743600000056,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "سندوتشات الفتح",
      isMostVisited: false
     },
     {
      longitude: 31.24224890000005,
      latitude: 30.049835900000062,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم وسط البلد",
      isMostVisited: false
     },
     {
      longitude: 31.238186400000075,
      latitude: 30.046594800000037,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "Felfela",
      isMostVisited: false
     },
     {
      longitude: 31.239293100000054,
      latitude: 30.047208500000067,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "القزاز",
      isMostVisited: false
     },
     {
      longitude: 31.235420700000077,
      latitude: 30.046011700000065,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم علي بابا",
      isMostVisited: false
     },
     {
      longitude: 31.244126900000026,
      latitude: 30.046136400000023,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "محمد فريد",
      isMostVisited: false
     },
     {
      longitude: 31.23822800000005,
      latitude: 30.044599000000062,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم كشري التحرير",
      isMostVisited: false
     },
     {
      longitude: 31.23849910000007,
      latitude: 30.04647310000007,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم الكحلاوي",
      isMostVisited: false
     },
     {
      longitude: 31.240508600000055,
      latitude: 30.047136300000034,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم نورين",
      isMostVisited: false
     },
     {
      longitude: 31.241460800000027,
      latitude: 30.050395500000036,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم جاد",
      isMostVisited: false
     },
     {
      longitude: 31.239698800000042,
      latitude: 30.044708900000046,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم طاهر",
      isMostVisited: false
     },
     {
      longitude: 31.24031800000006,
      latitude: 30.050977000000046,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "آخر ساعة",
      isMostVisited: false
     },
     {
      longitude: 31.243768700000032,
      latitude: 30.05362640000004,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "آخر ساعة",
      isMostVisited: false
     },
     {
      longitude: 31.243330400000048,
      latitude: 30.053191300000037,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم النجاح للمأكولات الشرقية",
      isMostVisited: false
     },
     {
      longitude: 31.24268870000003,
      latitude: 30.05505540000007,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم بوابة الشام",
      isMostVisited: false
     },
     {
      longitude: 31.253784300000063,
      latitude: 30.05603700000006,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم الشامي للاسماك",
      isMostVisited: false
     },
     {
      longitude: 31.244948700000066,
      latitude: 30.054734000000053,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم فول و طعمية",
      isMostVisited: false
     },
     {
      longitude: 31.24342770000004,
      latitude: 30.05348200000003,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم وكبابجي الفي بك",
      isMostVisited: false
     },
     {
      longitude: 31.252366400000028,
      latitude: 30.055440200000078,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم الارزاق بالله",
      isMostVisited: false
     },
     {
      longitude: 31.252495300000078,
      latitude: 30.062200000000075,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم النجاح",
      isMostVisited: false
     },
     {
      longitude: 31.246968500000037,
      latitude: 30.05980930000004,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم الحاتى",
      isMostVisited: false
     },
     {
      longitude: 31.23272090000006,
      latitude: 30.056187400000056,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم وكبابجى الأمانة",
      isMostVisited: false
     },
     {
      longitude: 31.23498120000005,
      latitude: 30.064859900000044,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "El Zein Restaurant مطعم الزين",
      isMostVisited: false
     },
     {
      longitude: 31.23272090000006,
      latitude: 30.056187400000056,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم وكبابجى الأمانة",
      isMostVisited: false
     },
     {
      longitude: 31.243330400000048,
      latitude: 30.053191300000037,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم النجاح للمأكولات الشرقية",
      isMostVisited: false
     },
     {
      longitude: 31.227291200000025,
      latitude: 30.064678900000047,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم ذا لاونج",
      isMostVisited: false
     },
     {
      longitude: 31.223394600000063,
      latitude: 30.059672800000044,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "O's Pasta",
      isMostVisited: false
     },
     {
      longitude: 31.232688300000063,
      latitude: 30.055937800000038,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم الشرقية",
      isMostVisited: false
     },
     {
      longitude: 31.221178000000066,
      latitude: 30.060609800000066,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "ظاظا كوزين مطعم",
      isMostVisited: false
     },
     {
      longitude: 31.222556600000075,
      latitude: 30.061467700000037,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "Tayer Ya Fatayer Zamalek طاير يا فطاير الزمالك",
      isMostVisited: false
     },
     {
      longitude: 31.219312500000058,
      latitude: 30.061083300000064,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "مطعم زووبا للمأكولات المصرية",
      isMostVisited: false
     },
     {
      longitude: 31.229866000000072,
      latitude: 30.056955500000072,
      code: 1009,
      city: 1010,
      cityName: "Cairo",
      name: "الدريني",
      isMostVisited: false
     }










  ];



     egyptCities:City[] = [
      { name: "Cairo", code: 1010 ,imageUrl:"assets/img/cities/cairo.png"},
      { name: "Alexandria", code: 102,imageUrl:"assets/img/cities/alex.png"},
      { name: "Luxor", code: 103 ,imageUrl:"assets/img/cities/luxor.png"},
      { name: "Aswan", code: 104,imageUrl:"assets/img/cities/aswan.png"},
      { name: "Giza", code: 105 ,imageUrl:"assets/img/cities/giza.png"},
      { name: "Damietta", code: 106 ,imageUrl:"assets/img/cities/damietta.png"},
      { name: "Sohag", code: 107,imageUrl:"assets/img/cities/suhaj.png"},
      { name: "Port Said", code: 108 ,imageUrl:"assets/img/cities/port_said.png"},
      { name: "Suez", code: 109 ,imageUrl:"assets/img/cities/suez.png"},
      { name: "Mansoura", code: 110 ,imageUrl:"assets/img/cities/daqahliya.png"}, // Just to demonstrate, repeating numbers to keep length
  ];

  egyCategories:Category[]=[
    { name: "Cafes", code:1001 },
    { name: "Electricity stores", code: 1002 },
    { name: "clothing stores", code: 1003 },
    { name: "Hotels", code: 1004 },
    { name: "Markets", code: 1005 },
    { name: "Metro stations", code: 1006 },
    { name: "Mobile stores", code: 1007 },
    { name: "Shoe stores", code: 1008 },
    { name: "Restaurants", code: 1009 },


  ];



  safetyPlaces:Place[] = [
    {
      longitude: 31.224725300000046,
      latitude: 30.028102500000045,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Fire brigade نقطة إطفاء النيل",
      isMostVisited: false
     },
     {
      longitude: 31.262753900000064,
      latitude: 30.055663500000037,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Central Fire Department",
      isMostVisited: false
     },
     {
      longitude: 31.245582200000058,
      latitude: 30.08524310000007,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "نقطة إطفاء الساحل - المطافي",
      isMostVisited: false
     },
     {
      longitude: 31.190437600000052,
      latitude: 30.056789700000024,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "مطافي",
      isMostVisited: false
     },
     {
      longitude: 31.302705700000047,
      latitude: 30.10658490000003,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Fire Fighting Station",
      isMostVisited: false
     },
     {
      longitude: 31.327067600000078,
      latitude: 30.118076900000062,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Fire Fighting Station",
      isMostVisited: false
     },
     {
      longitude: 31.477314100000058,
      latitude: 30.064886000000058,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Rehab Fire Station",
      isMostVisited: false
     },
     {
      longitude: 31.42521830000004,
      latitude: 29.99661080000004,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Fire Station",
      isMostVisited: false
     },
     {
      longitude: 31.223826700000075,
      latitude: 30.18313610000007,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Ashtrays Qalioub station",
      isMostVisited: false
     },
     {
      longitude: 31.351441100000045,
      latitude: 30.141388600000028,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "El Marg FirePoint",
      isMostVisited: false
     },
     {
      longitude: 31.252576300000044,
      latitude: 30.065363700000034,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "نقطة إطفاء مهمشة",
      isMostVisited: false
     },
     {
      longitude: 31.262753900000064,
      latitude: 30.055663500000037,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Central Fire Department",
      isMostVisited: false
     },
     {
      longitude: 31.28983370000003,
      latitude: 30.088740700000074,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Central Fire Department",
      isMostVisited: false
     },
     {
      longitude: 31.302705700000047,
      latitude: 30.10658490000003,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Fire Fighting Station",
      isMostVisited: false
     },
     {
      longitude: 31.224725300000046,
      latitude: 30.028102500000045,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Fire brigade نقطة إطفاء النيل",
      isMostVisited: false
     },
     {
      longitude: 31.243155200000047,
      latitude: 30.061078700000053,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "محطة مكروباصات رمسيس",
      isMostVisited: false
     },
     {
      longitude: 31.245582200000058,
      latitude: 30.08524310000007,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "نقطة إطفاء الساحل - المطافي",
      isMostVisited: false
     },
     {
      longitude: 31.244199700000024,
      latitude: 30.060323500000038,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "السجل المدني - الازبكية",
      isMostVisited: false
     },
     {
      longitude: 31.327067600000078,
      latitude: 30.118076900000062,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Fire Fighting Station",
      isMostVisited: false
     },
     {
      longitude: 31.477314100000058,
      latitude: 30.064886000000058,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Rehab Fire Station",
      isMostVisited: false
     },
     {
      longitude: 31.262753900000064,
      latitude: 30.055663500000037,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Central Fire Department",
      isMostVisited: false
     },
     {
      longitude: 31.249518900000055,
      latitude: 30.04986310000004,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "مطافئ العتبة",
      isMostVisited: false
     },
     {
      longitude: 31.302705700000047,
      latitude: 30.10658490000003,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Fire Fighting Station",
      isMostVisited: false
     },
     {
      longitude: 31.245582200000058,
      latitude: 30.08524310000007,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "نقطة إطفاء الساحل - المطافي",
      isMostVisited: false
     },
     {
      longitude: 31.327067600000078,
      latitude: 30.118076900000062,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Fire Fighting Station",
      isMostVisited: false
     },
     {
      longitude: 31.250395000000026,
      latitude: 30.051961000000063,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "El Mousky District Presidency",
      isMostVisited: false
     },
     {
      longitude: 31.477314100000058,
      latitude: 30.064886000000058,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Rehab Fire Station",
      isMostVisited: false
     },
     {
      longitude: 31.351441100000045,
      latitude: 30.141388600000028,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "El Marg FirePoint",
      isMostVisited: false
     },
     {
      longitude: 31.42521830000004,
      latitude: 29.99661080000004,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Fire Station",
      isMostVisited: false
     },
     {
      longitude: 31.28983370000003,
      latitude: 30.088740700000074,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Central Fire Department",
      isMostVisited: false
     },
     {
      longitude: 31.262753900000064,
      latitude: 30.055663500000037,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Central Fire Department",
      isMostVisited: false
     },
     {
      longitude: 31.224725300000046,
      latitude: 30.028102500000045,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Fire brigade نقطة إطفاء النيل",
      isMostVisited: false
     },
     {
      longitude: 31.245582200000058,
      latitude: 30.08524310000007,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "نقطة إطفاء الساحل - المطافي",
      isMostVisited: false
     },
     {
      longitude: 31.247763500000076,
      latitude: 30.040554100000065,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Abdin District Presidency",
      isMostVisited: false
     },
     {
      longitude: 31.24649560000006,
      latitude: 30.056555600000024,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Al Fady Fire Fighting & Safety Equipment",
      isMostVisited: false
     },
     {
      longitude: 31.241457900000057,
      latitude: 30.051126800000077,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "غازتك وسط البلد gastec",
      isMostVisited: false
     },
     {
      longitude: 31.477314100000058,
      latitude: 30.064886000000058,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Rehab Fire Station",
      isMostVisited: false
     },
     {
      longitude: 31.249293700000067,
      latitude: 30.043662400000073,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Abdin Police Department",
      isMostVisited: false
     },
     {
      longitude: 31.246936900000037,
      latitude: 30.063229900000067,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Cairo",
      isMostVisited: false
     },
     {
      longitude: 31.224725300000046,
      latitude: 30.028102500000045,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Fire brigade نقطة إطفاء النيل",
      isMostVisited: false
     },
     {
      longitude: 31.28983370000003,
      latitude: 30.088740700000074,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Central Fire Department",
      isMostVisited: false
     },
     {
      longitude: 31.239735000000053,
      latitude: 30.052079500000048,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Cooperation Station",
      isMostVisited: false
     },
     {
      longitude: 31.262753900000064,
      latitude: 30.055663500000037,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Central Fire Department",
      isMostVisited: false
     },
     {
      longitude: 31.245582200000058,
      latitude: 30.08524310000007,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "نقطة إطفاء الساحل - المطافي",
      isMostVisited: false
     },
     {
      longitude: 31.23144170000006,
      latitude: 30.03492280000006,
      code: 1011,
      city: 1010,
      cityName: "Cairo",
      name: "Kasr El Nil Police Station",
      isMostVisited: false
     }

  ];


  egysafetyCategories:Category[]=[
    { name: "Fire extinguishing points", code:1011 },



  ];



 reviews: Review[] = [
  {
    id: 1,
    created_at: "2022-12-15",
    updated_at: "2022-12-16",
    student_name: "Ahmed Kareem",
    comment_title: "Great Experience!",
    comment: "The website is fantastic! Easy to navigate and incredibly useful.",
    stars: 5,
    avatar: "",
  },
  {
    id: 2,
    created_at: "2022-11-20",
    updated_at: "2022-11-25",
    student_name: "Nour Omar",
    comment_title: "Impressive Design",
    comment: "Love the design and the well-curated content. A must-visit!",
    stars: 5,
    avatar: "",
  },
  {
    id: 3,
    created_at: "2022-10-05",
    updated_at: "2022-10-08",
    student_name: "Aya Hossam",
    comment_title: "Efficient and Effective",
    comment: "Saves time with its clear recommendations. Highly recommended!",
    stars: 5,
    avatar: "",
  },
  {
    id: 4,
    created_at: "2022-09-12",
    updated_at: "2022-09-15",
    student_name: "Youssef Mahmoud",
    comment_title: "Smooth Browsing",
    comment: "Excellent site for discovering online gems. Seamless experience!",
    stars: 5,
    avatar: "",
  },
  // Add more comments with varying properties and older dates
];

  constructor(private http: HttpClient) {}


  getPlacesRequest()  {
    return this.safetyPlaces;
   }


  getPlaceServiceRequest()  {
    return this.placesEgypt;
   }
  getCategoriesServiceRequest(){

    return this.egyCategories;

    }


    getCategoriesRequest(){

      return this.egysafetyCategories;

      }

    getCitiesRequest() {
     return this.egyptCities;
   }




   getAllUniversitiesRequest() {

    return this.http.get(`${environment.apiURL}universities?${environment.per_page}all` );

   }

   async getUniversityByID(id: string) {
    return this.http.get(`${environment.apiURL}universities/${id}`);
  }


  async  getPlaceByID(id: string): Promise<Place | undefined> {
    const parsedId: number = parseInt(id, 10); // Parse the ID to a number if needed
    // Find the place with the matching code
    const place: Place | undefined = this.placesEgypt.find(place => place.code === parsedId);

    return place;
  }


  async  getsafetyPlaceByID(id: string): Promise<Place | undefined> {
    const parsedId: number = parseInt(id, 10); // Parse the ID to a number if needed
    // Find the place with the matching code
    const place: Place | undefined = this.safetyPlaces.find(place => place.code === parsedId);

    return place;
  }



  //  ApplySearch(Parameter: string):Observable<any> {
  //   return this.http.get(`${environment.apiURL}universities?name=${Parameter}`);
  // }

  ApplySearch(searchTerm: string): Observable<Place[]> {
    // Filtering places based on the provided search term
    const filteredPlaces = this.placesEgypt.filter(place =>
      place.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return of(filteredPlaces);
  }








  async ApplyCountryFilter(Parameter: any) {

    return this.http.get(`${environment.apiURL}universities?countries_ids=${Parameter}`);
  }



  async applyCitiesServiceFilter(parameter: { codes: string }): Promise<Place[]> {
    try {
      const citiesCodes: number[] = parameter.codes.split(',').map(code => parseInt(code.trim(), 10));
      const filteredPlacesCities: Place[] = this.placesEgypt.filter(place => citiesCodes.includes(place.city));
      return filteredPlacesCities;
    } catch (error) {
      console.error("Error applying city filter:", error);
      return [];
    }
  }

  async applyCitiesFilter(parameter: { codes: string }): Promise<Place[]> {
    try {
      const citiesCodes: number[] = parameter.codes.split(',').map(code => parseInt(code.trim(), 10));
      const filteredPlacesCities: Place[] = this.safetyPlaces.filter(place => citiesCodes.includes(place.city));
      return filteredPlacesCities;
    } catch (error) {
      console.error("Error applying city filter:", error);
      return [];
    }
  }


  async applyCategoryServiceFilter(parameter: { codes: string }): Promise<Place[]> {
    try {
      const codesArray: number[] = parameter.codes.split(',').map(code => parseInt(code.trim(), 10));
      const filteredPlacesCategories: Place[] = this.placesEgypt.filter(place => codesArray.includes(place.code));
      return filteredPlacesCategories;
    } catch (error) {
      console.error("Error applying category filter:", error);
      return []; // Return empty array or handle the error as needed
    }
  }


  async applyCategoryFilter(parameter: { codes: string }): Promise<Place[]> {
    try {
      const codesArray: number[] = parameter.codes.split(',').map(code => parseInt(code.trim(), 10));
      const filteredPlacesCategories: Place[] = this.safetyPlaces.filter(place => codesArray.includes(place.code));
      return filteredPlacesCategories;
    } catch (error) {
      console.error("Error applying category filter:", error);
      return []; // Return empty array or handle the error as needed
    }
  }


  getTopPlacesRequest(){

    const topPlaces: Place[] =   this.placesEgypt.filter(place => place.isMostVisited==true);

     return  topPlaces.slice(0, 3);

     }


}

