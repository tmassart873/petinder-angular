import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable, tap} from "rxjs";
import {Pet} from "../model/Pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private url: string;

  constructor(private http: HttpClient,) {
    this.url = `${environment.backendUrl}/pets`;
  }

  //sorting alphabetically
  getPets(): Observable<any> {
    return this.http.get<Pet[]>(this.url).pipe(
      map(pets => pets.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      }))
    );
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.url, pet);

  }

  getPetByName(name: string): Observable<Pet> {
    const url = `${this.url}/${name}`;
    return this.http.get<Pet>(url).pipe(
      tap(_ => console.log(`fetched pet name=${name}`))
    )
  }
}
