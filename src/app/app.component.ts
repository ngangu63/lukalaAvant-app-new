import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { RouterModule } from '@angular/router';
import { OthersMembersComponent } from './others-members/others-members.component';
import { CommonModule } from '@angular/common';
import { LesDirigeantsComponent } from './les-dirigeants/les-dirigeants.component';
import { BigPicture } from './big-picture';
import { BigPictureService } from './big-picture.service';
import { FormsModule } from '@angular/forms';
import { lukalaMediaList } from './features/media-player/lukala-media';
import { MediaFile } from './features/media-player/media-file';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MyfooterComponent,
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myDropDown-app';

  /** Media items shown in the "Lukala s'amuse" dropdown. */
  lukalaMediaList: MediaFile[] = lukalaMediaList;
  isSearchEnabled: boolean = true;
  searchQuery: string = '';
  searchResults: BigPicture[] = [];

  modalPicture: string = '';
  message: string = '';
  personName: string = '';

  isModalOpen = false;
  password = '';
  validPassword = '2026';

  constructor(
    private pictureService: BigPictureService,
    private router: Router,
  ) {}

  checkPassword(route: string): void {
    if (this.password === this.validPassword) {
      this.password = '';
      this.isModalOpen = false;
      this.router.navigate([route]); // navigate dynamically to the route
    } else {
      alert('Invalid password!');
      this.router.navigate(['#']);
    }
  }

  toggleSearch(enable: boolean) {
    this.isSearchEnabled = true;
  }

  onChildActivate(componentRef: any) {
    // Enable search only for certain child components
    this.isSearchEnabled =
      componentRef instanceof LesDirigeantsComponent ||
      componentRef instanceof OthersMembersComponent;
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.searchResults = this.pictureService.getBigPictureByName(
        this.searchQuery.trim(),
      );
    }
    if (this.searchResults.length == 0) {
      this.personName = 'Aucun nom trouvé';
      this.modalPicture = '';
      this.message = '';
    } else {
      this.modalPicture = this.searchResults[0].imageUrl;
      this.message = this.searchResults[0].message;
      this.personName = this.searchResults[0].name;
    }
  }

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  ClosepassModel() {
    const modelDiv = document.getElementById('passwordModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  getRainbowColor(index: number): string {
    const hue = (index * 25) % 360; // controls color spread
    return `hsl(${hue}, 70%, 50%)`;
  }

  worldMusicList = [  


    { name: 'John Denver - Take Me Home, Country Roads', link: ['/TakeMeHome', '1vrEljMfXYo'] }, 
    { name: 'Brian  Simpson Barcelona', link: ['/Barcelona', 'fToQyqufe3w'] }, 
    { name: 'Benny Rivers – Step by Step In Time', link: ['/StepByStep', 'lRGG1dqWotU'] },  
    { name: 'Benny Rivers – I Won"t Fall Again', link: ['/FallAgain', '8KrLFLdlAqA'] },  
    { name: 'Earl Whitaker – Not Young Anymore', link: ['/NotYoungAnymore', 'XTC_0XaY19A'] }, 
    { name: 'Whitney Houston - I Will Always Love You', link: ['/AlwaysLoveYou', '3JWTaaS7LdU'] },  
    { name: 'Phil Collins - Do You Remember?', link: ['/doyouremember', 'NTvR7HySgHo'] }, 
    { name: 'Elton John - Sacrifice', link: ['/sacrifice', 'NrLkTZrPZA4'] },  
    { name: 'Michael Jackson - Human Nature', link: ['/humanNature', 'ElN_4vUvTPs'] },
    { name: "Christopher Cross - Sailing", link: ['/Salling', '9PnXcP8ZI7M'],},
    { name: "Maxwell - Ascension (Don't Ever Wonder)", link: ['/DontEverWonder', 'D7rm9t5S4uE']},
    { name: 'After 7 - Ready or Not', link: ['/ReadyOrNot', 'fohpiig8N4U'] },
    { name: 'George Michael, Aretha Franklin - I Knew You Were Waiting', link: ['/IKnewYouWereWaiting', 'fDxzQJaA228']},
    { name: 'Johnny Gill - My My My', link: ['/MyMyMy', 'LMcANn_5UxM'] },
    { name: "Joe - All The Things (Your Man Won't Do) ",link: ['/AllTheThings', 'cVi25pSRAkc'] },
    { name: 'The Three Degrees - When Will I See You Again', link: ['/WhenIseeYouAngain', '3R878g-SppU'] },
    { name: "Love Unlimited Orchestra ~ Love's Theme 1973 Disco", link: ['/LoveTheme', 'RLTJ95kj9ng']},
    { name: "Tina - What's Love Got To Do With it", link: ['/TinaWhatLove', 'oGpFcHTxjZs'] },
    { name: 'Toni Braxton - Long As I Live', link: ['/LongAsILive', 'EjW7WzozgI0'] },
    { name: 'Patti labelle - On My Own ft', link: ['/OnMyOwnft', 'KsH63qJlIMM'] },
    { name: 'Percy Faith - The Theme from "A Summer Place"', link: ['/ASummerPlace', '3ofmPuHBCCc'] },
    { name: 'Haha - Take On Me', link: ['/TakeOnMe', 'djV11Xbc914'] },
    { name: 'Dieudonne Larose - Accident', link: ['/Accident', '31LxCq1DPDk'] },
    { name: 'Thomas Frinking: Coastline', link: ['/CoastLine', 'b0i4h4ywO1w'] },
    { name: "Chaka Khan: Ain't Nobody", link: ['/AinTNobody', 'rcAv1cGAeXE'] },
    { name: 'Julio Iglesias: Vous les femmes', link: ['/VousLesFemmes', 'FWhwwSX3fEA'] },
    { name: 'George Michael - Careless Whisper', link: ['/CarelessWhisper', 'izGwDsrQ1eQ'] },
    { name: 'Sade - Kiss Of Life', link: ['/KissOfLife', 'MmOau-PMWJk'] },
    { name: 'Francis Bebey - Bana ba Zaire', link: ['/Kinshasa', 'lzZz_yVZ9Y0']},
    { name: 'Grace Jones - La Vie En Rose',link: ['/LaVieEnRose', 'E5M7l_z93rg'] },
    { name: 'EL Negro Y RAY - Carnaval', link: ['/Carnavale', '-A2Wwyuqa6g'] },
    { name: 'The Temptations - Treat Her Like A Lady', link: ['/LikeALady', '3jqHdZi3EYU'] },
    { name: 'Foreigner - I want to Know What Love Is', link: ['/WhatToKnow', 'r3Pr1_v7hsw']},
    { name: 'Quicy Jones - Summer In The City', link: ['/SummerInCity', 'jpbK4tLQH_s']},
    { name: "Claude Barzotti - Prends bien soin d'elle", link: ['/PrendSoinDelle', 'hPZvuowFkx8']},
    { name: 'Julio Iglesias - Fideles', link: ['/Fideles', 'cqS-VrUEiHo'] },
    { name: 'George Benson - Shiver', link: ['/Shiver', '8VLnxe7BBq0'] },
    { name: 'The EQS - In Our Dream', link: ['/OurDream', 'IQsbmLqNF1A'] },
    { name: 'Madona - Holiday', link: ['/Holiday', 'h4bP9tj_0Zk'] },
    { name: 'Whitney with Kenny G - For The Love Of You', link: ['/ForTheLoveOfYou', '_BB48yeqQ8Q']},
    { name: 'Kool and The Gang - Fresh', link: ['/Fresh', 'sTJ1XwGDcA4'] },
    { name: 'S.O.S Band - The Finest', link: ['/TheFinest', 'iK0YkFOD18U'] },
    { name: 'Cherrelle - Saturday Love', link: ['/SaturdayLove', 'efLcgUQmyT8'] },
    { name: 'Alphaville - Forever Young',link: ['/ForeverYoung', 'oNjQXmoxiQ8'] },
    { name: 'Regina Belle - Baby Come To Me', link: ['/BabyComeToMe', 'pQflBV1UgVY'] },
    { name: 'Kenny Loggins -Love Will Follow', link: ['/LoveWillFollow', 'ANA_hlouklY']},
    { name: 'Laura Branigan - Self Control', link: ['/SelfControl', 'RP0_8J7uxhs'] },
    { name: 'George McCrae: Rock Your Baby', link: ['/RockYourBaby', '6Q15-kql1YE'] },
  ];

  sportList = [
    { name: 'Ciza 80', link: ['/ciza'] },
    { name: 'Cilu', link: ['/cilu'] },
  ];

  congoMusicList = [
    { name: 'Africa mokili mobimba  - FAYA TESS', link: ['/AfricaMokili','MXcCK8A8LQo'] }, 
    { name: 'MOSOLO - FAYA TESS', link: ['/FayaTMosolo','rhZOzxNSst4'] }, 
    { name: 'ESWI YO WAPI - FAYA TESS', link: ['/FayaTessEswi','9kRwzBZChZo'] },
    { name: 'Rtc Riva - Madilu System', link: ['/RTCRIVA', 'owgNTJlBjNQ'] },
    { name: 'Hortense', link: ['/Hortense', 'VpvDSz8skb8'] },
    { name: 'Koukoulou - Koffi', link: ['/Koukoulou', 'j8gCb6bKC44'] },
    { name: 'Kelhia - Mbilia Bel', link: ['/Kelhiambiliabel', '0SpzfQnFC4Q'] },
    { name: 'Eswi yo wapi - Mbilia Bel', link: ['/Eswiyowapi', 'gcrkm2HFV-o'] },
    { name: 'Adios Tete - Faya Tess', link: ['/AdiosTete', 'hwYMYYG5MlY'] },
    { name: 'Maze - Rochereau Tabu Ley', link: ['/Maze', 'xUaMEARE-2E'] },
    { name: 'Beyanga - Mbilia Bel', link: ['/Beyanga', 'ZhXnj3EACXA'] },
    { name: 'Matata ya Mwasi na mobali  - FAYA TESS', link: ['/MatataYaMuasi','1T1zz_2ZhTE'] },
    { name: 'Molunge Ya Mbanda', link: ['/MolungeYaMbanda', '53ck5zij__o'] }, 
    { name: 'Laurent fantome', link: ['/FayaLaurentFantome', 'yHy3NBmep14'] },
    { name: 'Bon Samaritain - Papa Noel', link: ['/BonSamaritain', '8bMc6-VWvMM'],},
    { name: 'Selia zozo - Papa Noel', link: ['/SeliaZozo', 'aU3hSzW3j3c'] },
    { name: 'Tangawisi', link: ['/Tangawisi', 'Td34YSYubvA'] },
    { name: 'Prolongation - Karmapa', link: ['/Prolongation', 'k3_odBeWt44'] },
    { name: 'Ndaya paradis', link: ['/NdayaParadis', '-FcW4Wexciw'] },
    { name: 'Nzele - Madilu System', link: ['/NzeleMadilu', 'FGkEAN9lMzA'] },
    { name: 'Centieme Dossier - Fally Ipupa', link: ['/CentièmeDossier', 'gIfxaiLOjPQ'],},
    { name: 'Nzambe mokonzi- Bela Bela', link: ['/Nzambemokonzi', 'CXDRyznygQA'],},
    { name: 'Joël photo', link: ['/JoelPhoto', '-a_02lS-lg0'] },
    { name: 'Tokoma ba Camarade Pamba', link: ['/TokomaBaCamarade', 'm7N5ZvrsmjE'],},
    { name: 'Orgasy - Fally Ipupa', link: ['/Orgasy', 'ihmtjqUyFWQ'] },
    { name: 'Point Final', link: ['/PointFinal', 'ulznRM_QQPc'] },
    { name: 'Nzoto Na Nga Se Moko', link: ['/NzotoMoko', 'Po0U1sF45S0'] },
    { name: 'Maya - Simaro', link: ['/Maya', 'e9cKkBGleGE'] },
    { name: 'Zéro faute - Koffi', link: ['/ZéroFaute', 'sDCoVhUilys'] },
    { name: 'Coucou - Koffi', link: ['/Coucou', 'HZNKqR6C1cE'] },
    { name: 'Ngobila - Koffi', link: ['/Ngobila', 'ka-M15DX0Pw'] },
    { name: 'Ndaya', link: ['/Ndaya', 'hNco9iib8nM'] },
    { name: 'Faute Ya Commerçant', link: ['/FauteYaCommerçant', 'uUzK50qrITw'],},
    { name: 'Ebale ya congo', link: ['/EbaleYaCcongo', 'vhoVG_KjEEQ'] },
    { name: 'Mukungu -OK JAZZ', link: ['/Mukungu', 'zveJw24HErM'] },
    { name: 'DJINO - Koffi', link: ['/Djino', 'xaGTNwnHqXM'] },
    { name: 'Pesa Position - OK JAZZ', link: ['/PesaPosition', 'iIwgqiSKGCk'] },
    { name: 'Mabele (Ntoto) - Simaro', link: ['/Mabele', 'RAnITiF0Fgc'] },
    { name: 'Karibou ya Bintou -Tabu Lay', link: ['/KaribouYaBintou', '8kR_o9daD2I'],},
    { name: 'Deliya - Ntesa', link: ['/Deliya', 'YNuSZ3EUS10'] },
    { name: 'Kelya', link: ['/Kelya', '-t6_DXt7jW8'] },
    { name: 'Longo', link: ['/Longo', 'NzLK08ISCbU'] },
    { name: 'Lemba Lemba - Lipua Lipua', link: ['/LembaLemba', 'l77Hw47dEDE'] },
    { name: 'Bonbon sucré', link: ['/BonbonSucré', 'snFPbHQoL7I'] },
    { name: 'Kamale', link: ['/Kamale', 'rEOppwdr2GI'] },
    { name: 'Nzale - Tabu Ley', link: ['/Nzale', 'khl2e6to5Co'] },
    { name: 'Nono - Bella Bella', link: ['/Nono', 'T9CPEkxsNxE'] },
    { name: 'Monzo - OK JAZZ', link: ['/Monzo', '-njsS91vSac'] },
    { name: 'Congo avenir - Tabu Ley', link: ['/CongoAvenir', 'ocVo7rblNB0'] },
    { name: 'Constantation - DJengaka',link: ['/Constantation', '5uBwCIWb108'],},
    { name: 'Matoba - Lipua Lipua', link: ['/Matoba', 'xhxM5RqqDf0'] },
    { name: 'Ebale Ya Zaire - Simaro', link: ['/EbaleYaZaire', '6zh721l_6gI'] },
    { name: 'Jamais Kolonga', link: ['/JamaisKolonga', 'Hhue5hh_IOM'] },
    { name: 'Maya Version2 - Simaro', link: ['/MayaVersion2', '1oPDUjb7j-o'] },
    { name: 'Ikea - Koffi', link: ['/Ikea', 'HxDdpBMWI3Q'] },    
    { name: 'Ayindjo - Nyboma', link: ['/Ayindjo', 'DMDSnkW5tfE'] },  
    { name: 'Ebale ya Congo', link: ['/EbaleYaCcongo', 'vhoVG_KjEEQ'] }, 
    { name: 'Ambiance katho', link: ['/AmbianceKatho', 'epknnlEHi8U'] }, 
    { name: 'Félicité parafifi', link: ['/parafifi', 'AN6keFxEU-U'] }, 
    { name: 'MBROUSS - Zaïko Langa Langa', link: ['/mbrouss', 'pN3s5Ru4QVc'] },
    { name: 'Boh! - Zaïko Langa Langa', link: ['/Sisika','6ACaRrzeGeA'] }, 
    { name: 'Papa na Roissy - Koffi Olomide ', link: ['/papaNaRoissy', 'eJlOM5EyNys'] }, 
    { name: 'Riana- Choc Stars', link: ['/riana', 'c5qhEd9T1x4'] }, 




    


  ];

  religiousMusicList=[
    { name: "La Grandeur De L’éternel - Matou Samuel", link: ['/lagrandeur', 'p8awDlbykVk'] },
    { name: "Mwana Mpate - Gael", link: ['/mwanaMpate', 'tNhX2SknEYQ'] },  
    { name: "Makolo ya massiya - Carlyto Lassa", link: ['/mokoloYamassiya', 'G-t7sh4M7wY'] }, 
    { name: "Ngwende - Athom's et Nadège", link: ['/Ngwende', 'tlkUnqVOUhw'] },  
    { name: "LAMENTATIONS - Mike KALAMBAY", link: ['/Lamentations', 'e5GX0mCCtWQ'] }, 
    { name: "Kiti Ofandi - Mike KALAMBAY", link: ['/KitiOfandi', 'FIKN890VqLQ'] },  
    { name: "NA TIELA YO MOTEMA - Moise Matuta", link: ['/NaTielaYoMotema', '5YqlC3gjhsg'] },  
    { name: "Reconnaissance - Carlyto Lassa", link: ['/Reconnaissance', 'QS86Xr0i9Yc'] },  
    { name: "Nalaki yo - Moise Matuta", link: ['/NalakiYo', 'eSX56P5hbH0'] },  
    { name: "Biso ba oyo- Moise Matuta", link: ['/BisoBaOyo', 'ery0dpkVK80'] },  
    
  ]


}
