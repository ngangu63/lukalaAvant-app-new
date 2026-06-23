import { Injectable } from '@angular/core';
import { BigPicture } from './big-picture';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BigPictureService {

  constructor() { }

  private bigPictures: BigPicture[] = [
    { name: 'Léopold Ngoma', role: 'Président , ', location: 'Angleterre', imageUrl: 'assets/images/dirigeants/LeopoldNgoma.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Pierre Matondo Nzingu', role: 'Vice-Président Afrique , ', location: 'DR Congo', imageUrl: 'assets/images/dirigeants/JuniorNzingu1.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Antoine Dede Kavungu', role: 'Vice-Président Europe , ', location: 'France', imageUrl: 'assets/images/dirigeants/DedeKavunguUpdate.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Gerry Mabiala', role: 'Vice-Président Amerique , ', location: "États-Unis", imageUrl: 'assets/images/dirigeants/GerryMabiala.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Rémy Miantezila', role: 'Conseiller , Webmaster ; ', location: 'États-Unis', imageUrl: 'assets/images/Remy_Cravate2.jpg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: 'Software Engineer', message: 'Sending love to all of you!', LinkedIn: 'https://www.linkedin.com/in/remy-miantezila-miabwa/' },
    { name: 'Eugenie Malayi', role: 'Trésorière , ', location: 'Canada', imageUrl: 'assets/images/dirigeants/EugenieMalayi2.jpg', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Pascal Mieluzeyi', role: 'Secrétaire , ', location: 'Canada', imageUrl: 'assets/images/dirigeants/Pascal5Mieluzeyi.jpg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Daniel Meboya', role: 'Coordonnateur  , ', location: 'Ouganda', imageUrl: 'assets/images/dirigeants/DanielMeboya2.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Germaine Nsenga', role: '', location: 'France', imageUrl: 'assets/images/NsengaGermaine.jpeg', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Joscky Wasukama ', role: 'Conseiller , ', location: 'France', imageUrl: 'assets/images/dirigeants/MasukalaJosky2.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Coco Mitouche', role: 'Commissaire aux comptes , ', location: 'France', imageUrl: 'assets/images/dirigeants/Mitouche2.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Niko J T Bubuzi', role: 'Conseiller , ', location: 'France', imageUrl: 'assets/images/dirigeants/NicoBubuzi.jpg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Mathieu Tusalamo Mfumu Buala', role: 'Conseiller , ', location: 'Belgique', imageUrl: 'assets/images/dirigeants/MathewTusalamo2.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Simon Sakade Nsakala', role: 'Avocat , ', location: 'DR Congo', imageUrl: 'assets/images/dirigeants/Simon_Sakade_Nsakala2.jpg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Dally Mvemba', role: 'Conseiller', location: 'France', imageUrl: 'assets/images/dirigeants/MvembaDally.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Aisé Ngeyitala ', role: '', location: 'États-Unis', imageUrl: 'assets/images/membres/AiseMiantezila.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Marcelline Mboyi', role: '', location: 'Angletere', imageUrl: 'assets/images/membres/Marceline1Mboyi.jpg', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Shay Nlandu', role: '', location: 'Angola', imageUrl: 'assets/images/membres/Nlandu_Shay2.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Silumpunisa Baron Luyituku', role: '', location: 'DR Congo', imageUrl: 'assets/images/membres/Silumpunisa1.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Jean Marc Simbi', role: '', location: 'États-Unis', imageUrl: 'assets/images/membres/JeanMarcSimbi.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Jason Tamba', role: '', location: 'États-Unis', imageUrl: 'assets/images/membres/JasonTamba.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'José Nzayambela', role: '', location: 'France', imageUrl: 'assets/images/membres/JosyNzayambela.jpeg', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Jean Pierre Miankodila', role: '', location: 'États-Unis', imageUrl: 'assets/images/membres/JPMinkodila.jpeg', gender: 1, defaultImage: 'assets/images/JPMinkodila.jpeg', profession: '', message: '', LinkedIn: '' },
    { name: 'Samuel Mankuika', role: '', location: 'DR Congo', imageUrl: 'assets/images/membres/SaintMankuika.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Massonet Massongele', role: '', location: 'DR Congo', imageUrl: 'assets/images/membres/MassongeleMasonnet2.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Réne Mamingi', role: '', location: 'DR Congo', imageUrl: 'assets/images/membres/ReneMamingi.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Samy Kedo', role: '', location: 'DR Congo', imageUrl: 'assets/images/membres/SamyKedo.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Valentin Kitemoko', role: '', location: 'Allemagne', imageUrl: 'assets/images/membres/ValentinKitemoko.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Pierre Bania', role: '', location: 'DR Congo', imageUrl: 'assets/images/membres/BaniaPiere.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' , profession: '', message: '', LinkedIn: '' },
    { name: 'Bemvindo Woollams Tio Koffi Koffiento', role: '', location: 'Canada', imageUrl: 'assets/images/membres/BemvindoWoollams1.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Blaise Muloki Miahumba', role: '', location: 'DR Congo', imageUrl: 'assets/images/membres/BlaiseMulokiMiahumba1.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Anselme  Miahumba', role: '', location: 'DR Congo', imageUrl: 'assets/images/membres/AnselmeMiahumba1.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'André Kinsona (NDRO)', role: '', location: 'DR Congo', imageUrl: 'assets/images/membres/AndreKinsona.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'José Mukoko', role: '', location: 'DR Congo', imageUrl: 'assets/images/membres/JoseMukoko.jpeg', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    /* { name: 'Fidele Menavanza', role: '', location: 'États-Unis', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Clémentine Buaka', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Constant Lutonda', role: '', location: 'Brésil', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Darry', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: "Houmba Dezai N'Accompa", role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Dieu Kindomba', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Donat Bitazi', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Emma Kindomba', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Mamie Kindomba', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Nicole DUZE', role: '', location: 'Angleterre', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Felicien Kindomba', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Françoise Mankuika', role: '', location: 'Angleterre', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Gina Kiaku ', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Justin Kulabuna', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Lipasa Olivier', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Luza Charlotte', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Charlotte Nsongo', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Malu', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Marie Landu', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Fuakuingi Every', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Niorra Ntonzi', role: '', location: 'Canada', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Nzuzi Mvula', role: '', location: 'Allemagne', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Piff Bitazi', role: '', location: 'Angleterre', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Constance Nsungi Matondo', role: '', location: 'États-Unis', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Rose Mankuika', role: '', location: 'Angletere', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Soukouma Lipasa', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Willy Mieluzeye', role: '', location: 'Irlande', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Zoumack Mafuila', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Nicole', role: '', location: 'Angleterre', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Adrien Ngudiankama', role: '', location: 'États-Unis', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Alex Diandimba', role: '', location: 'Canada', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Alpha Nsimba', role: '', location: 'Allemagne', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Arsène Mpulusu', role: '', location: 'Angleterre', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Bona Kiaku', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Bulay', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Glody Ngeyitala ', role: '', location: 'États-Unis', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Edo Makobokele', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Ma Maguy', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Teresa Maria Kindomba', role: '', location: "France", imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Anaclet Masamba', role: '', location: 'DR Congo', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Rachel Bakala', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Moïse Fuakuingi', role: '', location: 'Angleterre', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
     */
  ];


  // Method to return the entire array of Pictures
  getBigPictures(): BigPicture[] {
    // return this.bigPictures; 
    return [...this.bigPictures];
  }

  searchBigPictureByName(query: string): Observable<BigPicture[] | undefined> {
    const filteredNames = this.bigPictures.filter(picture =>
      picture.name.toLowerCase().includes(query.toLowerCase().trim())
    );
    return of(filteredNames); // Simulating an API call
  }

  // Method to return a Picture by name
  getBigPictureByName(name: string): BigPicture[] {
    let retPict: BigPicture[] = this.bigPictures.filter(picture => picture.name.toLowerCase().includes(name.toLowerCase().trim()));
    if (retPict.length != 0) return retPict;
    else return this.lookAgain(this.bigPictures, name);

  }
  lookAgain(bigPictures: BigPicture[], name: string): BigPicture[] {

    let retPict: BigPicture[] = [];

    for (const bigPicture of bigPictures) {

      if (this.isSubstringWithTolerance(name.toLowerCase().trim(), bigPicture.name.toLowerCase().trim())) {
        retPict.push(bigPicture);
      }
    }
    return retPict;

  }



  // Method to return a Picture by array index
  getBigPictureByIndex(index: number): BigPicture | undefined {
    return this.bigPictures[index];
  }



  isSubstringWithTolerance(shortStr: string, longStr: string): boolean {
    // Helper function to check if two strings of the same length differ by at most one character
    function differByOneChar(word1: string, word2: string): boolean {
      if (word1.length !== word2.length) return false;

      let mismatchCount = 0;

      for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
          mismatchCount++;
          if (mismatchCount > 1) return false;
        }
      }

      return mismatchCount === 1;
    }

    // Split the long string into words
    const words = longStr.split(" ");

    // Check if any word matches the short string exactly or differs by one character
    for (const word of words) {
      if (word === shortStr || differByOneChar(word, shortStr)) {
        return true;
      }
    }

    return false;
  }


}