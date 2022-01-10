import {Component, Input, OnInit} from '@angular/core';
import {PetService} from "../service/pet.service";
import {Pet} from "../model/Pet";

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  pets: Pet[] = [];
  _selectedPet ?: Pet;
  searchText ?: string;

  constructor(private petService: PetService) {
  }

  ngOnInit(): void {
    this.getPets();
  }

  private getPets() {
    this.petService.getPets().subscribe(pets => this.pets = pets);
  }

  selectedPet(pet: Pet): void {
    this._selectedPet = pet;
  }
}
