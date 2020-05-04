import { Injectable } from '@angular/core';
import { Place } from '../../place.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  placesRef: AngularFireList<any>;
  placeRef: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase,
  ) { }
  
  getPlace(name: string) {
    this.placeRef = this.db.object('places/' + name);
    return this.placeRef;
  }

  getPlaces() {
    this.placesRef = this.db.list('places');
    return this.placesRef;
  }
}
