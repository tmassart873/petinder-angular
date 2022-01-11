import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Pet} from "../../model/Pet";
import {FormGroup} from "@angular/forms";
import {PetService} from "../../service/pet.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {

  pet?: Pet
  sendTextForm!: FormGroup;

  constructor(private route: ActivatedRoute, private petService: PetService, private location: Location) {
  }

  ngOnInit(): void {
    this.getPet();
  }

  getPet(): void {
    const petName = String(this.route.snapshot.paramMap.get('name'));
    this.petService.getPetByName(petName).subscribe(pet => this.pet = pet);
  }

  back(): void {
    this.location.back()
  }

}
